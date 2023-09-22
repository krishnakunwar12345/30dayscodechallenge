// How js is executed:JavaScript (JS) is executed in web browsers and other environments through a two-step process: parsing and execution. Here's a simplified overview of how JavaScript code is executed
// Parsing (Compilation):When a web page containing JavaScript is loaded, the browser's JavaScript engine performs the following steps:

// Tokenization and Lexical Analysis: The JavaScript code is broken down into tokens, which are the smallest units of the language (e.g., keywords, variables, operators).

// Parsing: The tokens are organized into a syntax tree (also known as the Abstract Syntax Tree or AST) based on the rules of the JavaScript language. This tree represents the structure of the code, including statements and expressions.

// Static Analysis (Optional): Some JavaScript engines perform additional static analysis to optimize code execution. For example, they might identify and optimize parts of the code that can be executed faster.

// Bytecode Generation (Optional): In some cases, the JavaScript engine may convert the parsed code into an intermediate representation called bytecode for faster execution.

// Execution:Once the code is parsed, the JavaScript engine executes it line by line, following these general steps:

// Global Scope: The JavaScript engine starts executing code in the global scope. Global variables and functions are defined here.

// Function and Block Scopes: When functions are called or blocks of code are entered (e.g., inside loops or conditional statements), local scopes are created. These local scopes have access to variables in their parent scopes (lexical scoping).

// Variable Declarations: Variables declared with var are hoisted, meaning they are moved to the top of their containing function or scope and initialized with undefined. Variables declared with let and const are also hoisted but are not initialized until their actual declaration is reached.

// Execution Stack (Call Stack): JavaScript uses an execution stack (call stack) to keep track of the order of function calls. When a function is called, a new frame is added to the stack. When the function returns, its frame is removed.

// Event Loop (in Browser): In a browser environment, JavaScript also handles asynchronous operations like DOM events, HTTP requests, and timers. The event loop is responsible for managing these asynchronous tasks and executing callback functions when events occur.

// Execution Context: For each function call, an execution context is created. This context contains information about the function's scope, local variables, and the value of this.

// Garbage Collection: JavaScript engines have automatic garbage collection mechanisms to reclaim memory from objects that are no longer in use.

// Error Handling: Errors can occur during execution. JavaScript provides mechanisms like try...catch to handle and recover from errors gracefully.




// How Call stack works:The call stack is a fundamental concept in JavaScript and many other programming languages. It's a data structure that keeps track of the function calls that are currently executing or waiting to be executed. Understanding how the call stack works is crucial for understanding the flow of program execution
// Function Calls and the Call Stack:When a JavaScript program starts running, the first function to be executed is typically the global function (the main program). As functions are called within the program, each function call is added to the call stack.

// Push and Pop Operations:Whenever a function is called, a new frame representing that function call is pushed onto the call stack. This frame contains information about the function's local variables, parameters, and the point in the code where the function was called.

// When a function returns (either by reaching the end of its code or by encountering a return statement), its frame is popped from the call stack, indicating that the function has completed its execution.

// Execution Order:The call stack enforces a Last-In, First-Out (LIFO) order. This means that the most recently called function is the one that gets executed first and completes its execution before the previous function call. When the most recent function returns, the execution proceeds to the function that was called before it, and so on.

// This LIFO order is important because it ensures that the program executes functions in the expected order and that each function has access to its own set of local variables.
function add(a, b) {
    return a + b;
}

function multiply(x, y) {
    return x * y;
}

function calculate() {
    const result1 = add(2, 3);
    const result2 = multiply(result1, 4);
    return result2;
}

const finalResult = calculate();
// Here's how the call stack would look during the execution of this code:

// Initially, the global context is pushed onto the call stack.
// When calculate() is called, its frame is pushed onto the stack.
// Inside calculate(), add() is called, so its frame is pushed onto the stack.
// After add() returns, its frame is popped.
// Then, multiply() is called inside calculate(), so its frame is pushed.
// After multiply() returns, its frame is popped.
// Finally, calculate() returns, and its frame is popped.
// The call stack is now empty, and the program execution is complete.




// How call stack help js code to get executed:The call stack plays a critical role in JavaScript code execution by managing the order of function calls and ensuring that the program executes in a structured and predictable manner. Here's how the call stack helps JavaScript code get executed
// Function Invocation and Execution Order:When your JavaScript code is executed, it often involves calling functions. These functions may be your own custom functions or built-in functions. The call stack keeps track of the order in which these functions are called and executed.

// Managing Function Calls:As functions are called, a new frame representing each function call is pushed onto the call stack. This frame contains information about the function's local variables, parameters, and the point in the code where the function was called.

// Execution in a LIFO Order:The call stack enforces a Last-In, First-Out (LIFO) order. This means that the most recently called function is the one that gets executed first and completes its execution before the previous function call. When a function returns, its frame is popped from the call stack, allowing the next function in line to execute.

// Scope and Variable Access:The call stack also manages function scope. Each function has access to its own set of local variables and parameters, and these variables are stored in the corresponding function's frame on the call stack. This ensures that variables are isolated to their respective functions.

// Function Nesting and Recursion:JavaScript allows functions to be nested within each other, and recursive functions can call themselves. The call stack keeps track of the nesting and recursion by stacking frames for each function call. When a function finishes execution, its frame is popped, and the program returns to the previous context.

// Error Handling:If an error occurs within a function and is not caught using a try...catch block within that function, the error propagates up the call stack. The call stack unwinds, removing frames until it finds a suitable error handler (such as a catch block) or until it reaches the global context. This helps in identifying where errors occurred in the code.

// Completion of Program Execution:The call stack continues to pop frames as functions return, and ultimately, when the main program or entry point finishes execution, the call stack becomes empty, indicating that the program has completed.







