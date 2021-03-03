package com.telecom.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.telecom.objectrepository.AddCustomerPage;
import com.telecom.resources.Commonactions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AddCustomerSteps extends Commonactions{
	
	Commonactions ca = new Commonactions();
	AddCustomerPage cus = new AddCustomerPage();

	@Given("User click on add customer button")
	public void user_click_on_add_customer_button() {
		
		ca.button(cus.getCustomerButton());
	    
		
	}

	@When("User enter the values in fields")
	public void user_enter_the_values_in_fields() {
		
		
		ca.button(cus.getDoneButton());
		ca.write(cus.getFirstname(), "java");
		ca.write(cus.getLastname(), "selenium");
		ca.write(cus.getMail(), "java@gmail.com");
		ca.write(cus.getAddress(), "java");
		ca.write(cus.getPhno(), "535454646");
		
		
	}
	
	@When("User enter the values in fields by using one dim list")
	public void user_enter_the_values_in_fields_by_using_one_dim_list(DataTable dataTable) {
		
		List<String> datas = dataTable.asList();
		
		ca.button(cus.getDoneButton());
		ca.write(cus.getFirstname(), datas.get(0));
		ca.write(cus.getLastname(), datas.get(1));
		ca.write(cus.getMail(), datas.get(2));
		ca.write(cus.getAddress(), datas.get(3));
		ca.write(cus.getPhno(), datas.get(4));
		
	
		
	   
	}
	
	
	@When("User enter the values in fields by using one dim map")
	public void user_enter_the_values_in_fields_by_using_one_dim_map(DataTable dataTable) {
		
		Map<String, String> datas = dataTable.asMap(String.class, String.class);
		
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys(datas.get("fname"));
		driver.findElement(By.id("lname")).sendKeys(datas.get("lname"));
		driver.findElement(By.id("email")).sendKeys(datas.get("mail"));
		driver.findElement(By.name("addr")).sendKeys(datas.get("addr"));
		driver.findElement(By.id("telephoneno")).sendKeys(datas.get("phno"));
		
	   
	}
	
	@When("User enter the values in fields by using two dim list")
	public void user_enter_the_values_in_fields_by_using_two_dim_list(DataTable dataTable) {
		
		List<List<String>> datas = dataTable.asLists();
		
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys(datas.get(2).get(0));
		driver.findElement(By.id("lname")).sendKeys(datas.get(0).get(1));
		driver.findElement(By.id("email")).sendKeys(datas.get(3).get(2));
		driver.findElement(By.name("addr")).sendKeys(datas.get(2).get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(datas.get(1).get(4));
		
	   
	}

	@When("User enter the values in fields by using two dim map")
	public void user_enter_the_values_in_fields_by_using_two_dim_map(DataTable dataTable) {
		
		List<Map<String, String>> datas = dataTable.asMaps();
		
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys(datas.get(1).get("fname"));
		driver.findElement(By.id("lname")).sendKeys(datas.get(0).get("lname"));
		driver.findElement(By.id("email")).sendKeys(datas.get(3).get("mail"));
		driver.findElement(By.name("addr")).sendKeys(datas.get(2).get("addr"));
		driver.findElement(By.id("telephoneno")).sendKeys(datas.get(1).get("phno"));
		
	   
	}

	
	
	@When("User click on submit button")
	public void user_click_on_submit_button() {
	    
		ca.button(cus.getSubmitButton());
		
	}

	@Then("User should be displayed customer ID is generated")
	public void user_should_be_displayed_customer_ID_is_generated() {
	    
		Assert.assertTrue(cus.getAssertValue().isDisplayed());
		
	}

}
