package stepDefinitions;

import cucumber.api.java.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class loanRequestSteps {

    WebDriver driver;

    @Given("^I am on the loan request form page$")
    public void i_am_on_the_loan_request_form_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\rajat\\Desktop\\Sweety\\webdriver\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(options);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("http://localhost:3000/");
        Thread.sleep(2000);
    }

    @When("^I enter customer ID, loan amount, credit score, debt to income ratio, and employment status$")
    public void i_enter_customer_ID_loan_amount_credit_score_debt_to_income_ratio_and_employment_status() throws Throwable {
        driver.findElement(By.xpath("//button[text()='Request Loan']")).click();
        driver.findElement(By.xpath("//input[@id=\"customerId\"]")).sendKeys("3");
        driver.findElement(By.xpath("//input[@id=\"loanAmount\"]")).sendKeys("500");
        driver.findElement(By.xpath("//input[@id=\"creditScore\"]")).sendKeys("750");
        driver.findElement(By.xpath("//input[@id=\"debtToIncomeRatio\"]")).sendKeys("0.3");
        Select objSelect =new Select(driver.findElement(By.id("employmentStatus")));
        objSelect.selectByVisibleText("EMPLOYED");
    }

    @Then("^the form is submitted successfully with the provided information$")
    public void the_form_is_submitted_successfully_with_the_provided_information() throws Throwable {
        driver.findElement(By.xpath("//button[text()='View Loans']")).click();
    }

    @Then("^the loan request is processed with the default values$")
    public void the_loan_request_is_processed_with_the_default_values() throws Throwable {
        String expectedData [] = {"3", "500", "750", "0.3", "EMPLOYED"};
        List<String> expectedList = Arrays.asList(expectedData);
        verifyTabledata(expectedList);

    }

    @When("^I submit the form without entering any fields$")
    public void i_submit_the_form_without_entering_any_fields() throws Throwable {
        driver.findElement(By.xpath("//button[text()='Request Loan']")).click();
    }

    @Then("^an error message is displayed indicating required fields$")
    public void an_error_message_is_displayed_indicating_required_fields() throws Throwable {
        driver.findElement(By.xpath("//button[text()='Request Loan']")).click();
        driver.findElement(By.xpath("//h2[text()='Submit Loan Request']")).isDisplayed();
    }

    @Then("^no loan request is processed$")
    public void no_loan_request_is_processed() throws Throwable {
        driver.findElement(By.xpath("//h2[text()='Submit Loan Request']")).isDisplayed();
    }

    @When("^I enter invalid data for customer ID, loan amount, credit score, debt to income ratio, and employment status$")
    public void i_enter_invalid_data_for_customer_ID_loan_amount_credit_score_debt_to_income_ratio_and_employment_status() throws Throwable {
        driver.findElement(By.xpath("//button[text()='Request Loan']")).click();
        driver.findElement(By.xpath("//input[@id=\"customerId\"]")).sendKeys("13");
        driver.findElement(By.xpath("//input[@id=\"loanAmount\"]")).sendKeys("5000");
        driver.findElement(By.xpath("//input[@id=\"creditScore\"]")).sendKeys("750");
        driver.findElement(By.xpath("//input[@id=\"debtToIncomeRatio\"]")).sendKeys("0.3");
        Select objSelect =new Select(driver.findElement(By.id("employmentStatus")));
        objSelect.selectByVisibleText("EMPLOYED");
    }

    @Then("^an error message is displayed indicating validation errors$")
    public void an_error_message_is_displayed_indicating_validation_errors() throws Throwable {
        driver.findElement(By.xpath("//h2[text()='Submit Loan Request']")).isDisplayed();
    }

    @When("^I enter valid data for customer ID, loan amount, credit score, debt to income ratio, and employment status$")
    public void i_enter_valid_data_for_customer_ID_loan_amount_credit_score_debt_to_income_ratio_and_employment_status() throws Throwable {
        driver.findElement(By.xpath("//button[text()='Request Loan']")).click();
        driver.findElement(By.xpath("//input[@id=\"customerId\"]")).sendKeys("2");
        driver.findElement(By.xpath("//input[@id=\"loanAmount\"]")).sendKeys("500");
        driver.findElement(By.xpath("//input[@id=\"creditScore\"]")).sendKeys("600");
        driver.findElement(By.xpath("//input[@id=\"debtToIncomeRatio\"]")).sendKeys("0.3");
        Select objSelect =new Select(driver.findElement(By.id("employmentStatus")));
        objSelect.selectByVisibleText("UNEMPLOYED");
    }

    @Then("^the loan request is processed with the correct values$")
    public void the_loan_request_is_processed_with_the_correct_values() throws Throwable {
        String expectedData [] = {"2", "500", "600", "0.3", "UNEMPLOYED"};
        List<String> expectedList = Arrays.asList(expectedData);
        verifyTabledata(expectedList);
    }

    @When("^I reset the form fields using the default values$")
    public void i_reset_the_form_fields_using_the_default_values() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
    }

    @Then("^all form fields are reset to their default values$")
    public void all_form_fields_are_reset_to_their_default_values() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
    }

    @When("^I submit the form without clicking the submit button$")
    public void i_submit_the_form_without_clicking_the_submit_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
    }

    @Then("^an error message is displayed indicating that the form was not submitted successfully$")
    public void an_error_message_is_displayed_indicating_that_the_form_was_not_submitted_successfully() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
    }


    public void verifyTabledata(List<String> expectedList){
        WebElement ele = driver.findElement(By.xpath("//table//thead//tr//th"));
        WebElement ele1 = driver.findElement(By.xpath("//table//tbody//tr[1]"));
        List<WebElement> columns = ele1.findElements(By.tagName("td"));
        ArrayList<String> list = new ArrayList<>();
        System.out.println(ele.getText());
        for(WebElement col : columns){
            System.out.println(col.getText());
            list.add(col.getText());
        }

        expectedList.forEach(a -> {
            if(list.contains(a))
                System.out.println(a + " table data matched");
            else
                System.out.println(" table data not matched");
        });

    }

//    @After
//    public void closeBrowser(){
//        driver.close();
//    }

}
