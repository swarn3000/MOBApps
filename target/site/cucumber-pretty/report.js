$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Chekc.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login",
  "description": "\r\nTest user login condition",
  "id": "test-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login to app with differnet username and passowrd using scenario outline",
  "description": "",
  "id": "test-login;login-to-app-with-differnet-username-and-passowrd-using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open application on device",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-login;login-to-app-with-differnet-username-and-passowrd-using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "test-login;login-to-app-with-differnet-username-and-passowrd-using-scenario-outline;;1"
    },
    {
      "cells": [
        "ValidUser",
        "Admim"
      ],
      "line": 12,
      "id": "test-login;login-to-app-with-differnet-username-and-passowrd-using-scenario-outline;;2"
    },
    {
      "cells": [
        "InvalidUser",
        "Demo"
      ],
      "line": 13,
      "id": "test-login;login-to-app-with-differnet-username-and-passowrd-using-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15523194900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login to app with differnet username and passowrd using scenario outline",
  "description": "",
  "id": "test-login;login-to-app-with-differnet-username-and-passowrd-using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open application on device",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter credentials \"ValidUser\" and \"Admim\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "SD.i_open_application_on_device()"
});
formatter.result({
  "duration": 425918780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ValidUser",
      "offset": 21
    },
    {
      "val": "Admim",
      "offset": 37
    }
  ],
  "location": "SD.i_enter_credentials_and(String,String)"
});
formatter.result({
  "duration": 6492293,
  "status": "passed"
});
formatter.match({
  "location": "SD.i_click_on_login_button()"
});
formatter.result({
  "duration": 476748,
  "status": "passed"
});
formatter.after({
  "duration": 1138951298,
  "status": "passed"
});
formatter.before({
  "duration": 7400468435,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to app with differnet username and passowrd using scenario outline",
  "description": "",
  "id": "test-login;login-to-app-with-differnet-username-and-passowrd-using-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open application on device",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter credentials \"InvalidUser\" and \"Demo\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "SD.i_open_application_on_device()"
});
formatter.result({
  "duration": 113414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "InvalidUser",
      "offset": 21
    },
    {
      "val": "Demo",
      "offset": 39
    }
  ],
  "location": "SD.i_enter_credentials_and(String,String)"
});
formatter.result({
  "duration": 161140,
  "status": "passed"
});
formatter.match({
  "location": "SD.i_click_on_login_button()"
});
formatter.result({
  "duration": 123677,
  "status": "passed"
});
formatter.after({
  "duration": 1263772581,
  "status": "passed"
});
});