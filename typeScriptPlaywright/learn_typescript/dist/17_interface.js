"use strict";
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
// Press on the red line (error) to check the error. Press Ctrl + . to implement the method
class ChromeDriver4 {
    constructor() {
        this.text = "Chrome";
    }
    launchBrowser() {
        console.log("Launching Chrome");
    }
    getTitle() {
        return "Getting title in Chrome";
    }
    navigate() {
        console.log("Navigate to URL");
    }
}
class FirefoxDriver4 {
    constructor() {
        this.text = "Firefox";
    }
    launchBrowser() {
        console.log("Launching Firefox");
    }
    getTitle() {
        return "Getting title in Firefox";
    }
    navigate() {
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
