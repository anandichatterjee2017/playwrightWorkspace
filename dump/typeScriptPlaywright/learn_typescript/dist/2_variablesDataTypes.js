"use strict";
/*
    -- NAMING CONVENTION TO FOLLOW
    File name -> Should be in small letters -> example intro-typescript.ts
    Class name -> Pascal case -> LoginTest.ts
    Function name -> camel case -> getUserDetails()
    Variable name -> camel case -> userName
    Constant Names -> UPPER_CASE -> NO_OF_USERS
*/
// Variables -> container for storing data
// let, const or var
// var we dont use very often. Wehn we declare variables we will either use let or const
// Typescript allows us to use datatypes to the variables unlike javascript.
let age = 40;
let firstName = "Arunava";
let isActive = false;
// We can also declare a variable without type
let city = "Delhi";
// automatically typescript will treat as String
// If we try to assign a different value later it will throw error.
//city = 2
// Error - Type 'number' is not assignable to type 'string'
/*
    common types
    1. String which we can define in double quotes "hi" or single quote 'hi'
    2. Boolean type is either true or false
    3. We have special type called any.
    let x: any = "hello" - automatically x is assigned type as string
    -- any is recomended because it overrules the use of type script.

    Safer version of any is unknown
    let x: unknown = "hello"

    null / undefined - absence of value.

    There is also a object type where we mention the name and the value
    {name: "Arunava"}

    There is also array type which can be a string array string[] or number array[]
*/
// special type
let data = "Hello";
data = 10;
// no compiler error
let value = "test";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// = => assignment operator where we assign value to a variable.
// == => equality operator used for comparison
// === => Strict equality operator
// In Javascript 1=='1' return true. But if we want to compare the value along with the type we should use ===
// 1 === '1' in type script it will throw exception
// constant cannot be reassigned
const person = { name: "Raman" };
person.name = "Arunava";
// person = {} -> We cannot reassign constant. It will throw exception
// Union Types: It lets a variable hold more than one type. Here x can be either a number or a string
let x;
x = "Arunava";
x = 123;
// Array types
// 2 ways to declare array
let numbers = [1, 2, 3];
let names = ["Arunava", "Anandi"];
// We cannot write let names: Array<String> = ["Arunava", 12] as it should hold only string
// Tuples -> Fixed length arrays with specific type at each position
let users = ["Arunava", 40];
// Enums -> used to define a set of named constants
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let move = Direction.North;
// Object: Define object structure using types
let people = {
    name: "Arunava",
    age: 40
};
