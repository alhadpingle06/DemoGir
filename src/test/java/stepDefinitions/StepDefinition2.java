/**
 * 
 */
package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

//import cucumber.api.DataTable;
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.And;
/**
 * @author alhad
 *
 */
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;

public class StepDefinition2 {
//	@Given("^User is on netbanking landing page$")
//	public void user_is_on_netbanking_landing_page() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
////	    throw new PendingException();
//		System.out.println("User launch login page");
//	}
//
//	@When("^User Login into application with username and password$")
//	public void user_Login_into_application_with_username_and_password() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
////	    throw new PendingException();
//		System.out.println("User enters credentials");
//	}
//
//	@Then("^Home page is populated$")
//	public void home_page_is_populated() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
////	    throw new PendingException();
//		System.out.println("User is on homepage");
//	}
//
//	@And("^Cards are displayed$")
//	public void cards_are_displayed() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
////	    throw new PendingException();
//		System.out.println("cards are displayed");
//	}
//	
//	 @When("^User Login into application with user name \"([^\"]*)\" and password \"([^\"]*)\"$")
//	    public void user_login_into_application_with_username_something_and_password_something(String strArg1, String strArg2) throws Throwable {
////	        throw new PendingException();
//		 System.out.println("User is logging in with " + strArg1 + " and " + strArg2);
//	    }
	 
	 @And("^Cards are not displayed$")
	    public void cards_are_not_displayed() throws Throwable {
//	        throw new PendingException();
		 System.out.println("cards are not displayed");
	    }
	 

	    @And("^Cards that displayed is \"([^\"]*)\"$")
	    public void cards_displayed_is_something(String strArg1) throws Throwable {
//	        throw new PendingException();
	    	System.out.println("Cards displayed is " + strArg1);
	    }
	    
	    @When("^Sign up with following details$")
	    public void sign_up_with_following_details(DataTable data) throws Throwable {
	        // Write code here that turns the phrase above into concrete actions
	        // For automatic transformation, change DataTable to one of
	        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	        // E,K,V must be a scalar (String, Integer, Date, enum etc)
//	        throw new PendingException();

	    	//	    	When we have only one row without headers
	    	
	    	/*List<String> list = data.asList(String.class);
	    	for (int i = 0; i < list.size(); i++) {
	    		System.out.print(list.get(i) + " | ");
			}*/
	    	
	    	
	    	
//	    	When we have more than 1 rows without heaers
	    	
	    	/*List<List<String>> list = data.raw();
	    	System.out.println("printing data from input data table");
	    	for (int i = 0; i < list.size(); i++) {
	    		for (int j = 0; j < list.get(i).size(); j++) {
	    			System.out.print(list.get(i).get(j) + " | ");					
				}
	    		System.out.println("");
				
			}*/
	    	
//	   When we have only one row with headers
	    	/*List<Map<String, String>> maps = data.asMaps(String.class, String.class);
	    	System.out.println(maps.get(0).get("First Name"));
	    	System.out.println(maps.get(0).get("Last Name"));
	    	System.out.println(maps.get(0).get("Email Address"));
	    	System.out.println(maps.get(0).get("Password"));
	    	System.out.println(maps.get(0).get("Country"));
	    	System.out.println(maps.get(0).get("Phone No"));
	    	System.out.println(maps.get(0).get("Pin Code"));*/
	    	
	    	
//	 	   When we have multiple rows with headers
	 	    	List<Map<String, String>> maps = data.asMaps(String.class, String.class);
	 	    	
	 	    	for (int i = 0; i < maps.size(); i++) {
	 	    		System.out.print(maps.get(i).get("First Name") + " | ");
	 		    	System.out.print(maps.get(i).get("Last Name") + " | ");
	 		    	System.out.print(maps.get(i).get("Email Address") + " | ");
	 		    	System.out.print(maps.get(i).get("Password") + " | ");
	 		    	System.out.print(maps.get(i).get("Country") + " | ");
	 		    	System.out.print(maps.get(i).get("Phone No") + " | ");
	 		    	System.out.print(maps.get(i).get("Pin Code") + " | ");
	 		    	System.out.println();
				}
	    }

	    @Then("^Success page is displayed$")
	    public void success_page_is_displayed() throws Throwable {
	        // Write code here that turns the phrase above into concrete actions
//	        throw new PendingException();
	    	System.out.println("Success page is displayed");
	    	Assert.assertTrue(false);
	    }
	    
	    @When("^User Login into application with username (.+) and password (.+)$")
	    public void user_login_into_application_with_username_and_password(String username, String password) throws Throwable {
//	        throw new PendingException();
	    	System.out.println("Logging in with " + username + " and " + password);
	    }
	    
	    @And("^Cards displayed is (.+)$")
	    public void cards_displayed_is(String status) throws Throwable {
//	        throw new PendingException();
	    	
	    	System.out.println("Cards displayed is " + status);
	    }
	    

	    @Given("^Background given step$")
	    public void background_given_step() throws Throwable {
//	        throw new PendingException();
	    	System.out.println("Background given step");
	    }

	    @When("^Background when step$")
	    public void background_when_step() throws Throwable {
//	        throw new PendingException();
	    	System.out.println("Background when step");
//	    	throw new NullPointerException();
	    }

	    @Then("^Background then step$")
	    public void background_then_step() throws Throwable {
//	        throw new PendingException();
	    	System.out.println("Background then step");
//	    	Assert.assertTrue(false);
	    }
	    


//	    @Before("@RunThis")
	    public void beforeSpecificScenario() {
			// TODO Auto-generated method stub
	    	System.out.println("This is a before step for run this tagged scenario");
//	    	throw new NullPointerException();

		}
	    
	    
	    
//	    @After("@RunThis")
	    public void afterSpecificScenario() {
			// TODO Auto-generated method stub
	    	System.out.println("This is a after step for run this tagged scenario");

		}
	   
}