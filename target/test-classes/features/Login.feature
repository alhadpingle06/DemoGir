Feature: Login Feature File

Background: Some background
Given Background given step
When Background when step
Then Background then step

@RunThis
Scenario: Home page default login
Given User is on netbanking landing page
When User Login into application with user name "Jim" and password "1234"
Then Home page is populated
And Cards that displayed is "true"

@RunThis
Scenario: Home page disabled login
Given User is on netbanking landing page
When User Login into application with user name "John" and password "4321"
Then Home page is populated
And Cards that displayed is "false"

@test
Scenario: Usage of data table
Given User is on netbanking landing page
When Sign up with following details
| First Name | Last Name | Email Address | Password | Country | Phone No | Pin Code |
| Alhad | Pingle | alhad@mailinator.com | 12341234 | India | 9423678110 | 440030 |
| Avani | Desai | avani@mailinator.com | 12341234 | India | 9423678110 | 440030 |
Then Success page is displayed

@something
Scenario Outline: Scenarion outline and examples keyword usage
Given User is on netbanking landing page
When User Login into application with username <username> and password <password>
Then Home page is populated
And Cards displayed is <status>

Examples:
| username | password | status |
| user1 | pass1 | true |
| user2 | pass2 | false |
| user3 | pass3 | true |
| user4 | pass4 | false |
| user5 | pass5 | true |