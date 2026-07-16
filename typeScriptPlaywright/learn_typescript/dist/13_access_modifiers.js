"use strict";
//Variable scope and access modifiers
class EmployeeDetails {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    getUserDetails() {
        return `Name is ${this.name} and salary is ${this.salary} and department is ${this.department}`;
    }
}
//static variable, they belong to the class itself and not to the instance
EmployeeDetails.message = "Welcome to the organization";
const ed = new EmployeeDetails("Arunava", 100000, "Automation");
console.log(ed.name); //public access modifier can be accessed anywhere outside the class
//console.log(ed.salary) //private access modifier can be accessed within the class only
//console.log(ed.department)//protected access modifier can be accessed within the class and its subclasses
console.log(EmployeeDetails.message);
console.log(ed.getUserDetails());
