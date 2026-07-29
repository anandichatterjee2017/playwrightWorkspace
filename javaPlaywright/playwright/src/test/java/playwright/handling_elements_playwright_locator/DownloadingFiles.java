package playwright.handling_elements_playwright_locator;

import java.io.File;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Download;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class DownloadingFiles {

	public static void main(String[] args) {
		try {
			String path = System.getProperty("user.dir")+File.separator+"src"+File.separator+"test"+File.separator+"resources"+File.separator+"selenium-java-4.46.0.zip";
			System.out.println(path);

			ArrayList<String> list = new ArrayList<String>();
			list.add("--start-maximized");

			Playwright playwright = Playwright.create();
			Browser browser = playwright.chromium()
					.launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false).setArgs(list));
			BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize(null));
			Page page = browser.newPage();

			page.navigate("https://www.selenium.dev/downloads/");
			
			Download file = page.waitForDownload(() -> {
				page.locator("//p[text()='Java']/following-sibling::p/a").first().click();
			});
			
			file.saveAs(Paths.get(path));
			
			page.close();
			playwright.close();
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	
	}

}
