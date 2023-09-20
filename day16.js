// Asyn Await:async/await is a feature in JavaScript that simplifies working with asynchronous code, making it more readable and easier to manage. It's built on top of Promises and provides a more straightforward way to handle asynchronous operations
// async Function Declaration:To define an asynchronous function, you use the async keyword before the function keyword when declaring a function. For example:
async function fetchData() {
    // Asynchronous operations here
  }
  
// Pormises:Promises are a core feature of JavaScript used for managing asynchronous operations. They provide a more structured and predictable way to work with asynchronous code compared to traditional callback-based approaches. Promises are especially useful for tasks like network requests, file I/O, and other operations that may take some time to complete.
// Creating a Promise:To create a Promise, you use the Promise constructor, which takes a single argument: a function often referred to as the "executor." This function has two parameters: resolve and reject, which are also functions.

// .then .catch:In JavaScript Promises, .then() and .catch() are methods used to handle the result (fulfilled state) and errors (rejected state) of a Promise, respectively. They are part of the Promise API and are used for asynchronous programming. Here's how they work
// then():
myPromise
  .then(
    result => {
      // Handle the resolved value (success)
    },
    error => {
      // Handle the rejection reason (error) - Optional
    }
  )
  .catch(error => {
    // Handle any errors that occurred in the preceding `.then()` callbacks
  });



//   catch():
myPromise
  .then(result => {
    // Handle the resolved value (success)
  })
  .catch(error => {
    // Handle any errors in the chain or the original Promise
  });


