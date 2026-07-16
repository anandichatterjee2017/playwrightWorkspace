"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTeam = exports.something = void 0;
exports.adding = adding;
/*
Initially we were creating the class and
creating the objects and calling the functions defined in the class in the same file.
We can seggregate using modules.
If we want to reuse some code defined in different files we use modules.

What are Modules?

Modules are individual files in Typescript. Anything declared in one module is scoped to
that file only unless explicitly exported

We can also export variables and functions
*/
function adding(a, b) {
    return a + b;
}
exports.something = 123;
class EmployeeTeam {
    // constructor
    constructor(empname, age) {
        this.emp_name = empname;
        this.age = age;
    }
    // Function
    welcome() {
        console.log("Welcome employee");
    }
    // parameterized function
    add(a, b) {
        return a + b;
    }
    // create function with string
    greet() {
        return `Hello I am ${this.emp_name}`;
    }
}
exports.EmployeeTeam = EmployeeTeam;
