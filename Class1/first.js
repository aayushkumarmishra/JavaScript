//console.log("Hello");

var myName = "Ayush Kumar Mishra";
var myAge = 22;
var iAMAyush = true;
console.log(myAge);

// 4 - type Data type in java 
console.log(typeof(myName)); // string
console.log(typeof(myAge)); // Number
console.log(typeof(iAMAyush)); // Boolean

console.log(10 + "20"); // 1020
console.log(9 - "4"); // 5 this js bug.
console.log("java" + "script"); // javascript.
console.log(" " + " "); // do not print anyThing.
console.log(" " + 0); // 0
console.log("ayush" - "mishra"); // not a number (Nan)
console.log(true + true); // true represent 1, so 1 + 1 = 2;
console.log(false + true);


//Q - 1 Difference between null and undefine.

var iAmUseless = null; // this null.
console.log(iAmUseless);
console.log(typeof(iAmUseless));

var iAmUndefine;
console.log(iAmUndefine);
console.log(typeof(iAmUndefine));

// Q -2 What is Nan?

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of Nan is Not-A-Number.

var myPhoneNumber = 8090065801;
var myName = "Ayush Mishra";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

// some example for NaN

console.log(NaN == NaN); // false - NaN yaha kuch hai hi nahi Esliye false
console.log(Number.NaN == NaN); // false
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));