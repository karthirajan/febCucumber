package com.telecom.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AddCustomerSteps {
	
	public static WebDriver driver;
	
	@Given("User launches telecom application")
	public void user_launches_telecom_application() {
	    
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		driver.get("http://www.demo.guru99.com/telecom/index.html");
		driver.manage().window().maximize();
		
	}

	@Given("User click on add customer button")
	public void user_click_on_add_customer_button() {
		
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	    
		
	}

	@When("User enter the values in fields")
	public void user_enter_the_values_in_fields() {
		
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys("java");
		driver.findElement(By.id("lname")).sendKeys("selenium");
		driver.findElement(By.id("email")).sendKeys("java@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("OMR");
		driver.findElement(By.id("telephoneno")).sendKeys("7566342432");
	    
		
	}
	
	@When("User enter the values in fields by using one dim list")
	public void user_enter_the_values_in_fields_by_using_one_dim_list(DataTable dataTable) {
		
		List<String> datas = dataTable.asList();
		
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys(datas.get(0));
		driver.findElement(By.id("lname")).sendKeys(datas.get(1));
		driver.findElement(By.id("email")).sendKeys(datas.get(2));
		driver.findElement(By.name("addr")).sendKeys(datas.get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(datas.get(4));
		
	   
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
	    
		driver.findElement(By.xpath("//input[@type='submit']")).click();
		
	}

	@Then("User should be displayed customer ID is generated")
	public void user_should_be_displayed_customer_ID_is_generated() {
	    
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		
	}

}
