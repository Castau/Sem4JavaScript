# Period 1 Learning Goals

### Explain and Reflect:
* Explain the differences between Java and JavaScript and Java and node. Topics you could include:
  * That Java is a compiled language and JavaScript a scripted language
    > Scripting languages are interpreted within another program. JavaScript is embedded within a browser and interpreted by that browser.
    > Java is compiled to bytecode, which is then interpreted and recompiled at runtime  
  * Java is both a language and a platform
  > Java is a OOP language. The Java Virtual Machine is a platform that provides a managed runtime environment which enables the compiled Java-programs to run on any OS, as JVM is platform-independent. 
  * General differences in language features.
  > Compiled vs. Interpreted. Java is considered a compiled programming language. JavaScript is considered an interpreted scripting language. The difference is in the implementation: Java is compiled into bytecode and run on a virtual machine, whereas JavaScript can be interpreted directly by a browser in the syntax it is written (or minified)
  > Static vs Dynamic Type Checking. Java uses static type checking, where the type of a variable is checked at compile-time. JavaScript uses dynamic typing, where type safety is verified at runtime. The primary advantage of static type checking is that type errors are caught early in development, and because the compiler knows exactly what data types are being used, code typically executes faster or uses less memory. The primary advantage of dynamic type checking is a simpler language with shorter declarations.
  > Concurrency. The ability to handle the execution of several instruction sequences at the same time is handled very differently between Java and JavaScript. Java makes use of multiple threads to perform tasks in parallel. JavaScript, particularly as it exists as Node.js in server-side applications, handles concurrency on one main thread of execution via a queue system called the event loop, and a forking system called Node Clustering. For most use-cases, both methods work just fine, but Java is generally faster because thread to thread memory sharing much faster than interprocess communication (IPC).
  > Class Based vs Prototype Based. Java follows class based inheritance—a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class (one of its members). In JavaScript, inheritance is prototypal—all objects can inherit directly from other objects. Hierarchy is accomplished in JavaScript by assigning an object as a prototype with a constructor function.
  * Blocking vs. non-blocking
  > Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn't block execution. Blocking code execute synchronously and non-blocking code execute asynchronously. 
* Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
* Explain about the Event Loop in JavaScript, including terms like: blocking, non-blocking, event loop, callback que and "other" API's Make sure to include why this is relevant for us as developers.
> ![Alt Text](insert gif)
> Javascript can only do one thing at one time, since Javascript is single-threaded language. All callbacks and asynchronous calls are handled by the web APIs or in node, the C++ APIs. This means that the code is put on the stack and executed, the callback is sent of to the APIs and the code can continue to run since the stack is clear. When the code handed to the API completes, it’s pushed to the stack queue. The event loop look at the stack and look at the task queue. If the stack is empty it takes the first thing on the queue and pushes it on to the stack which effectively run it. 
* Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)
* Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises.

### Explain using sufficient code examples the following features in JavaScript (and node)
* Variable/function-Hoisting
* `this` in JavaScript and how it differs from what we know from Java/.net.
* Function Closures and the JavaScript Module Pattern
* Immediately-Invoked Function Expressions (IIFE)
* User-defined Callback Functions (writing your own functions that take a callback)
* Explain the methods `map()`, `filter()` and `reduce()`
* Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)
* Provide examples and explain the es2015 features: `let`, `arrow functions`, `this`, `rest parameters`, `destructuring objects` and `arrays`, `maps`, `sets` etc.
* Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
* Explain and demonstrate, how to implement your own events, how to emit events and how to listen for such events

### ES6,7,8,ES-next and TypeScript
* Provide examples with es-next, running in a browser, using Babel and Webpack
* Explain the two strategies for improving JavaScript: Babel and ES6 (es2015) + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
* Provide a **number of examples** to demonstrate the benefits of using TypeScript, including, types,  interfaces, classes and generics
* Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

### Callbacks, Promises and async/await
* Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:
  * Example(s) that demonstrate how to avoid the callback hell (“Pyramid of Doom")
  * Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
  * Example(s) that demonstrate how to implement our own promise-solutions.
  * Example(s) that demonstrate error handling with promises
* Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
* Provide examples to demonstrate 
  * Why this often is the preferred way of handling promises
  * Error handling with async/await
  * Serial or parallel execution with async/await.