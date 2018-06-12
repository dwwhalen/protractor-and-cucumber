Feature: Caculator
  Scenario: Adding
    Given I view the Calculator page
    When I set the first number to "1"
    And I set the second number to "2"
    And I click submit
    Then the result is 3

      Scenario: Adding Again
    Given I view the Calculator page
    When I set the first number to "12"
    And I set the second number to "22"
    And I click submit
    Then the result is 34