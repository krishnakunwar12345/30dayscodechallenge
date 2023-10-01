// Difference between compiler and interpreter

/*In the context of JavaScript, which is primarily an interpreted language, there can be some confusion regarding the terms "compiler" 
and "interpreter." However, it's essential to understand that JavaScript is typically executed by an interpreter. 
Here's an explanation of the key differences between a compiler and an interpreter

Compiler:

Translation Process: A compiler is a program that translates the entire source code of a program into machine code or another lower-level language (e.g., bytecode) all at once. 
This translation happens before the program is executed.

Output: A compiler generates an output file (e.g., an executable binary or bytecode file) that can be executed directly by the computer's CPU or a virtual machine.

Execution: The compiled code is executed independently of the original source code. It does not need the source code to be present during execution.

Performance: Compiled languages often have the potential for higher performance because the translation process optimizes the code for the target platform.

Examples of languages that use compilers include C, C++, and Java (to some extent, due to bytecode).


Interpreter:
Translation Process: An interpreter reads the source code line-by-line or statement-by-statement and executes it immediately without generating an intermediate machine code or bytecode. It translates and executes code on-the-fly.

Output: There is no separate output file generated. The source code is executed directly.

Execution: An interpreter requires the source code to be present during execution. It does not produce a standalone executable.

Performance: Interpreted languages typically have a slower execution speed compared to compiled languages because they don't have the benefit of optimization that compilers provide.*/






// Js is compiler or intermediate language.
/*JavaScript (JS) is primarily an interpreted language, not a compiled language or intermediate language. 
When you write JavaScript code and run it in a web browser or a JavaScript runtime environment (e.g., Node.js), 
the code is typically executed by an interpreter.However, modern JavaScript engines, like Google's V8 engine used in Chrome and Node.js, utilize a technique called Just-In-Time (JIT) compilation. 
This means that parts of the JavaScript code are compiled into machine code right before execution to improve performance. 
This compilation occurs on-the-fly as the code is being executed, which is why JavaScript is often referred to as a "just-in-time compiled" language.*/





// Js is oops language or not
/*Yes, JavaScript (JS) is considered an object-oriented programming (OOP) language. 
It supports the fundamental principles of object-oriented programming, including:

Objects: JavaScript uses objects as its core data structure. Objects are collections of key-value pairs and can contain 
properties and methods. Objects in JavaScript are instances of classes or prototypes.

Encapsulation: JavaScript provides ways to encapsulate data and behavior within objects, allowing you to create 
self-contained modules and avoid global scope pollution.

Inheritance: JavaScript supports prototype-based inheritance, where objects can inherit properties and methods 
from other objects. This is different from classical inheritance found in languages like Java or C++, but it is a form of inheritance nonetheless.

Polymorphism: JavaScript allows you to create functions and methods that can work with different types of objects, 
achieving polymorphism through dynamic typing and duck typing.

Abstraction: You can create abstract data types and abstract behavior by defining object constructors or classes.


Additionally, modern JavaScript introduced class syntax (ES6) that provides a more structured and familiar way to define 
and work with classes and objects, making JavaScript's support for OOP more apparent and aligning it with the classical class-based OOP paradigm:*/

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
  }
  
  const person = new Person("Krishna", "Kunwar");
  person.sayHello();

/*So, yes, JavaScript is indeed an object-oriented programming language, and you can use OOP principles to 
structure and organize your code in JavaScript.*/
