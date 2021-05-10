@Parking
Feature: Calculate different parking fees
Scenario Outline: Calculate parkinf fee for "<TestCase>"
	 Given The user Opened the AUT.
	 Then the user waits for the page to load.
	 And the user puts the data for "<TestCase>".
	 Then the user waits for the page to load.
	 Then submits the input data.
	 Then the user waits for the page to load.
	 Then validate the outcome for "<TestCase>".
	 Examples:
	 	| TestCase |
	 	| TC001	   |
	 	| TC002	   |
	 	| TC003	   |
	 	| TC004	   |
	 	| TC005	   |
	 	