package com.telecom.stepdefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks {
	
	public static WebDriver driver;
	
	@Before
	public void beforeScenario() {
		System.out.println("Before");
		
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		//driver.get("http://www.demo.guru99.com/telecom/index.html");
		driver.get("https://mvnrepository.com/artifact/junit/junit/4.12");
		driver.manage().window().maximize();

	}
	
	
	@After
	public void afterScenario(Scenario scenario) {
		System.out.println("After");
		
		if (scenario.isFailed()) {
			
			final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);

			scenario.embed(screenshot, "image/png");
			
		}
		
		driver.close();
		

	}

}
