"use strict";
// Function
function printHello() {
    console.log("Hello");
}
printHello();
function log(msg) {
    console.log(msg);
}
log("Hello World");
function greet(name) {
    return `Hello ${name}`;
}
let nameFunc = greet("Arunava");
console.log(nameFunc);
//name: string --> the parameter must be a string
//:string after the parantheses - the function returns a string
function addition(a, b) {
    return a + b;
}
let newSum = addition(10, 15);
console.log(newSum);
//Optional parameters: Use ? to make a parameter optional
// If age is there then we will print name and age, else we will print only name
function welcome(welcome, age) {
    return age ? `Hello, ${welcome}, age ${age}` : `Hello, ${welcome}`;
}
let newText = welcome("Rahul");
console.log(newText);
let newText1 = welcome("Rahul", 30);
console.log(newText1);
//arrow functions
const multiplyNumber = (x, y) => x * y;
let result = multiplyNumber(10, 10);
console.log(result);
function combine(a, b) {
    return a + b;
}
combine("Rahul", "Arora");
combine(1, 10);
combine(1, 1, "Rahul");
combine(1, 10, "Rahul");
