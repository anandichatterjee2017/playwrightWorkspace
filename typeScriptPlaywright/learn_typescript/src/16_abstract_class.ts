/*
If a class is marked as Abstract then you cannot instansiate that class, you cannot
create an object of that class

If a method is marked as Abstract then all child classes must define that method
*/

class WebDriver1{
    url: string;

    constructor(url: string){
        this.url = url;
    }

    navigateURL() : void{
        console.log(`Navigated to url ${this.url}`);
    }
}

class ChromeDriver1 extends WebDriver1{
    launchURL() : void {
        console.log("Launched Chrome Browser");
    }
} 

class FirefoxDriver1 extends WebDriver1{
    launchURL() : void {
        console.log("Launched Firefox Browser");
    }
} 