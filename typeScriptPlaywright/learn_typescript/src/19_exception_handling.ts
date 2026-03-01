//Exception Handling -> It helps to handle and recover from runtime errors without crashing the program
/*
    If we divide any number by zero it generates an exception.
    If we try to access array out of bound it generates an exception. - It will throw array index out of bound exception
    If we try to search file which does not exist we will get file not found exception
    We have main function in javascript as well
*/
/*
try - A block of code where exceptions can occur.
catch - A block of code to handle the exception
finally - A block of code that will always execute
throw - A statement to explicitly throw an exception
*/

class Exceptions{

    static validateNumber( num: number){
        if(num < 0){
            throw new Error("Number must be non-negative");
        }
    }

    static main(): void {
        try{
            this.validateNumber(-1);
        }
        catch(e: any){
            console.log("Validation error "+e.message);
        }

        // In typescript if we try to access any element outside bound it will return undefined
        // Code is not going to catch block because as per typescript it is not an exception
        try{
            const numbers = [1,2,3,4,5];
            console.log(numbers[6]);
            // This will return an exception because we are trying to convert undefined to string.
           console.log(numbers[6].toString());
            // Since code has gone to the catch block Hello will not be printed.
            console.log("Hello");

        }
        catch(e : any){
            console.log("An error occured in array index "+e.message);
        }

        try{
            const a = 10;
            const b = 0;
            const result = a/b; //gives to infinity
            console.log(result);
            // Even if we decide a number by zero no exception is happening 
            // So code is not going to the catch block
            // In Javascript dividing a number by zero returns INFINITY
            // So here if the number is not finite we will throw an exception and code is going to catch block
            
            if(!isFinite(result)){
                throw new Error("Division by ZERO is not allowed");
            }
        }catch(e: any){
            console.log("An Error occurred: "+e.message);
        } finally{
            console.log("This will always be executed.");
        }
    }
}
Exceptions.main()
