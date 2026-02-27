/*
Classes and OOPS

Classes
Access Modifiers (public, private, protected)
Export (how to access classes/functions in a different file)
Inheritance
Abstract classes
Interface

A Class in Typescript is a blueprint for creating objects with properties (data) and methods (functions).
*/

class Employee{

    // instance variable
    emp_name: string;
    age: number;

    // constructor
    constructor(emp_name: string, age: number){
        this.emp_name = emp_name;
        this.age = age;
    }

    // Function
    welcome() : void {
        console.log("Welcome employee")
    }

    // parameterized function
    add( a: number, b: number) : number{
        return a + b;
    }

    // create function with string
    greet() : string {
        return `Hello I'm ${this.emp_name}`
    }
}

const p1 = new Employee("Arunava", 40);
p1.greet()