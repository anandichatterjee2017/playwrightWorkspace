package playwright;

import java.awt.Dimension;
import java.awt.Toolkit;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class LaunchBrowser {

	public static void main(String[] args) {
		try {
			
			Dimension dimesion =  Toolkit.getDefaultToolkit().getScreenSize();
			double height = dimesion.getHeight();
			double width = dimesion.getWidth();
			System.out.println("Height is: "+height+" width is "+width);
			
			Playwright playwright = Playwright.create();
			Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("msedge").setHeadless(false));
			BrowserContext browserContext = browser.newContext(new Browser.NewContextOptions().setViewportSize((int)width, (int)height));
			Page page = browserContext.newPage();
			
			page.navigate("https://playwright.dev/java/");
			System.out.println(page.title());
			Thread.sleep(2000);
			page.close();
			playwright.close();
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
