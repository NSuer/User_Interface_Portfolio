// 1. Write the following functions as arrow functions:

// A.
// function addTwoNumbers(a, b){
//       return a+b; 
// }
// Answer:
addTwoNumbers = (a, b) => a+b;

// B. 
// function stringLength( myStr ){
//     if(myStr.length < 10)
//         return "short";
//     return "long";
// }
// Answer:
stringLength = myStr => myStr.length < 10 ? "short" : "long";

// 2.  What is this arrow functions doing?  
// let fn = (a,b) => { a>b ? console.log(a) : console.log(b) }
// Answer: This arrow function is checking if a is greater than b. 
// If a is greater than b, it will print a. Else, it will print b.

// 3. Write an example to demonstrate the use of the map function on an array.  
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(x => x * x);
console.log(newArr); // Output: [1, 4, 9, 16, 25]

// AI Use: I had github copilot turned on while writing this. I didn't really use it though.