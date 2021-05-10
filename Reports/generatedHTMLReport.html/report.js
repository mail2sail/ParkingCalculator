$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ParkingCalc.feature");
formatter.feature({
  "line": 2,
  "name": "Calculate different parking fees",
  "description": "",
  "id": "calculate-different-parking-fees",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Parking"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Calculate parkinf fee for \"\u003cTestCase\u003e\"",
  "description": "",
  "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user Opened the AUT.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the user puts the data for \"\u003cTestCase\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "submits the input data.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate the outcome for \"\u003cTestCase\u003e\".",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";",
  "rows": [
    {
      "cells": [
        "TestCase"
      ],
      "line": 12,
      "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;1"
    },
    {
      "cells": [
        "TC001"
      ],
      "line": 13,
      "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;2"
    },
    {
      "cells": [
        "TC002"
      ],
      "line": 14,
      "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;3"
    },
    {
      "cells": [
        "TC003"
      ],
      "line": 15,
      "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;4"
    },
    {
      "cells": [
        "TC004"
      ],
      "line": 16,
      "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;5"
    },
    {
      "cells": [
        "TC005"
      ],
      "line": 17,
      "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 156290600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Calculate parkinf fee for \"TC001\"",
  "description": "",
  "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Parking"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "The user Opened the AUT.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the user puts the data for \"TC001\".",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "submits the input data.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate the outcome for \"TC001\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_user_Opened_to_AUT()"
});
formatter.write("\u003ca href\u003d\"E:\\K2Range\\NewProjectPhalu\\TheCucksProject\\Reports\\GeneratdScreenShots\\Sandbox\\2021-05-07\\Sandbox_2021-05-07_1620341150394.jpg\" target\u003d\"_blank\"\u003eScreenShot\u003c/a\u003e ");
formatter.result({
  "duration": 5156011200,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5001763000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC001",
      "offset": 28
    }
  ],
  "location": "SFSteps.the_user_puts_the_data_for(String)"
});
formatter.result({
  "duration": 1013177100,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5007927700,
  "status": "passed"
});
formatter.match({
  "location": "SFSteps.submits_the_input_data()"
});
formatter.result({
  "duration": 514114200,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5002044200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC001",
      "offset": 26
    }
  ],
  "location": "SFSteps.validate_the_outcome_for(String)"
});
formatter.result({
  "duration": 79298800,
  "status": "passed"
});
formatter.after({
  "duration": 928703600,
  "status": "passed"
});
formatter.before({
  "duration": 17700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Calculate parkinf fee for \"TC002\"",
  "description": "",
  "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Parking"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "The user Opened the AUT.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the user puts the data for \"TC002\".",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "submits the input data.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate the outcome for \"TC002\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_user_Opened_to_AUT()"
});
formatter.write("\u003ca href\u003d\"E:\\K2Range\\NewProjectPhalu\\TheCucksProject\\Reports\\GeneratdScreenShots\\Sandbox\\2021-05-07\\Sandbox_2021-05-07_1620341172332.jpg\" target\u003d\"_blank\"\u003eScreenShot\u003c/a\u003e ");
formatter.result({
  "duration": 4370406600,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5012162800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC002",
      "offset": 28
    }
  ],
  "location": "SFSteps.the_user_puts_the_data_for(String)"
});
formatter.result({
  "duration": 1113669400,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5002841300,
  "status": "passed"
});
formatter.match({
  "location": "SFSteps.submits_the_input_data()"
});
formatter.result({
  "duration": 533298400,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5005445900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC002",
      "offset": 26
    }
  ],
  "location": "SFSteps.validate_the_outcome_for(String)"
});
formatter.result({
  "duration": 78306700,
  "status": "passed"
});
formatter.after({
  "duration": 843594700,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Calculate parkinf fee for \"TC003\"",
  "description": "",
  "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Parking"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "The user Opened the AUT.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the user puts the data for \"TC003\".",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "submits the input data.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate the outcome for \"TC003\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_user_Opened_to_AUT()"
});
formatter.write("\u003ca href\u003d\"E:\\K2Range\\NewProjectPhalu\\TheCucksProject\\Reports\\GeneratdScreenShots\\Sandbox\\2021-05-07\\Sandbox_2021-05-07_1620341194233.jpg\" target\u003d\"_blank\"\u003eScreenShot\u003c/a\u003e ");
formatter.result({
  "duration": 4297846800,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5000676000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC003",
      "offset": 28
    }
  ],
  "location": "SFSteps.the_user_puts_the_data_for(String)"
});
formatter.result({
  "duration": 1037857100,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5007291900,
  "status": "passed"
});
formatter.match({
  "location": "SFSteps.submits_the_input_data()"
});
formatter.result({
  "duration": 453608300,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5001109800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC003",
      "offset": 26
    }
  ],
  "location": "SFSteps.validate_the_outcome_for(String)"
});
formatter.result({
  "duration": 56222800,
  "status": "passed"
});
formatter.after({
  "duration": 880583800,
  "status": "passed"
});
formatter.before({
  "duration": 17200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Calculate parkinf fee for \"TC004\"",
  "description": "",
  "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Parking"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "The user Opened the AUT.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the user puts the data for \"TC004\".",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "submits the input data.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate the outcome for \"TC004\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_user_Opened_to_AUT()"
});
formatter.write("\u003ca href\u003d\"E:\\K2Range\\NewProjectPhalu\\TheCucksProject\\Reports\\GeneratdScreenShots\\Sandbox\\2021-05-07\\Sandbox_2021-05-07_1620341215890.jpg\" target\u003d\"_blank\"\u003eScreenShot\u003c/a\u003e ");
formatter.result({
  "duration": 4209706700,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5004249400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC004",
      "offset": 28
    }
  ],
  "location": "SFSteps.the_user_puts_the_data_for(String)"
});
formatter.result({
  "duration": 1017744200,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5008365300,
  "status": "passed"
});
formatter.match({
  "location": "SFSteps.submits_the_input_data()"
});
formatter.result({
  "duration": 512645500,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5010034700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC004",
      "offset": 26
    }
  ],
  "location": "SFSteps.validate_the_outcome_for(String)"
});
formatter.result({
  "duration": 87889300,
  "status": "passed"
});
formatter.after({
  "duration": 817014400,
  "status": "passed"
});
formatter.before({
  "duration": 29800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Calculate parkinf fee for \"TC005\"",
  "description": "",
  "id": "calculate-different-parking-fees;calculate-parkinf-fee-for-\"\u003ctestcase\u003e\";;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Parking"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "The user Opened the AUT.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the user puts the data for \"TC005\".",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "submits the input data.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user waits for the page to load.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate the outcome for \"TC005\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.the_user_Opened_to_AUT()"
});
formatter.write("\u003ca href\u003d\"E:\\K2Range\\NewProjectPhalu\\TheCucksProject\\Reports\\GeneratdScreenShots\\Sandbox\\2021-05-07\\Sandbox_2021-05-07_1620341237410.jpg\" target\u003d\"_blank\"\u003eScreenShot\u003c/a\u003e ");
formatter.result({
  "duration": 4057831000,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5013040100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC005",
      "offset": 28
    }
  ],
  "location": "SFSteps.the_user_puts_the_data_for(String)"
});
formatter.result({
  "duration": 982632800,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5006551500,
  "status": "passed"
});
formatter.match({
  "location": "SFSteps.submits_the_input_data()"
});
formatter.result({
  "duration": 1619627400,
  "status": "passed"
});
formatter.match({
  "location": "elementOperation.the_user_waits_for_the_page_to_load()"
});
formatter.result({
  "duration": 5010572600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TC005",
      "offset": 26
    }
  ],
  "location": "SFSteps.validate_the_outcome_for(String)"
});
formatter.result({
  "duration": 135496600,
  "status": "passed"
});
formatter.after({
  "duration": 833238100,
  "status": "passed"
});
});