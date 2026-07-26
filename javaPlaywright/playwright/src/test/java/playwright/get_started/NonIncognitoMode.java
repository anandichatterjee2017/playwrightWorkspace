package playwright.get_started;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class NonIncognitoMode {

	public static void main(String[] args) {
		try {
			Dimension dimesion =  Toolkit.getDefaultToolkit().getScreenSize();
			double height = dimesion.getHeight();
			double width = dimesion.getWidth();
			System.out.println("Height is: "+height+" width is "+width);
			
			String chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
			String chromedefaultPath = "C:\\Users\\Arunava\\AppData\\Local\\Google\\Chrome\\User Data\\Default";
			
			Playwright playwright = Playwright.create();
			Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false));
			
			BrowserContext browserContext = playwright.chromium().launchPersistentContext(Paths.get(chromedefaultPath), 
					new BrowserType.LaunchPersistentContextOptions()
					.setHeadless(false).setExecutablePath(Paths.get(chromePath)));
			
			Page page = browserContext.newPage();
			
			page.navigate("https://playwright.dev/java/");
			System.out.println(page.title());
			page.waitForTimeout(5000);
			page.close();
			playwright.close();
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
