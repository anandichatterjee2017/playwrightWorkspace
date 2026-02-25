// Function
function printHello(): void {
    console.log("Hello");
}
printHello();

function log(msg: string): void{
    console.log(msg);
}
log("Hello World")

function greet(name: string): string{
    return `Hello ${name}`;
}
let nameFunc = greet("Arunava");
console.log(nameFunc);

//name: string --> the parameter must be a string
//:string after the parantheses - the function returns a string

