Feature: Initial Page

Scenario: has title
  When I navigate to "/"
  Then the page title is "Tour of Heroes"

Scenario: has dashboard as the active view
  When I navigate to "/"
  Then the dashboard is the active view
