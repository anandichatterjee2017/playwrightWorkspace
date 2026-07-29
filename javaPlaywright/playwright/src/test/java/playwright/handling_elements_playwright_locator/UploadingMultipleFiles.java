package playwright.handling_elements_playwright_locator;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class UploadingMultipleFiles {
	public static void main(String[] args) {
		try {
			String path1 = System.getProperty("user.dir") + File.separator + "src" + File.separator + "test"
					+ File.separator + "resources" + File.separator + "images" + File.separator + "pic.png";
			String path2 = System.getProperty("user.dir") + File.separator + "src" + File.separator + "test"
					+ File.separator + "resources" + File.separator + "images" + File.separator + "img.png";

			ArrayList<String> list = new ArrayList<String>();
			list.add("--start-maximized");

			Playwright playwright = Playwright.create();
			Browser browser = playwright.chromium()
					.launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false).setArgs(list));
			BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize(null));
			Page page = browser.newPage();

			page.navigate("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_fileupload_multiple");

			page.frameLocator("#iframeResult").locator("#myFile").setInputFiles(new Path[] {

					Paths.get(path1),
					Paths.get(path2) 
			});

			page.close();
			playwright.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
