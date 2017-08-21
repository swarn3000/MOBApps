
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * Created by Swarn on 8/20/2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = "classpath:features", format = { "pretty",
        "html:target/site/cucumber-pretty",
        "json:target/site/cucumber.json",
        "rerun:target/rerun.txt" }, tags = { "~@SelenideLogin" })
/*@CucumberOptions(
      features = "classpath:                features",
      format = {"pretty", "html:target/cucumber-html-report"},
      tags = {}
      )*/
public class RunCukesTest{}

