package playwright.handling_elements_playwright_locator;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class UploadingFile {

	public static void main(String[] args) {

		try {
			String path = System.getProperty("user.dir")+File.separator+"src"+File.separator+"test"+File.separator+"resources"+File.separator+"images"+File.separator+"pic.png";
			System.out.println(path);
			
			ArrayList<String> list = new ArrayList<String>();
			list.add("--start-maximized");

			Playwright playwright = Playwright.create();
			Browser browser = playwright.chromium()
					.launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false).setArgs(list));
			BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize(null));
			Page page = browser.newPage();

			page.navigate("https://www.way2automation.com/way2auto_jquery/registration.php#load_box");
			
			page.locator("input[type='file']").setInputFiles(Paths.get(path));
			
			page.close();
			playwright.close();
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
