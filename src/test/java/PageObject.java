import Setup.AppiumSetup;
import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * Created by Swarn on 8/20/2017.
 */
public class PageObject extends AppiumSetup {

    By textField1 = MobileBy.AccessibilityId("TextField1");
    By textField2 = MobileBy.AccessibilityId("TextField2");
    By computeSum = MobileBy.AccessibilityId("ComputeSumButton");
    By result = MobileBy.AccessibilityId("Answer");


    public boolean isPageObject(){
        waitVar.until(ExpectedConditions.presenceOfElementLocated(computeSum));
        return driver.findElement(computeSum).isDisplayed();
    }

    public void typeTextField1(String text){
        waitVar.until(ExpectedConditions.presenceOfElementLocated(textField1));
        driver.findElement(textField1).sendKeys(text);
    }

    public void typeTextField2(String text){
        waitVar.until(ExpectedConditions.presenceOfElementLocated(textField2));
        driver.findElement(textField2).sendKeys(text);
    }

    public void clickComputeSum(){
        waitVar.until(ExpectedConditions.presenceOfElementLocated(computeSum));
        driver.findElement(computeSum).click();
    }

    public String returnResult(){
        waitVar.until(ExpectedConditions.presenceOfElementLocated(result));
        return driver.findElement(result).getText();
    }
}
