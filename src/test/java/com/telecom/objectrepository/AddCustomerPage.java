package com.telecom.objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.telecom.resources.Commonactions;

public class AddCustomerPage extends Commonactions{
	
	public AddCustomerPage() {
		
		PageFactory.initElements(driver, this);
		
	}

	@FindBy(xpath="(//a[text()='Add Customer'])[1]")
	private WebElement customerButton;
	
	@FindBy(xpath="//label[@for='done']")
	private WebElement doneButton;
	
	@FindBy(id="fname")
	private WebElement firstname;
	
	@FindBy(id="lname")
	private WebElement lastname;
	
	@FindBy(id="email")
	private WebElement mail;
	
	@FindBy(name="addr")
	private WebElement address;
	
	@FindBy(id="telephoneno")
	private WebElement phno;
	
	@FindBy(xpath="//input[@type='submit']")
	private WebElement submitButton;
	
	@FindBy(xpath="(//td[@align='center'])[2]")
	private WebElement assertValue;

	public WebElement getCustomerButton() {
		return customerButton;
	}

	public WebElement getDoneButton() {
		return doneButton;
	}

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getMail() {
		return mail;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getPhno() {
		return phno;
	}

	public WebElement getSubmitButton() {
		return submitButton;
	}

	public WebElement getAssertValue() {
		return assertValue;
	}
	
	

}
