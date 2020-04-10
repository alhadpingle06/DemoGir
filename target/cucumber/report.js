$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature File",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Scenarion outline and examples keyword usage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@something"
    }
  ]
});
formatter.step({
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User Login into application with username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "name": "Cards displayed is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "user1",
        "pass1",
        "true"
      ]
    },
    {
      "cells": [
        "user2",
        "pass2",
        "false"
      ]
    },
    {
      "cells": [
        "user3",
        "pass3",
        "true"
      ]
    },
    {
      "cells": [
        "user4",
        "pass4",
        "false"
      ]
    },
    {
      "cells": [
        "user5",
        "pass5",
        "true"
      ]
    }
  ]
});
formatter.background({
  "name": "Some background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Background given step",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_given_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background when step",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_when_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background then step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_then_step()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenarion outline and examples keyword usage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@something"
    }
  ]
});
formatter.step({
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login into application with username user1 and password pass1",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.user_login_into_application_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed is true",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.cards_displayed_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Some background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Background given step",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_given_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background when step",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_when_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background then step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_then_step()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenarion outline and examples keyword usage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@something"
    }
  ]
});
formatter.step({
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login into application with username user2 and password pass2",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.user_login_into_application_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed is false",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.cards_displayed_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Some background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Background given step",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_given_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background when step",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_when_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background then step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_then_step()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenarion outline and examples keyword usage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@something"
    }
  ]
});
formatter.step({
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login into application with username user3 and password pass3",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.user_login_into_application_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed is true",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.cards_displayed_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Some background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Background given step",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_given_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background when step",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_when_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background then step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_then_step()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenarion outline and examples keyword usage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@something"
    }
  ]
});
formatter.step({
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login into application with username user4 and password pass4",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.user_login_into_application_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed is false",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.cards_displayed_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Some background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Background given step",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_given_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background when step",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_when_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Background then step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.background_then_step()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenarion outline and examples keyword usage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@something"
    }
  ]
});
formatter.step({
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login into application with username user5 and password pass5",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.user_login_into_application_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed is true",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition2.cards_displayed_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});