package playwright.handling_elements_playwright_locator;
import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.File;
import java.nio.file.Paths;
import java.util.List;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.ElementHandle;
import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Page.ScreenshotOptions;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.options.SelectOption;

public class CapturingScreenshotAndVideo {

	public static void main(String[] args) {
		Dimension dimesion = Toolkit.getDefaultToolkit().getScreenSize();
		double height = dimesion.getHeight();
		double width = dimesion.getWidth();
		System.out.println("Height is: " + height + " width is " + width);

		String screenshotPath = System.getProperty("user.dir")+File.separator+"src"+File.separator+"test"+File.separator+"resources"
								+File.separator+"screenshots";
		String videoPath = System.getProperty("user.dir")+File.separator+"src"+File.separator+"test"+File.separator+"resources"
								+File.separator+"videos";
		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium()
				.launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false));

		BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions()
				.setViewportSize((int) width, (int) height).setRecordVideoDir(Paths.get(videoPath)));

		Page page = browserContext.newPage();

		page.navigate("https://www.wikipedia.org/");
		// select by value
		page.selectOption("select", "hi");
		// select by text
		page.selectOption("select", new SelectOption().setLabel("Eesti"));
		// select by index
		page.selectOption("select", new SelectOption().setIndex(1));

		/*Locator values = page.locator("select > option");
		System.out.println(values.count());
		for (int i = 0; i < values.count(); i++) {
			System.out.println(values.nth(i).innerText() + "----" + values.nth(i).getAttribute("lang"));
		}*/

		List<ElementHandle> values = page.querySelectorAll("select > option");
		System.out.println(values.size());
		for (ElementHandle value : values) {
			System.out.println(value.innerText() + "----" + value.getAttribute("lang"));
		}
		page.screenshot(new ScreenshotOptions().setPath(Paths.get(screenshotPath+File.separator+"screenshot.png")));
		page.close();
		playwright.close();
	}

}
