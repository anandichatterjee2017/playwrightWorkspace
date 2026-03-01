// We use getter and setter when we try to hide the implementation of the public variables.
// We will start the private variable name with underscore

/*
get salary() lets you access the private _salary like a normal property.
set salary(value) lets you assign a value with some custom logic
You do not call them like functions -- no () required
*/

class Employees{
    private _salary: number = 0;

    get salary(): number {
        console.log("Getting salary");
        return this._salary;
    }

    set salary(amount: number){
        if(amount > 0){
            console.log(`Setting salary to ${amount}`);
            this._salary = amount;
        }
        else{
            console.log("Invalid salary amount")
        }
    }
}

let emp = new Employees();
emp.salary = 100; //calls setter
console.log(emp.salary); //calls getter 
emp.salary = -100;