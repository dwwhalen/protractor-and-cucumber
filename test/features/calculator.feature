Feature: Caculator
@calc
  Scenario Outline: Adding
    Given I view the Calculator page
    When I set the first number to "<first_number>"
    And I set the second number to "<second_number>"
    And I click submit
    Then the result is "<result>"
    Examples:
      | first_number | second_number | result |
      | 1            | 2             | 3      |
      # | 4            | 2             | 6      |
      # | 5            | 2             | 7      |
      # | 8            | 2             | 11     |
      # | 12           | 0             | 12     |