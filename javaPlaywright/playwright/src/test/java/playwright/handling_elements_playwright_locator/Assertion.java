package playwright.handling_elements_playwright_locator;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.File;
import java.nio.file.Paths;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.Tracing;

public class Assertion {

	public static void main(String[] args) {
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
		
		page.navigate("http://www.tizag.com/htmlT/htmlcheckboxes.php");
		
		assertThat(page).hasURL("http://www.tizag.com/htmlT/htmlcheckboxes.php");
		 
		assertThat(page).hasTitle("HTML Tutorial - Checkboxes");
		
		assertThat(page.locator("//a[text()='HTML - Tags']")).hasText("HTML - Tags");
		
		assertThat(page.locator("//h1[text()='HTML Checkboxes Selected']/following-sibling::div//input[@value='soccer']")).isChecked();
		assertThat(page.locator("//h1[text()='HTML Checkboxes Selected']/following-sibling::div//input[@value='soccer']")).isVisible();
		
		page.close();
		playwright.close();
	}

}
