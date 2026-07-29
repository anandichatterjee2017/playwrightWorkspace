package playwright.handling_elements_playwright_locator;

import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class FramesPractice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<String> list = new ArrayList<String>();
		list.add("--start-maximized");

		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium()
				.launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false).setArgs(list));
		BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize(null));
		Page page = browser.newPage();

		page.navigate("https://rahulshettyacademy.com/AutomationPractice/");

		String str = page.frameLocator("#courses-iframe").locator("//div[@class='item active']//a[text()='JOIN NOW']")
				.innerText();
		System.out.println(str);

		Locator frames = page.locator("iframe");

		System.out.println(frames.count());

		for (int i = 0; i < frames.count(); i++) {

			System.out.println(frames.nth(i).getAttribute("id"));

		}

		page.close();
		playwright.close();
	}

}
