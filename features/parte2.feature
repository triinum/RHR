@testLogin
Feature: Testing procurement search
	AS a  procurer
	I'd like to log in and enter procurements
	using all sorts of fake generated data




	@TriinuM @Non-happy path
	Scenario: Search with uncorrect data
		Given You are on procurement registers main page
		 When The user "kylli.hankija" and password "Parool123" attempt to login
         Then You search for the test procurement "Pakkuja espd test"
         When You search from prepared procurements
         Then You click on the test procurement

     
    