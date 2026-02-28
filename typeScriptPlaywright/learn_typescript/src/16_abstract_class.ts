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

const chrome1 = new ChromeDriver1("https://www.google.com");
chrome1.launchURL();
chrome1.navigateURL();

const firefox1 = new ChromeDriver1("https://www.google.com");
firefox1.launchURL();
firefox1.navigateURL();

// We can also initialize an object of webDriver class.
// But it is of less use since we can only access the navigateURL() method and not the launchURL().
// This is because launchURL() is implemented in the child class.
// We cannot decide which browser it is going to launch since launchURL is not invoked.
const webDriver1 = new WebDriver1("https://www.google.com");

/* 
    we can make WebDriver1 as abstract class because we dont want user to create an object of the class.
    we would also like to add in the class launchURL() as an abstract method so that the child class is forced to implement the method.
*/
console.log("------ Abstract Class -----------");
abstract class WebDriver2{
    url: string;

    constructor(url: string){
        this.url = url;
    }

    navigateURL() : void{
        console.log(`Navigated to url ${this.url}`);
    }

    /* An abstract method cannot jave implementation.
    abstract launchURL(): void{

    }*/
   abstract launchURL(): void;
}

// We will get an error - Cannot create an instance of an abstract class
//const webDriver2 = new WebDriver2("https://www.google.com");

/*
The class ChromeDriver2 need to implement the abstract method launchURL()
Error - Non-abstract class 'ChromeDriver2' does not implement inherited abstract member launchURL from class 'WebDriver2'
class ChromeDriver2 extends WebDriver2{
    
}
*/

class ChromeDriver2 extends WebDriver2{
    launchURL() : void {
        console.log("Launched Chrome Browser");
    }
} 

class FirefoxDriver2 extends WebDriver2{
    launchURL() : void {
        console.log("Launched Firefox Browser");
    }
}

const chrome2 = new ChromeDriver1("https://www.google.com");
chrome2.launchURL();
chrome2.navigateURL();

const firefox2 = new ChromeDriver1("https://www.google.com");
firefox2.launchURL();
firefox2.navigateURL();