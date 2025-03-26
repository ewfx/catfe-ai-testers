import os
from typing import List, Dict, Any
import ollama

class SourceCodeAnalyzer:
    def __init__(self,
                 source_code_folder: str = 'SOURCE_CODE',
                 local_llm_model: str = 'llama3.2',
                 feature_folder: str = 'FEATURE_FILES'):
        """
        Initialize the source code analyzer with local source code and LLM configurations.

        :param source_code_folder: Local folder containing source code
        :param local_llm_model: Local LLM model name (default: llama3)
        :param feature_folder: Folder to store generated feature files
        """
        self.source_code_folder = source_code_folder
        self.local_llm_model = local_llm_model
        self.feature_folder = feature_folder

        # Ensure folders exist
        os.makedirs(source_code_folder, exist_ok=True)
        os.makedirs(feature_folder, exist_ok=True)

        # Setup Local LLM (Ollama)
        try:
            self.ollama_client = ollama.Client()
            print(f"Successfully connected to Ollama with model: {self.local_llm_model}")
        except Exception as e:
            print(f"Error connecting to Ollama: {e}. Please ensure Ollama is running and the model '{self.local_llm_model}' is pulled.")
            self.ollama_client = None

    def analyze_react_components(self) -> List[Dict[str, Any]]:
        """
        Analyzes React components and extracts basic information.

        :return: List of component analysis results
        """
        if not self.ollama_client:
            print("Ollama client not initialized. Skipping React component analysis.")
            return []

        react_components = []
        for root, _, files in os.walk(self.source_code_folder):
            for file in files:
                if file.endswith(('.js', '.jsx', '.tsx')):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                        component_name = os.path.splitext(file)[0]  # Use filename as initial name
                        if component_name.lower().find('test') != -1 or component_name.lower().find('index') != -1 or component_name.lower().find('report') != -1:
                            continue
                        component_details = {
                            'name': component_name,
                            'type': 'unknown',  # Will be determined by LLM if possible
                            'file': file_path,
                            'content': content
                        }
                        react_components.append(component_details)
                    except (UnicodeDecodeError, Exception) as e:
                        print(f"Error reading React file {file_path}: {e}")
        return react_components

    def generate_bdd_feature_file(self, components: List[Dict[str, Any]],
                                    type: str = 'react') -> None:
        """
        Generates BDD feature files using the local LLM.

        :param components: List of analyzed components (or file details)
        :param type: Type of the components (e.g., 'react')
        """
        if not self.ollama_client:
            print("Ollama client not initialized. Skipping feature file generation.")
            return

        for component in components:
            component_name = component.get('name', 'unknown')
            file_path = component.get('file', 'unknown')
            content = component.get('content', '')

            try:
                prompt = f"""
                You are an expert software tester. Analyze the following {type} component code to understand its functionality and generate comprehensive Gherkin-style BDD feature scenarios.

                Component Name: {component_name}
                File Path: {file_path}

                Code Snippet:
                ```javascript
                {content[:1000]}
                ```
                (Note: Only the first 1000 characters are provided for context.)

                Generate a .feature file with clear and concise scenarios covering:
                - User interactions with the component.
                - Expected behavior and outcomes.
                - Important functionalities and features.
                - Potential edge cases and error handling (if applicable).

                The .feature file should have a clear feature title and well-defined scenarios with Given, When, Then steps.
                """

                response = self.ollama_client.chat(
                    model=self.local_llm_model,
                    messages=[{'role': 'user', 'content': prompt}]
                )

                feature_filename = f"{component_name}_{type}_feature.feature"
                feature_path = os.path.join(self.feature_folder, feature_filename)

                with open(feature_path, 'w', encoding='utf-8') as f:
                    f.write(response['message']['content'])

                print(f"Generated feature file: {feature_filename}")

            except Exception as e:
                print(f"Error generating feature file for {component_name} ({file_path}): {e}")

    def analyze_source_code(self):
        """
        Analyzes React components in the source code folder and generates BDD feature files.
        """
        react_components = self.analyze_react_components()
        if react_components:
            print(f"Found {len(react_components)} potential React component files.")
            self.generate_bdd_feature_file(react_components, 'react')
        else:
            print("No React component files found in the specified source code folder.")

def main():
    # Configuration
    SOURCE_CODE_FOLDER = 'SOURCE_CODE'
    FEATURE_FILES_FOLDER = 'FEATURE_FILES'
    LOCAL_LLM_MODEL = 'llama3.2'  # Or your desired Ollama model

    # Initialize and run analyzer
    analyzer = SourceCodeAnalyzer(
        source_code_folder=SOURCE_CODE_FOLDER,
        local_llm_model=LOCAL_LLM_MODEL,
        feature_folder=FEATURE_FILES_FOLDER
    )
    analyzer.analyze_source_code()

    print(f"\nBDD feature files generated in the '{FEATURE_FILES_FOLDER}' directory.")
    print("Ensure Ollama is running and the specified LLM model is pulled before running.")

if __name__ == '__main__':
    main()