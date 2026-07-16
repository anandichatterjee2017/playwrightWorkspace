"use strict";
/*
What are Tuples?
a Tuple is a fixed-length, ordered array where each element can have a different type.
Unlike regular arrays that allow multiple values of the same type,
tuples let you define the exact type and number of elements.
*/
let employee = ["Arunava", 20];
console.log(employee[0]); //Arunava
console.log(employee[1]); //20
// Tuple with spread
let data1 = ["Test"];
//Tuple with Spread
// ... is called the spread operator
let rgb = [255, 0, 0, "Red", "Bright", "Dark"];
console.log(rgb[3]);
//Merge two tuples
let tuple1 = ["Rahul", 30];
let tuple2 = [true, "India"];
let mergeTuple = [...tuple1, ...tuple2];
console.log(mergeTuple);
console.log(mergeTuple[2]);
