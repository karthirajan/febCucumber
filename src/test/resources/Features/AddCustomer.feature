#Author: your.email@your.domain.com
@sanity
Feature: add customer

 Background:
    And User click on add customer button

@hardcoded @smoke
  Scenario: add customer flow validation
    When User enter the values in fields
    And User click on submit button
    Then User should be displayed customer ID is generated

@hardcoded
  Scenario: add customer flow validation by using 1 dim list
    When User enter the values in fields by using one dim list
      | karthi | rajan | karthi@gmail.com | chennai | 67566536787 |
    And User click on submit button
    Then User should be displayed customer ID is generated

  Scenario: add customer flow validation by using 1 dim map
    When User enter the values in fields by using one dim map
      | fname | soundar          |
      | lname | rajan            |
      | mail  | sondar@gmail.com |
      | addr  | tanjore          |
      | phno  |         98765675 |
    And User click on submit button
    Then User should be displayed customer ID is generated

  Scenario: add customer flow validation by using 2 dim list
    When User enter the values in fields by using two dim list
      | karthi  | rajan  | karthi@gmail.com  | chennai  | 67566536787 |
      | karthi1 | rajan1 | karthi1@gmail.com | chennai1 | 67566536787 |
      | karthi2 | rajan2 | karthi2@gmail.com | chennai2 | 67566536787 |
      | karthi3 | rajan3 | karthi3@gmail.com | chennai3 | 67566536787 |
    And User click on submit button
    Then User should be displayed customer ID is generated

  Scenario: add customer flow validation by using 2 dim map
    When User enter the values in fields by using two dim map
      | fname   | lname  | mail              | addr     | phno        |
      | karthi  | rajan  | karthi@gmail.com  | chennai  | 67566536787 |
      | karthi1 | rajan1 | karthi1@gmail.com | chennai1 | 67566536787 |
      | karthi2 | rajan2 | karthi2@gmail.com | chennai2 | 67566536787 |
      | karthi3 | rajan3 | karthi3@gmail.com | chennai3 | 67566536787 |
    And User click on submit button
    Then User should be displayed customer ID is generated
