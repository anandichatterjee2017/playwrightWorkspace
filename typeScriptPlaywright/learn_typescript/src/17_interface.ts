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
class ChromeDriver3 extends WebDriver3, RemoteWebDriver{
    launchURL() : void {
        console.log("Launched Chrome Browser");
    }
}
*/ 