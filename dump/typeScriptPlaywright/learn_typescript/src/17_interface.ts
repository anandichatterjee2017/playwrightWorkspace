/*
Suppose we have 2 abstract classes now in the form of WebDriver and RemoteWebDriver
If we want ChromeDriver class to extend both WebDriver class and Remote WebDriver class we get an error.
To solve this problem we will use interface

abstract class RemoteWebDriver{
    abstract getTitle(): void;
}

abstract class WebDriver3{
    url: string;

    constructor(url: string){
        this.url = url;
    }

    navigateURL() : void{
        console.log(`Navigated to url ${this.url}`);
    }

   abstract launchURL(): void;
}

//Error - Classes can only extend a single class.
// Multiple inheritence is not allowed
class ChromeDriver3 extends WebDriver3, RemoteWebDriver{
    launchURL() : void {
        console.log("Launched Chrome Browser");
    }
}
*/ 

/*
 All the methods of interface are abstract by defautlt. We dont need to specifically mnention the functions as abstract unlike abstract class.
 One more difference between abstract class and interface is that we cannot have a function with definition in interface which we have in abstract class.
 Every class implementing the interface must define the abstrract methods mentioned in the interface
 Instance variable cannot be initiated inside a interface.
 We also cannot create an object of the interface since it is not complete.
 Also we can achieve multiple inheriteance. Here ChromeDriver class implements both WebDriver and RemoteWebDriver interface. We are allowed to implement multiple inheritence
 When a class implements an interface it has to implement all the abstract functions and initialize the vairables mentioned in the interface
*/

interface WebDriver4{

    text: string;
    getTitle() : string;
    navigate(): void;

}

interface RemoteWebDriver4{
    launchBrowser() : void;
}

// Press on the red line (error) to check the error. Press Ctrl + . to implement the method
class ChromeDriver4 implements WebDriver4, RemoteWebDriver4{
    launchBrowser(): void {
        console.log("Launching Chrome")
    }
    text: string = "Chrome";
    getTitle(): string {
        return "Getting title in Chrome"
    }
    navigate(): void {
        console.log("Navigate to URL");
    }

}

class FirefoxDriver4 implements WebDriver4, RemoteWebDriver4{
    launchBrowser(): void {
        console.log("Launching Firefox")
    }
    text: string = "Firefox";
    getTitle(): string {
        return "Getting title in Firefox"
    }
    navigate(): void {
        console.log("Navigate to Firefox");
    }

}

const ch = new ChromeDriver4();
ch.text = "Chrome";
console.log(ch.text);
console.log(ch.getTitle());
ch.launchBrowser();
ch.navigate();

const ff = new FirefoxDriver4();
ff.text = "Firefox";
console.log(ff.text);
console.log(ff.getTitle());
ff.launchBrowser();
ff.navigate();