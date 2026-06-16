/*
What are Tuples?
a Tuple is a fixed-length, ordered array where each element can have a different type.
Unlike regular arrays that allow multiple values of the same type,
tuples let you define the exact type and number of elements.
*/

let employee : [string, number] = ["Arunava", 20];
console.log(employee[0]); //Arunava
console.log(employee[1]); //20

// Tuple with spread
let data1: [string, number?] = ["Test"];

//Tuple with Spread
// ... is called the spread operator
let rgb: [number,number,number,...string[]] = [255,0,0,"Red","Bright","Dark"]
console.log(rgb[3]);

//Merge two tuples
let tuple1: [string,number] = ["Rahul",30];
let tuple2: [boolean,string] = [true,"India"];

let mergeTuple = [...tuple1,...tuple2];
console.log(mergeTuple);
console.log(mergeTuple[2]);