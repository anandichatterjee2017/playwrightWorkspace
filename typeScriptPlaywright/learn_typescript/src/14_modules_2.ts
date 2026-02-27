import { EmployeeTeam, adding, something } from "./14_modules_1";

const p1 = new EmployeeTeam("Arunava",30);
p1.welcome();
console.log(p1.greet());
let final = p1.add(10,20);
console.log(final)

adding(10,20);
console.log(something);