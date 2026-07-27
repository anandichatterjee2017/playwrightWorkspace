package playwright.handling_elements_playwright_locator;

import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class HandlingLinks {

	public static void main(String[] args) {

		ArrayList<String> list = new ArrayList<String>();
		list.add("--start-maximized");

		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium()
				.launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false).setArgs(list));
		BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize(null));
		Page page = browser.newPage();

		page.navigate("https://wikipedia.org/");

		Locator links = page.locator("a");
		for (int i = 0; i < links.count(); i++) {
			System.out.println("Link name is: " + links.nth(i).innerText() + " and link address is: "
					+ links.nth(i).getAttribute("href"));
		}

		Locator block = page.locator("//nav[@aria-label='Other projects']");
		Locator blocklinks = block.locator("a");
		System.out.println("----Printing links from the block------");
		System.out.println(blocklinks.count());

		for (int i = 0; i < blocklinks.count(); i++) {
			System.out.println(blocklinks.nth(i).innerText() + "---URL: ----" + blocklinks.nth(i).getAttribute("href"));
		}
		page.close();
		playwright.close();
	}
}
