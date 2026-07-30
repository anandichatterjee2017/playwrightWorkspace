package playwright.handling_elements_playwright_locator;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.nio.file.Paths;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.Tracing;
import com.microsoft.playwright.options.SelectOption;

public class TraceViewer {

	public static void main(String[] args) {
		Dimension dimesion =  Toolkit.getDefaultToolkit().getScreenSize();
		double height = dimesion.getHeight();
		double width = dimesion.getWidth();
		System.out.println("Height is: "+height+" width is "+width);
		
		Playwright playwright = Playwright.create();
		Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false));
		BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize((int)width, (int)height));
		
		// Start tracing before creating / navigating a page.
		browserContext.tracing().start(new Tracing.StartOptions()
		  .setScreenshots(true)
		  .setSnapshots(true)
		  .setSources(true));
		
		Page page = browserContext.newPage();
		
		page.navigate("https://wikipedia.org/");
		
		//select by value
		page.selectOption("select", "hi");
		
		//select by text
		page.selectOption("select", new SelectOption().setValue("Eesti"));
		
		//select by index
		page.selectOption("select", new SelectOption().setIndex(1));
		
		// Stop tracing and export it into a zip archive.
		browserContext.tracing().stop(new Tracing.StopOptions()
		  .setPath(Paths.get("trace.zip")));
		
		page.close();
		playwright.close();
	}

}
