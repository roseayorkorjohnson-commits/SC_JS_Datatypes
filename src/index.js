// TASK 1 & 2: DATATYPES AND USING TYPEOF
// JavaScript has different types of data.

// i. String (Text surrounded by quotes)
const myString ="Hello Kitty";
let myZazzy ="Alex";
let myCat ="Mittens";
let myDog ="Buddy";
let randomNo ="8"; //This is a string
let status ="true"; // This is a sting

// ii. Number (Whole numbers or decimals, no quotes)
let no1 = 8; //This is a number

// iii. Boolean (True or false logical values, no quotes)
let available = true; // This is a boolen value
available = false; // This is also a boolen value

// iv. Null (Intentional emptiness)
let empty = "";

console.log(myZazzy); //output - Alex
myZazzy ="Chairman Wontumi";
console.log(myZazzy); // output - Chairman Wontumi
let userNum = prompt("Give me number from 1 - 100:");
console.log(userNum); // output - 89
console.log(typeof(userNum)); // output - number
let myNum  = 10;
console.log(userNum + myNum); //99

// TASK 2: Use the typeof function to check data types in the console
 console.log (typeof(myDog)); // output or print: string
console.log (typeof(8)); // output or print: number


// TASK 3: SIMPLE CALCULATIONS (MATH OPERATORS)
let x = 25;
let y = 50;


// i. Addition (+)
let addNumbers = x + y;
console.log(addNumbers); // output - 75
console.log(x+y); // output - 75

// ii. Subtraction (-)
console.log(y-x); // output - 25

// iii. Multiplication (*)
let productNumbers = x * y;
console.log(productNumbers); //output - 1250

// iv. Division (/)
let divideNumbers = y/x;
console.log(divideNumbers); //output is 2

// v. Remainder using Modulo (%)
// Explaining Modulo: How many times does 3 fit into 10? It fits 3 times (which is 9), with 1 left over.
let remainder = y % x;
console.log(remainder); //output 0

x = 3;
y = 5;

remainder = y % x;
console.log(remainder); // 2
productNumbers = x * y;
divideNumbers = y/x;
remainder = y % x;



// TASK 4 & 5: CONSOLE.LOG & STRING INTERPOLATION
// Task 4: Using console.log to print basic messages
console.log("Testing our VSCode connections to the Browser Console");

// Task 5: Practice using string interpolation (backticks) to log from VS Code
console.log(`Today, we learnt how to add, substract, multiply, divide and find the remainder of 2 numbers.Given that x is ${x} and y is ${y}, the summ will be ${addNumbers}
 the difference will be ${y-x}, the product will be ${productNumbers}, the quotient will be ${divideNumbers} and the remainder will
e sum will be ${remainder}`);


            