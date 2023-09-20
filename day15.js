// // What is node js
// // Node.js is an open-source, server-side runtime environment that allows you to run JavaScript code on the server.
// //  It is built on the V8 JavaScript engine, which is the same engine that powers the Google Chrome web browser. 
// //  Node.js enables developers to use JavaScript for both client-side and server-side programming, 
// //  creating a unified language for full-stack development.



// // How node js works.
// V8 JavaScript Engine: Node.js is built on the V8 JavaScript engine, which is developed by Google. V8 compiles JavaScript code to machine code for faster execution. Node.js utilizes V8 to execute JavaScript code on the server.

// Event Loop: Node.js operates on a single-threaded event loop, which is at the core of its non-blocking, asynchronous nature. The event loop continuously checks for events (e.g., I/O operations, timers, and callbacks) and executes them in a non-blocking manner. This allows Node.js to efficiently handle multiple concurrent operations without blocking the execution of other code.

// Non-Blocking I/O: When Node.js encounters an I/O operation, such as reading a file or making a network request, it doesn't block the entire process. Instead, it initiates the operation and registers a callback function to be executed when the operation completes. This allows Node.js to continue executing other code while waiting for I/O operations to finish.

// Callback Functions: Callback functions are a fundamental part of Node.js. They are used to handle the results of asynchronous operations. When an operation is complete, the callback function is called to process the result.

// NPM (Node Package Manager): Node.js comes with NPM, a package manager that provides access to a vast ecosystem of open-source libraries and modules. Developers can easily import and use these packages in their Node.js applications.

// Modules: Node.js uses a module system that allows you to break your code into reusable modules. You can create your own modules and also use built-in modules provided by Node.js.

// Event Emitters: Node.js includes an EventEmitter class that enables the creation of custom events and event listeners. This is useful for building real-time applications and handling custom event-driven scenarios.

// Web Servers: Node.js can be used to create web servers. Developers commonly use frameworks like Express.js to build RESTful APIs and web applications. Node.js's non-blocking nature makes it suitable for handling a large number of concurrent HTTP requests efficiently.

// Scalability: Node.js is known for its ability to scale horizontally, allowing developers to add more instances of Node.js to distribute the load in a cluster of servers.


// // Architecture of node js.
// V8 JavaScript Engine:

// At the core of Node.js is the V8 JavaScript engine, developed by Google. It compiles JavaScript code into machine code for execution, making JavaScript run efficiently and quickly.
// Event Loop:

// Node.js operates on a single-threaded event loop, which is central to its architecture. This event loop continuously checks for events and executes corresponding callback functions. Events can include I/O operations, timers, and user-defined events.
// Libuv:

// Node.js uses Libuv, a library written in C, to handle asynchronous I/O operations. Libuv provides a platform-independent abstraction of I/O operations and is responsible for managing the event loop, timers, and thread pool for handling certain operations.
// Callback Queue:

// When asynchronous operations (such as reading a file or making a network request) are initiated, Node.js registers callback functions to be executed when those operations complete. These callback functions are placed in a callback queue.
// Event Loop Phases:

// The event loop in Node.js consists of several phases:
// Timers: This phase handles timer-related callbacks.
// Pending Callbacks: Callbacks from previous I/O operations that were deferred.
// Poll: This phase checks for new I/O events and executes their callbacks.
// Check: This phase is for callbacks that are scheduled by setImmediate.
// Close Callbacks: This phase is for some close event callbacks.
// Event Queue:

// When an event is fired or a timer expires, the associated callback function is placed in the event queue. The event loop checks this queue and executes the callback functions in a non-blocking manner.
// Non-Blocking I/O:

// Node.js performs I/O operations in a non-blocking manner. When an I/O operation is initiated, Node.js doesn't wait for it to complete but instead registers a callback function and continues executing other code. When the I/O operation is finished, the callback is executed.
// Modules:

// Node.js uses a module system that allows you to break your code into reusable modules. You can create your own modules and also use built-in modules provided by Node.js.
// npm (Node Package Manager):

// Node.js comes with npm, a package manager that allows you to easily install, manage, and share libraries and modules created by the community.
// Web Servers:

// Node.js can be used to create web servers. Developers often use frameworks like Express.js to build RESTful APIs and web applications. Node.js's non-blocking nature makes it suitable for handling a large number of concurrent HTTP requests efficiently.
