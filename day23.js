/* What is threading-JavaScript is a single-threaded language because while running code on a single thread, 
it can be really easy to implement as we don't have to deal with the complicated scenarios that arise in the multi-threaded environment like a deadlock. 
Since JavaScript is a single-threaded language, it is synchronous in nature */

	console.log('A');
	
	setTimeout(() => {
		console.log('B');
	}, 3000);
		
	console.log('C');


/* What is the difference between multi threading and single threaded

Single-Threading:JavaScript is inherently single-threaded. This means that it runs in a single execution thread, often referred to as the "main thread" or the "UI thread."
All JavaScript code, including event handling, DOM manipulation, and other tasks, runs sequentially in this single thread.
Blocking operations (e.g., long-running computations or synchronous I/O operations) can make the entire application unresponsive because they block the main thread.



Multi-Threading (Web Workers):While JavaScript itself is single-threaded, you can achieve multi-threading using Web Workers, which are a way to run JavaScript code in separate threads.
Web Workers allow you to perform computationally intensive or long-running tasks in the background without blocking the main thread.
Each Web Worker runs in its own isolated thread, separate from the main thread, which means they can execute code concurrently with the main thread.
Web Workers communicate with the main thread using a message-passing mechanism, allowing them to exchange data and results.


Here are some key points of comparison:

Concurrency: In a single-threaded environment, tasks are executed sequentially, while in a multi-threaded environment with Web Workers, tasks can be executed concurrently.

Responsiveness: Single-threaded JavaScript can become unresponsive if a task blocks the main thread, whereas multi-threaded JavaScript with Web Workers can keep the main thread responsive because time-consuming tasks are offloaded to separate threads.

Isolation: Each Web Worker runs in an isolated environment with its own JavaScript context, variables, and memory. This isolation helps prevent conflicts and ensures data safety.

Communication: Single-threaded JavaScript typically communicates directly with events and callbacks. In contrast, multi-threaded JavaScript communicates with Web Workers through message passing.
It's important to note that Web Workers are not a general solution for all types of concurrency needs, and they come with some limitations. For example, they cannot directly access the DOM or shared data with other workers (except through message passing). They are most effective for CPU-bound or computationally intensive tasks where parallelism is beneficial
In summary, JavaScript is single-threaded by default, but you can achieve multi-threading and concurrency using Web Workers, which allow you to run code in separate threads to improve performance and responsiveness in web applications*/



/*Js is multithreaded or single threaded.
JavaScript itself is single-threaded. This means that JavaScript code runs in a single execution thread, 
often referred to as the "main thread." All JavaScript operations, including event handling, DOM manipulation, 
and other tasks, are processed sequentially in this single thread.

Here's a simple example that demonstrates JavaScript's single-threaded nature*/

console.log("Start the program");
//Simulate a time-consuming operation
for(let i=0; i < 1000000000; i++){
    // This loop wiil block the main thread
}
console.log("End of the program");


/*In this example, a loop is used to simulate a time-consuming operation. 
When you run this code, you'll notice that it first logs "Start of the program," then it runs the loop, and finally, 
it logs "End of the program." During the loop execution, the program is effectively blocked, and it doesn't respond to 
any other events or user interactions because JavaScript is single-threaded, and the main thread is busy with the loop.*/

/*To work with concurrency or parallelism in JavaScript, you can use features like Web Workers, 
which allow you to run JavaScript code in separate threads. 
Here's a very simplified example using a Web Worker*/
  
//Create an HTML file (e.g., index.html):

/*<!DOCTYPE html>
<html>
  <head>
    <title>Web Worker Example</title>
  </head>
  <body>
    <h1>Web Worker Example</h1>
    <button id="startButton">Start Worker</button>
    <p id="result"></p>

    <script>
      const startButton = document.getElementById("startButton");
      const resultElement = document.getElementById("result");

      startButton.addEventListener("click", () => {
        const worker = new Worker("worker.js");

        worker.postMessage("Hello from the main thread!");

        worker.onmessage = (event) => {
          resultElement.textContent = event.data;
          worker.terminate();
        };
      });
    </script>
  </body>
</html>*/


//Create a JavaScript file named worker.js:
self.onmessage = (event) => {
    const messageFromMain = event.data;
    const result = `Worker received: ${messageFromMain}`;
    self.postMessage(result);
  };


/* In this example, a Web Worker is used to execute code in a separate thread. 
When you click the "Start Worker" button in the web page, the Web Worker processes the message in parallel with the main 
thread, demonstrating multi-threading behavior*/





  