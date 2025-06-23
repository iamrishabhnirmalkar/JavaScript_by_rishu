// Activity 1

var Task01 = 20;
console.log(Task01);

let Task02 = "Hello";
console.log(Task02);

// Activity 2

const Task03 = true;
console.log(Task03);

// Activity 3

let Task04str = "String";
let Task04num = 120;
let Task04bool = false;
let Task04obj = {
  task04: "this is value",
};
let Task04arr = [1, 6, 7, 5];

console.log(typeof Task04str);
console.log(typeof Task04num);
console.log(typeof Task04bool);
console.log(typeof Task04obj);
console.log(typeof Task04arr); // Object beascuse in javascript everthing is object

// Activity 4

let Task05 = 210;
console.log(Task05);
Task05 = "heloo";
console.log(Task05);

// Activity 5

const Task06 = 320;
console.log(Task06);
// Task06 = "value change"; // TypeError: Assignment to constant variable.

// Feature Request

// Task1;

let age = 25;
console.log("Value:", age, "| Type:", typeof age);

let name = "Rishabh";
console.log("Value:", name, "| Type:", typeof name);

let IsActive = false;
console.log("Value:", IsActive, "| Type:", typeof IsActive);

let notDefined = undefined;
console.log("Value:", notDefined, "| Type:", typeof notDefined);

let emptyValue = null;
console.log("Value:", emptyValue, "| Type:", typeof emptyValue);

let person = { firstName: "John", lastName: "Doe" };
console.log("Value:", person, "| Type:", typeof person);

// Array
let colors = ["red", "green", "blue"];
console.log("Value:", colors, "| Type:", typeof colors); // typeof array is also "object"

// Function
function greet() {
  return "Hello!";
}
console.log("Value:", greet, "| Type:", typeof greet);

// Symbol
let uniqueId = Symbol("id");
console.log("Value:", uniqueId.toString(), "| Type:", typeof uniqueId);

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("Value:", bigNumber, "| Type:", typeof bigNumber);

// Task2;

// For Let
let x = 10;
console.log("Initial Value of x(let)", x);
try {
  x = 400;
  console.log("Reassignment Value of x(let)", x);
} catch (error) {
  console.log("Reassignment be Error", error);
}

// For const
const y = 20;
console.log("Initial Value of y(const)", y);
try {
  y = 200;
  console.log("Reassignment Value of y(const)", y);
} catch (error) {
  console.log("Reassignment be Error", error);
}

// For var
var z = 30;
console.log("Initial Value of z(var)", z);
try {
  z = 300;
  console.log("Reassignment Value of z(var)", z);
} catch (error) {
  console.log("Reassignment be Error", error);
}
