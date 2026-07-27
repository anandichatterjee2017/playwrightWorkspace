package playwright.handling_elements_playwright_locator;

import java.nio.file.Path;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.options.SelectOption;
import com.microsoft.playwright.BrowserType.ConnectOptions;
import com.microsoft.playwright.BrowserType.ConnectOverCDPOptions;
import com.microsoft.playwright.BrowserType.LaunchOptions;
import com.microsoft.playwright.BrowserType.LaunchPersistentContextOptions;
import com.microsoft.playwright.Page;

public class HandlingDropdownList {

	public static void main(String[] args) {
		
		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
		
		Page page = browser.newPage();
		
		page.navigate("https://wikipedia.org/");
		
		//select by value
		page.selectOption("select", "hi");
		
		//select by text
		page.selectOption("select", new SelectOption().setValue("Eesti"));
		
		//select by index
		page.selectOption("select", new SelectOption().setIndex(1));
				
		page.close();
		playwright.close();
	}

}
