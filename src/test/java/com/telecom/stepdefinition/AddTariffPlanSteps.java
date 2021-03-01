package com.telecom.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class AddTariffPlanSteps {
	
	
	
	

	@Given("User click on add tariff plan button")
	public void user_click_on_add_tariff_plan_button() {
		
	    
		Hooks.driver.findElement(By.xpath("(//a[text()='Add Tariff Plan'])[1]")).click();
		
	}

	@When("user fill the plan details {string},{string},{string},{string},{string},{string},{string}")
	public void user_fill_the_plan_details(String MR, String FLM, String string3, String string4, String string5, String string6, String string7) {
	    
		Hooks.driver.findElement(By.id("rental1")).sendKeys(MR);
		Hooks.driver.findElement(By.id("local_minutes")).sendKeys(FLM);
		Hooks.driver.findElement(By.id("inter_minutes")).sendKeys(string3);
		Hooks.driver.findElement(By.id("sms_pack")).sendKeys(string4);
		Hooks.driver.findElement(By.id("minutes_charges")).sendKeys(string5);
		Hooks.driver.findElement(By.id("inter_charges")).sendKeys(string6);
		Hooks.driver.findElement(By.id("sms_charges")).sendKeys(string7);
		
	}

	@When("User clicked on submit button")
	public void user_clicked_on_submit_button() {
	    
		Hooks.driver.findElement(By.xpath("//input[@type='submit']")).click();
		
	}

	@Then("User should be displayed success message")
	public void user_should_be_displayed_success_message() {
		
		System.out.println("Scenario");
	    
		Assert.assertEquals("Congratulation you add Tariff Plan", Hooks.driver.findElement(By.xpath("//h2[contains(text(),'Congratulation')]")).getText());
		
	}



}
