/*
Initially we were creating the class, 
creating the objects and calling the functions defined in the class in the same file.
If we want to reuse some code defined in different files we use modules.

What are Modules?

Modules are individual files in Typescript. Anything declared in one module is scoped to 
that file only unless explicitly exported

We can also export variables and functions
*/
export function adding(a: number, b: number): number{

    return a+b;
}

export const something: number = 123;

export class EmployeeTeam{

    // instance variable
    emp_name: string;
    age: number;

    // constructor
    constructor(empname: string, age: number){
        this.emp_name = empname;
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
        return `Hello I am ${this.emp_name}`
    }
}