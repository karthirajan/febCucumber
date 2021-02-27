#Author: your.email@your.domain.com
Feature: add customer

  Scenario: add customer flow validation
    Given User launches telecom application
    And User click on add customer button
    When User enter the values in fields
    And User click on submit button
    Then User should be displayed customer ID is generated

  Scenario: add customer flow validation by using 1 dim list
    Given User launches telecom application
    And User click on add customer button
    When User enter the values in fields by using one dim list
      | karthi | rajan | karthi@gmail.com | chennai | 67566536787 |
    And User click on submit button
    Then User should be displayed customer ID is generated

  Scenario: add customer flow validation by using 1 dim map
    Given User launches telecom application
    And User click on add customer button
    When User enter the values in fields by using one dim map
      | fname | soundar          |
      | lname | rajan            |
      | mail  | sondar@gmail.com |
      | addr  | tanjore          |
      | phno  |         98765675 |
    And User click on submit button
    Then User should be displayed customer ID is generated

  Scenario: add customer flow validation by using 2 dim list
    Given User launches telecom application
    And User click on add customer button
    When User enter the values in fields by using two dim list
      | karthi  | rajan  | karthi@gmail.com  | chennai  | 67566536787 |
      | karthi1 | rajan1 | karthi1@gmail.com | chennai1 | 67566536787 |
      | karthi2 | rajan2 | karthi2@gmail.com | chennai2 | 67566536787 |
      | karthi3 | rajan3 | karthi3@gmail.com | chennai3 | 67566536787 |
    And User click on submit button
    Then User should be displayed customer ID is generated

  Scenario: add customer flow validation by using 2 dim map
    Given User launches telecom application
    And User click on add customer button
    When User enter the values in fields by using two dim map
      | fname   | lname  | mail              | addr     | phno        |
      | karthi  | rajan  | karthi@gmail.com  | chennai  | 67566536787 |
      | karthi1 | rajan1 | karthi1@gmail.com | chennai1 | 67566536787 |
      | karthi2 | rajan2 | karthi2@gmail.com | chennai2 | 67566536787 |
      | karthi3 | rajan3 | karthi3@gmail.com | chennai3 | 67566536787 |
    And User click on submit button
    Then User should be displayed customer ID is generated
