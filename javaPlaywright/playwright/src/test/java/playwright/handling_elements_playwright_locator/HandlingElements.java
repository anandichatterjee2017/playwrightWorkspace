package playwright.handling_elements_playwright_locator;

import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.Page.TypeOptions;

public class HandlingElements {

	public static void main(String[] args) {

		ArrayList<String> list = new ArrayList<String>();
		list.add("--start-maximized");
		
		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false).setArgs(list));
		BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize(null));
		
		Page page = browser.newPage();
		
		page.navigate("https://gmail.com");
		
		//page.locator("#identifierId").type("trainer@way2automation.com");
		//page.locator("[id='identifierId']").type("trainer@way2automation.com");
		//spage.type("id=identifierId", "trainer@way2automation.com", new TypeOptions().setDelay(100));
		page.locator("[type=text]").type("trainer@way2automation.com");
		//page.click("text=Next");
		page.click("button:has-text('Next')");
		page.locator("[type=password]").fill("sdfsdfdsf");
		page.click("button:has-text('Next')");
		System.out.println(page.locator("//*[@id=\"view_container\"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[2]/div[2]/span").innerText());
		
		page.close();
		playwright.close();
		
	}

}
