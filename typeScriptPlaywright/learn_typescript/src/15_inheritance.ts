//OOPS - Inheritance
/*
Inheritance is a process of inheriting properties from parent.
The child class / subclass can inherit the property of the parent / base / super class.

Instead of reimplementing the properties again if the parent class has some property 
which the child class wants to access we can use inheritance.
*/

// main class
class WebDriver {
    url: string;

    constructor(url: string){
        this.url = url;
    }

    navigate() : void {
        console.log(`Navigated to url ${this.url}`)
    }
}

/*
Launch browser has seperate functionality in ChromeDriver class and FirefoxDriver class.
We can create an instance of ChromeDriver and FirefoxDriver and call the launchBrowser method.
launch browser implementation / functionality is different.

// child class
class ChromeDriver {
    launchBrowser(): void {
        console.log("Launched Chrome Driver")
    }
}

// child class
class FirefoxDriver {
    launchBrowser(): void {
        console.log("Launched Firefox Driver")
    }
}

const chrome = new ChromeDriver();
chrome.launchBrowser();

const firefox = new FirefoxDriver();
firefox.launchBrowser();
*/

/*
We also need to use the navigate() for both chrome driver and firefox driver.
For this either we need to implement the same method in both the subclasses 
or use the implementation of navigate() from the base class.

To use the properties / methods of the parent class we use the extend keyword.

Note: Whenever the parent class has a constructor with arguements in that scenario whenever 
 we create an object of the child class we need to pass the value to the parent class constructor.

 One more thing we are able to access navigate() from the object of ChromeDriver or FirefoxDriver
 ince it is declared as public.
 Had it been private / protected we would have encountered error.
 For protected error : Property 'navigate' is protected and only accessible within class 'WebDriver' and its subclasses.
 For private error : Property 'navigate' is private and only accessible within class 'WebDriver'.ts(2341)
(method) WebDriver.navigate(): void
*/

class ChromeDriver extends WebDriver{
    launchBrowser(): void {
        console.log("Launched Chrome Driver")
        //this.navigate();
    }
}

// child class
class FirefoxDriver extends WebDriver{
    launchBrowser(): void {
        console.log("Launched Firefox Driver")
    }
}

const chrome = new ChromeDriver("https://www.google.com");
chrome.launchBrowser();
chrome.navigate();

const firefox = new FirefoxDriver("https://www.facebook.com");
firefox.launchBrowser();
firefox.navigate();