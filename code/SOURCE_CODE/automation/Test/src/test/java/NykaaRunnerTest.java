import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/LoanRequestForm_react_feature.feature",
        glue = "stepDefinitions",
        plugin = {"pretty", "html:output/report", "json:output/report.json", "html:target/cucumber-reports"},
        monochrome = true
)
public class NykaaRunnerTest { }
