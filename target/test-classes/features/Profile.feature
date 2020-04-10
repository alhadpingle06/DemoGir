Feature: Profile Feature File

@profile
Scenario: Home page default login2
Given User is on netbanking landing page
When User Login into application with user name "Jim" and password "1234"
Then Home page is populated
And Cards that displayed is "true"