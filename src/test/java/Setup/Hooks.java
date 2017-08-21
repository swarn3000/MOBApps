package Setup;

import cucumber.api.java.After;
import cucumber.api.java.cs.A;
import org.junit.Before;

import java.net.MalformedURLException;

/**
 * Created by Swarn on 8/20/2017.
 */
public class Hooks {

    AppiumSetup start = new AppiumSetup();

    @cucumber.api.java.Before
    public void beforeHookfunction() throws MalformedURLException, InterruptedException{
        start.createDriver();
    }

    @After
    public void afterHookfunction() {
        start.teardown();
    }

}
