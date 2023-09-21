// // ES6 Features:ES6, also known as ECMAScript 2015, introduced a significant set of new features and enhancements to the JavaScript programming language. These features have become an integral part of modern JavaScript development. Here are some of the key ES6 features
// Let and Const Declarations: let and const provide block-level scoping for variables, which helps avoid issues with variable hoisting.

// Arrow Functions: Arrow functions offer a concise syntax for defining anonymous functions, with implicit return for single expressions.

// Template Literals: Template literals allow for multiline strings and string interpolation using backticks (`).

// Default Parameters: Default parameter values can be set for function parameters, simplifying function definitions.

// Destructuring Assignment:Destructuring enables you to extract values from arrays and objects into individual variables.

// Spread and Rest Operators: The spread (...) operator can be used to spread elements of an array or object, while the rest operator gathers elements into an array.

// Classes:ES6 introduced a more structured way to define classes in JavaScript, making object-oriented programming easier.

// Modules:ES6 introduced a native module system for organizing code into reusable modules.

// Promises:Promises provide a cleaner and more predictable way to handle asynchronous operations, improving upon callback hell.

// Async/Await:The async and await keywords simplify asynchronous code and make it look more synchronous.




// Loops in js ( for , for in , for of , forEach )
// for Loop:The for loop is a fundamental looping construct that iterates over a range of values or the elements of an array
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// for...in Loop:The for...in loop is used to iterate over the enumerable properties of an object, including those inherited from its prototype chain.
const person = {
    name: 'krishna',
    age: 23,
  };
  
  for (const key in person) {
    console.log(key, person[key]);
  }
// Note: It's generally not recommended to use for...in with arrays, as it can iterate over non-index properties as well  
    

// for...of Loop:The for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It provides a simpler and more concise syntax compared to traditional for loops
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}


// forEach Method:The forEach method is available on arrays and is used to iterate over the elements of an array. It takes a callback function as an argument
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
// The forEach method is particularly useful when you want to perform an action on each element of an array without the need for manual indexing
 
// These are the most important question for interview perspective as well development perspective






