package com.telecom.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources//Features",
                 glue="com.telecom.stepdefinition",
                 monochrome=true,
                 dryRun=false,
                 plugin="html:target",
                 tags={"~@sanity"})

public class TestRunner {
	

}
