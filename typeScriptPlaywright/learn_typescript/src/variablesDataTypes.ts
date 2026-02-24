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
let age: number = 40
let firstName: string = "Arunava"
let isActive : boolean = false

// We can also declare a variable without type
let city = "Delhi"
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

