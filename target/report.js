$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "add customer",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENORIG-500GBSS\u0027, ip: \u0027172.20.250.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56990}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c19f64f2cc85ea6353d24af59be5aec1\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.telecom.stepdefinition.AddCustomerSteps.user_click_on_add_customer_button(AddCustomerSteps.java:25)\r\n\tat ✽.User click on add customer button(src/test/resources/Features/AddCustomer.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "add customer flow validation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter the values in fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enter_the_values_in_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed customer ID is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_displayed_customer_ID_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENORIG-500GBSS\u0027, ip: \u0027172.20.250.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:57024}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: adf9f7a61bc32ac91db44b0ddbaf3223\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.telecom.stepdefinition.AddCustomerSteps.user_click_on_add_customer_button(AddCustomerSteps.java:25)\r\n\tat ✽.User click on add customer button(src/test/resources/Features/AddCustomer.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "add customer flow validation by using 1 dim list",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter the values in fields by using one dim list",
  "rows": [
    {
      "cells": [
        "karthi",
        "rajan",
        "karthi@gmail.com",
        "chennai",
        "67566536787"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enter_the_values_in_fields_by_using_one_dim_list(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed customer ID is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_displayed_customer_ID_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENORIG-500GBSS\u0027, ip: \u0027172.20.250.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:57057}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: efb1e1ac2be3cbb1fafe809835f958b6\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.telecom.stepdefinition.AddCustomerSteps.user_click_on_add_customer_button(AddCustomerSteps.java:25)\r\n\tat ✽.User click on add customer button(src/test/resources/Features/AddCustomer.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "add customer flow validation by using 1 dim map",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter the values in fields by using one dim map",
  "rows": [
    {
      "cells": [
        "fname",
        "soundar"
      ]
    },
    {
      "cells": [
        "lname",
        "rajan"
      ]
    },
    {
      "cells": [
        "mail",
        "sondar@gmail.com"
      ]
    },
    {
      "cells": [
        "addr",
        "tanjore"
      ]
    },
    {
      "cells": [
        "phno",
        "98765675"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enter_the_values_in_fields_by_using_one_dim_map(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed customer ID is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_displayed_customer_ID_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENORIG-500GBSS\u0027, ip: \u0027172.20.250.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:57090}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c8c8bc2b05a2a9c1d76975e3ef992e2b\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.telecom.stepdefinition.AddCustomerSteps.user_click_on_add_customer_button(AddCustomerSteps.java:25)\r\n\tat ✽.User click on add customer button(src/test/resources/Features/AddCustomer.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "add customer flow validation by using 2 dim list",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter the values in fields by using two dim list",
  "rows": [
    {
      "cells": [
        "karthi",
        "rajan",
        "karthi@gmail.com",
        "chennai",
        "67566536787"
      ]
    },
    {
      "cells": [
        "karthi1",
        "rajan1",
        "karthi1@gmail.com",
        "chennai1",
        "67566536787"
      ]
    },
    {
      "cells": [
        "karthi2",
        "rajan2",
        "karthi2@gmail.com",
        "chennai2",
        "67566536787"
      ]
    },
    {
      "cells": [
        "karthi3",
        "rajan3",
        "karthi3@gmail.com",
        "chennai3",
        "67566536787"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enter_the_values_in_fields_by_using_two_dim_list(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed customer ID is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_displayed_customer_ID_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENORIG-500GBSS\u0027, ip: \u0027172.20.250.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:57123}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9a47ba9faa7f4591844b2d51a3049092\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.telecom.stepdefinition.AddCustomerSteps.user_click_on_add_customer_button(AddCustomerSteps.java:25)\r\n\tat ✽.User click on add customer button(src/test/resources/Features/AddCustomer.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "add customer flow validation by using 2 dim map",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter the values in fields by using two dim map",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "mail",
        "addr",
        "phno"
      ]
    },
    {
      "cells": [
        "karthi",
        "rajan",
        "karthi@gmail.com",
        "chennai",
        "67566536787"
      ]
    },
    {
      "cells": [
        "karthi1",
        "rajan1",
        "karthi1@gmail.com",
        "chennai1",
        "67566536787"
      ]
    },
    {
      "cells": [
        "karthi2",
        "rajan2",
        "karthi2@gmail.com",
        "chennai2",
        "67566536787"
      ]
    },
    {
      "cells": [
        "karthi3",
        "rajan3",
        "karthi3@gmail.com",
        "chennai3",
        "67566536787"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enter_the_values_in_fields_by_using_two_dim_map(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed customer ID is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_displayed_customer_ID_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
});