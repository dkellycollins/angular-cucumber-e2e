Feature: Heros

Background:
  Given the application is at the url "/"

Scenario: Navigate to Heroes
  When I click the heroes link
  Then the heroes component is present

Scenario: Hero details
  Given the heroes page is active
  When I click the link for the hero "15"
  Then the hero detail component is present
  And the hero detail component shows the following
    | id | name      |
    | 15 | MAGNETA   |

Scenario: Create Hero
  Given the heroes page is active
  When I enter "Angular" into the input
  And I click the add button
  Then the heroes page shows the hero "Angular"
