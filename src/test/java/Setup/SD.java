package Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static junit.framework.TestCase.assertTrue;

/**
 * Created by Swarn on 8/20/2017.
 */
public class SD {

    HomePage homePage = new HomePage();

    @Given("^I open application on device$")
    public void i_open_application_on_device() throws Throwable {

        System.out.println("device");
        //assertTrue(homePage.isHomePage());
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @When("^I enter credentials \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_credentials_and(String arg1, String arg2) throws Throwable {
        System.out.println("cerd");
        //homePage.typeTextField1(arg1);
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @Then("^I click on login button$")
    public void i_click_on_login_button() throws Throwable {
        System.out.println("last");


        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }
}
