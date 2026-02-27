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
*/
// child class
class ChromeDriver{
    launchBrowser(): void {
        console.log("Launched Chrome Driver")
    }
}

// child class
class FirefoxDriver{
    launchBrowser(): void {
        console.log("Launched Firefox Driver")
    }
}
/*
We can create an instance of ChromeDriver and FirefoxDriver and call the launchBrowser method.
*/
const chrome = new ChromeDriver();
chrome.launchBrowser();

const firefox = new FirefoxDriver();
firefox.launchBrowser();