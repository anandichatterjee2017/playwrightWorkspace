package playwright.handling_elements_playwright_locator;

import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class HandlingMouseHover {

	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
		list.add("--start-maximized");

		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium()
				.launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false).setArgs(list));
		BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize(null));
		Page page = browser.newPage();

		page.navigate("https://rahulshettyacademy.com/AutomationPractice/");

		page.locator("#mousehover").hover();
		page.locator("//button[@id='mousehover']/following-sibling::div/a").click();
		
		page.close();
		playwright.close();
	}

}
