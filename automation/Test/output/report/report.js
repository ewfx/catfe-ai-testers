$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/LoanRequestForm_react_feature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Based on the provided React component code, I\u0027ve analyzed its functionality and generated comprehensive Gherkin-style BDD feature scenarios for the `LoanRequestForm` component. Here\u0027s the result:"
    },
    {
      "line": 2,
      "value": "#"
    },
    {
      "line": 3,
      "value": "#**Feature File: LoanRequestForm.feature**"
    },
    {
      "line": 4,
      "value": "#```gherkin"
    },
    {
      "line": 5,
      "value": "# Feature: Loan Request Form"
    }
  ],
  "line": 7,
  "name": "Loan Request Form",
  "description": "",
  "id": "loan-request-form",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "User submits loan request form",
  "description": "",
  "id": "loan-request-form;user-submits-loan-request-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on the loan request form page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter customer ID, loan amount, credit score, debt to income ratio, and employment status",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the form is submitted successfully with the provided information",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the loan request is processed with the default values",
  "keyword": "And "
});
formatter.match({
  "location": "loanRequestSteps.i_am_on_the_loan_request_form_page()"
});
formatter.result({
  "duration": 42132344500,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.i_enter_customer_ID_loan_amount_credit_score_debt_to_income_ratio_and_employment_status()"
});
formatter.result({
  "duration": 4450539900,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.the_form_is_submitted_successfully_with_the_provided_information()"
});
formatter.result({
  "duration": 840991200,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.the_loan_request_is_processed_with_the_default_values()"
});
formatter.result({
  "duration": 1304415000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User submits empty fields",
  "description": "",
  "id": "loan-request-form;user-submits-empty-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on the loan request form page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I submit the form without entering any fields",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "an error message is displayed indicating required fields",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "no loan request is processed",
  "keyword": "And "
});
formatter.match({
  "location": "loanRequestSteps.i_am_on_the_loan_request_form_page()"
});
formatter.result({
  "duration": 10739989000,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.i_submit_the_form_without_entering_any_fields()"
});
formatter.result({
  "duration": 833579900,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.an_error_message_is_displayed_indicating_required_fields()"
});
formatter.result({
  "duration": 1552975100,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.no_loan_request_is_processed()"
});
formatter.result({
  "duration": 500909900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#"
    }
  ],
  "line": 21,
  "name": "User submits form with invalid data",
  "description": "",
  "id": "loan-request-form;user-submits-form-with-invalid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am on the loan request form page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I enter invalid data for customer ID, loan amount, credit score, debt to income ratio, and employment status",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "an error message is displayed indicating validation errors",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "no loan request is processed",
  "keyword": "And "
});
formatter.match({
  "location": "loanRequestSteps.i_am_on_the_loan_request_form_page()"
});
formatter.result({
  "duration": 10599299700,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.i_enter_invalid_data_for_customer_ID_loan_amount_credit_score_debt_to_income_ratio_and_employment_status()"
});
formatter.result({
  "duration": 4985453800,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.an_error_message_is_displayed_indicating_validation_errors()"
});
formatter.result({
  "duration": 173414100,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.no_loan_request_is_processed()"
});
formatter.result({
  "duration": 103245100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#"
    }
  ],
  "line": 27,
  "name": "User submits form with valid data",
  "description": "",
  "id": "loan-request-form;user-submits-form-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on the loan request form page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I enter valid data for customer ID, loan amount, credit score, debt to income ratio, and employment status",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the form is submitted successfully with the provided information",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "the loan request is processed with the correct values",
  "keyword": "And "
});
formatter.match({
  "location": "loanRequestSteps.i_am_on_the_loan_request_form_page()"
});
formatter.result({
  "duration": 34684807300,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.i_enter_valid_data_for_customer_ID_loan_amount_credit_score_debt_to_income_ratio_and_employment_status()"
});
formatter.result({
  "duration": 9284120400,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.the_form_is_submitted_successfully_with_the_provided_information()"
});
formatter.result({
  "duration": 2115215500,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.the_loan_request_is_processed_with_the_correct_values()"
});
formatter.result({
  "duration": 2963197500,
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   formatter.after({
  "duration": 41122519700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#"
    }
  ],
  "line": 27,
  "name": "User submits form with valid data",
  "description": "",
  "id": "loan-request-form;user-submits-form-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on the loan request form page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I enter valid data for customer ID, loan amount, credit score, debt to income ratio, and employment status",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the form is submitted successfully with the provided information",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "the loan request is processed with the correct values",
  "keyword": "And "
});
formatter.match({
  "location": "loanRequestSteps.i_am_on_the_loan_request_form_page()"
});
formatter.result({
  "duration": 15070240500,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.i_enter_valid_data_for_customer_ID_loan_amount_credit_score_debt_to_income_ratio_and_employment_status()"
});
formatter.result({
  "duration": 5584803000,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.the_form_is_submitted_successfully_with_the_provided_information()"
});
formatter.result({
  "duration": 2467724600,
  "status": "passed"
});
formatter.match({
  "location": "loanRequestSteps.the_loan_request_is_processed_with_the_correct_values()"
});
formatter.result({
  "duration": 7458594700,
  "status": "passed"
});
formatter.after({
  "duration": 60355147600,
  "status": "passed"
});
});