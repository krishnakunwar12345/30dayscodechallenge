// Map,filter , reduce 
// map function:The map function is used to create a new array by applying a provided function to each element in the original array. It does not modify the original array but returns a new one
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers);

// filter function:The filter function is used to create a new array containing elements that meet a certain condition. It iterates through the original array and retains elements for which the provided function returns true
const number = [1, 2, 3, 4, 5];

const evenNumber = number.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumber);

// reduce function:The reduce function is used to accumulate values from an array into a single result. It takes a callback function and an initial accumulator value and applies the callback function to each element of the array, updating the accumulator along the way
const numb = [1, 2, 3, 4, 5];

const sum = numb.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);

console.log(sum);


// Destructuring:Destructuring is a powerful feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way. It makes working with complex data structures simpler and more expressive. Here's an overview of destructuring in JavaScript
// basic array destructuring
const digit = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, ...rest] = numbers;

console.log(first);
console.log(second); 
console.log(rest); 

// default values
const [x, y, z = 3] = [1, 2];

console.log(x);
console.log(y); 
console.log(z); 

//  basic object destructuring
const person = { firstName: 'John', lastName: 'Doe' };

// Destructuring assignment
const { firstName, lastName } = person;

console.log(firstName);
console.log(lastName); 


// The Ternary Operator:The ternary operator, also known as the conditional operator, is a concise way to write conditional statements (if-else) in JavaScript. It allows you to evaluate a condition and return one of two values based on whether the condition is true or false. The ternary operator has the following syntax
//  condition: A JavaScript expression that evaluates to either true or false.
// expressionIfTrue: The value to be returned if the condition is true.
// expressionIfFalse: The value to be returned if the condition is false.
const age = 25;
const message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

// Here's the equivalent if-else statement for the first example
const ages = 25;
let messages;

if (ages >= 18) {
  messages = "You are an adult";
} else {
  messages = "You are a minor";
}

console.log(messages);



// The Spread operator:The spread operator (...) is a powerful and versatile feature introduced in ECMAScript 6 (ES6) that allows you to manipulate and work with arrays, objects, and other iterable data structures in a more flexible way. It is used to
// Spread Elements of an Array:The spread operator can be used to create a shallow copy of an array or to merge multiple arrays into a new one
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// Spread Elements of an Object:The spread operator can also be used to create a shallow copy of an object or to merge multiple objects into a new one
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);