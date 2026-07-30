package playwright.handling_elements_playwright_locator;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.File;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class Locators {
	
	public static void main(String[] args) {
		/*
		 * Locators
		 * XPATH and CSS
		 * getByRole
		 * getByText
		 * getByLabel
		 * GetByPlaceHolder
		 * Filter
		 * first
		 * Last
		 * nth
		 */
		
		Dimension dimesion =  Toolkit.getDefaultToolkit().getScreenSize();
		double height = dimesion.getHeight();
		double width = dimesion.getWidth();
		System.out.println("Height is: "+height+" width is "+width);
		
		String screenshotPath = System.getProperty("user.dir")+File.separator+"src"+File.separator+"test"+File.separator+"resources"
				+File.separator+"trace";
		
		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false));
		BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize((int)width, (int)height));
		
		Page page = browserContext.newPage();
		
		page.navigate("https://way2automation.com/way2auto_jquery/registration.php");
		
		
		
		page.close();
		playwright.close();
	}

}
