package playwright.handling_elements_playwright_locator;

import java.io.File;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class HandleBasicAuth {

	public static void main(String[] args) {

		try {
			ArrayList<String> list = new ArrayList<String>();
			list.add("--start-maximized");

			Playwright playwright = Playwright.create();
			Browser browser = playwright.chromium()
					.launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false)
							.setArgs(list));
			BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions()
					.setHttpCredentials("admin","admin"));
			Page page = browserContext.newPage();

			page.navigate("http://the-internet.herokuapp.com/basic_auth");
			
			page.close();
			playwright.close();
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	
	}

}
