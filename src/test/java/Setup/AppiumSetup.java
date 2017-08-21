package Setup;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by Swarn on 8/20/2017.
 */
public class AppiumSetup {

    public static WebDriver driver;
    public static WebDriverWait waitVar;


    public void createDriver() throws MalformedURLException, InterruptedException{
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(CapabilityType.BROWSER_NAME, "");
        capabilities.setCapability("deviceName", "192.168.175.101:5555");
        capabilities.setCapability("platformVersion", "4.4.2");
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("appPackage", "com.cucumberrntest");
        capabilities.setCapability("appActivity", "com.cucumberrntest.MainActivity");
        driver = new AndroidDriver(new URL("http://127.0.0.1:4727/wd/hub"), capabilities);
        //WebDriverRunner.setWebDriver(driver);
        System.out.println("called log");
    }

    public void teardown() {
        // close the app
        driver.quit();
    }
}
