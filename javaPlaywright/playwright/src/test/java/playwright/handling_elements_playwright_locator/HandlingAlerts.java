package playwright.handling_elements_playwright_locator;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class HandlingAlerts {

	public static void main(String[] args) {
		Dimension dimesion =  Toolkit.getDefaultToolkit().getScreenSize();
		double height = dimesion.getHeight();
		double width = dimesion.getWidth();
		System.out.println("Height is: "+height+" width is "+width);
		
		String chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
		String chromedefaultPath = "C:\\Users\\Arunava\\AppData\\Local\\Google\\Chrome\\User Data\\Default";
		
		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false));
		
		BrowserContext browserContext = playwright.chromium().launchPersistentContext(Paths.get(chromedefaultPath), 
				new BrowserType.LaunchPersistentContextOptions()
				.setHeadless(false).setExecutablePath(Paths.get(chromePath)));
		
		Page page = browserContext.newPage();

		page.navigate("https://rahulshettyacademy.com/AutomationPractice/");
		
		page.waitForTimeout(3000);
		page.locator("#alertbtn").click();
		
		page.onDialog(dialog -> {
			dialog.accept();
			System.out.println(dialog.message());
		});
		
		page.close();
		playwright.close();
	}

}
