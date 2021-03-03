Feature: Add Tariff Plan
  I want to use this template for my feature file

@hardcoded
  Scenario Outline: add tariff plan validation by using scenario outline
    And User click on add tariff plan button
    When user fill the plan details "<MR>","<FLM>","<FIM>","<SMS>","<LPM>","<IPM>","<SMSC>"
    And User clicked on submit button
    Then User should be displayed success message

    Examples: 
      | MR  | FLM | FIM  |SMS|LPM|IPM|SMSC|
      | 100 | 200 | 300 | 400 | 1| 2| 3|
      | 100 | 200 | 300 | 400 | 1| 2| 3|
      | 100 | 200 | 300 | 400 | 1| 2| 3|


