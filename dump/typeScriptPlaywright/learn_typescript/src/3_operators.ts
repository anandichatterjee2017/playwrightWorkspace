/*   Operators
Operators are special symbers or keywords used to perform operations on variables and values.
Typescript supports the full range of js operators, along with the benefit of static typing

categories of Operators
-----------------------

Arithmetic  - Basic math operation
Assignment - Assign values to variables
Comparison - compare the values
Logical - combine or invert conditions
Bitwise - 
Unary - Operate on a single operand
Ternary - Short form of if-else
Type - Type-checking and type assertion in TS
*/

//1. Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b); //15
console.log(a - b); //5
console.log(a * b); //50
console.log(a / b); //2
console.log(a % b); //0

//2. Assignment Operators
let y = 5;

y +=3; // same as y = y + 3
console.log(y);
y -=3; // y = y - 3
console.log(y);

//3. Comparison (Relational) Operator
console.log(5 > 3); //true
console.log(5 < 3); //false
//console.log(5==='5');

const f = 5;
const g = 6;
//console.log(f !==g);
// This throws an error: This comparison appears to be unintentional because the types '5' and '6' have no overlap.
// Compiler will throw an error because we are comparing two different fixed numbers.
// They can never be same. This comparison is meaning less.
// In Java script it works fine but not valid in typescript
// If we convert this to number it works fine
console.log((5 as number) !== (6 as number))
// If we declare the types of the variables we would be able to compare them.
const c: number = 5
const d: number = 6
console.log(c !== d)


// Logical Operator
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isAdmin);


//Unary Operators - Operators on a single operand
let ab = 5;
console.log(-ab); //-5
let ba = true;
console.log(!ba) //false

let ca = 10;
console.log(ca++); //11 //post-increment
console.log(ca);
console.log(ca--); //10
console.log(ca);
console.log(--ca);
console.log(ca);
console.log(++ca); //pre-increment
console.log(ca);

//Ternary Operator
let newAge = 20;
let newResult = newAge > 18 ? "Adult" : "Minor"
console.log(newResult)

//Type Operartor - as, typeof, instanceof
let str = "Hello";
console.log(typeof str); //string

class Dog{}
const dg = new Dog();
console.log(dg instanceof Dog);//true