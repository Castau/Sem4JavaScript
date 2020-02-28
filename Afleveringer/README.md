# Period 1 Learning Goals

### Explain and Reflect:
Explain the differences between Java and JavaScript and Java and node. Topics you could include:
  * **That Java is a compiled language and JavaScript a scripted language**
    > Scripting languages are interpreted within another program. JavaScript is embedded within a browser and interpreted by that browser.
    > Java is compiled to bytecode, which is then interpreted and recompiled at runtime  
  * **Java is both a language and a platform**
  > Java is a OOP language. The Java Virtual Machine is a platform that provides a managed runtime environment which enables the compiled Java-programs to run on any OS, as JVM is platform-independent. 
  * **General differences in language features**
  > Compiled vs. Interpreted. Java is considered a compiled programming language. JavaScript is considered an interpreted scripting language. The difference is in the implementation: Java is compiled into bytecode and run on a virtual machine, whereas JavaScript can be interpreted directly by a browser in the syntax it is written (or minified)
  > Static vs Dynamic Type Checking. Java uses static type checking, where the type of a variable is checked at compile-time. JavaScript uses dynamic typing, where type safety is verified at runtime. The primary advantage of static type checking is that type errors are caught early in development, and because the compiler knows exactly what data types are being used, code typically executes faster or uses less memory. The primary advantage of dynamic type checking is a simpler language with shorter declarations.
  > Concurrency. The ability to handle the execution of several instruction sequences at the same time is handled very differently between Java and JavaScript. Java makes use of multiple threads to perform tasks in parallel. JavaScript, particularly as it exists as Node.js in server-side applications, handles concurrency on one main thread of execution via a queue system called the event loop, and a forking system called Node Clustering. For most use-cases, both methods work just fine, but Java is generally faster because thread to thread memory sharing much faster than interprocess communication (IPC).
  > Class Based vs Prototype Based. Java follows class based inheritance—a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class (one of its members). In JavaScript, inheritance is prototypal—all objects can inherit directly from other objects. Hierarchy is accomplished in JavaScript by assigning an object as a prototype with a constructor function.
  * **Blocking vs. non-blocking**
  > Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn't block execution. Blocking code execute synchronously and non-blocking code execute asynchronously. 
* Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
> Node.js is a Javascript runtime It's evented asynchronous non-blocking I/O build ontop of V8. The non-blocking I/O the best way to do I/O. This is based on an event loop and using asynchronous callbacks. It's a low level highly performant platform for doing any kind of I/O without having to write the entire thing in C from scratch. And it scales very well due to the non-blocking I/O. You want to use Node.js if you want to write highly scaling and efficient applications using non-blocking I/O whilst still having a high level scripting language available. Node.js’ package ecosystem, npm (Node package manager), is the largest ecosystem of open source libraries in the world. Npm has packages that can be used in applications to make the development faster and efficient.
* **Explain about the Event Loop in JavaScript, including terms like: blocking, non-blocking, event loop, callback que and "other" API's Make sure to include why this is relevant for us as developers**
> ![Alt Text](insert gif)
> Javascript can only do one thing at one time, since Javascript is single-threaded language. All callbacks and asynchronous calls are handled by the web APIs or in node, the C++ APIs. This means that the code is put on the stack and executed, the callback is sent of to the APIs and the code can continue to run since the stack is clear. When the code handed to the API completes, it’s pushed to the stack queue. The event loop look at the stack and look at the task queue. If the stack is empty it takes the first thing on the queue and pushes it on to the stack which effectively run it. 
* **Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)**
>A Javascript engine is a program that executes Javascript code. The first Javascript engines were only interpreters (a program that directly executes code without requiring them previously to have been compiled into a machine language), but all relevant modern engines utilize just-in-time compilation (ia way of executing code that involves compilation during execution of a program – at run time – rather than before execution) for improved performance. In a browser, the Javascript engine runs in concert with the rendering engine via the Document Object Model. The use of Javascript engines is not limited to browsers. The Chrome V8 engine is a core component of the Node.js runtime system.
>* V8 from Google is the most used JavaScript engine
>* SpiderMonkey is developed by Mozilla for use in Firefox
>* JavaScriptCore is Apple's engine for its Safari browser
>The Javascript engine works inside an environment, which provides additional features that can be used at runtime. Javascript code is executed in a single thread. But, it doesn’t mean that the whole Javascript runtime environment works in a single thread. The thread pool exists in Javascript runtime. Typically the runtime system will have some responsibility for setting up and managing the stack and heap, and may include features such as garbage collection, threads or other dynamic features built into the language.
>* Chrome runtime enviorment
>* Node.js runtime environment
* **Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises**
> Babel is a transpiler. It can translate all kinds of high version ECMAScript into ES5, which is more widely supported by browsers (especially older versions). It's main job is to turn unsupported or cutting-edge language features into ES5. Webpack is, among other things, a dependency analyzer and module bundler. The general concept is that Webpack packages modules with complex dependency relationships into bundles. When webpack processes dependencies, it must turn everything into javascript because webpack works on top of javascript. As a result, it uses different loaders to translate different types of resources/code into javascript. When we need ES6 or ES7 features, we use babel-loader to accomplish this.


### Explain using sufficient code examples the following features in JavaScript (and node)
* **Variable/function-Hoisting**
> Hoisting is the default behaviour, all declarations are moved to the top of the scope (script or function). Assignments are not moved. Because of this, all variable- and value declarations and assignments should be kept together, preferably at the top of the current scope. Functions are hoisted completely. Variables declared with the let keyword can have Block Scope, which means that variables declared inside a block {} can not be accessed from outside the block, unlike var. let and const variables are not hoisted.
* **`this` in JavaScript and how it differs from what we know from Java/.net**
> In JavaScript 'this' refers to different values depending on where it is used: In a method (a function with an object associated with it), 'this' refers to the owner object. Alone, 'this' refers to the global object. In a function (no object is associated with it), 'this' refers to the global object. In an event, 'this' refers to the element that received the event. In Java, 'this' refers to the current instance object on which the method is executed. All methods are associated with an object in Java.
* **Function Closures and the JavaScript Module Pattern**
> A closure is a function having access to the parent scope, even after the parent function has closed.
```javascript
let add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();
```
> The variable add is assigned the return value of a self-invoking function. The self-invoking function only runs once. It sets the counter 0, and returns a function expression.This way add becomes a function that can access the counter in the parent scope.The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

> JavaScript Module Pattern relies on the next part (IIFE). In stead of using it only on functions, we can create an entire module with private and public functions. 
```javascript
var Module = (function () {
    var privateMethod = function () {
        // private code
    };
    return {
    publicMethod: function () {
      // I can call privateMethod()
    }
  };
})();

Module.publicMethod();
```

* **Immediately-Invoked Function Expressions (IIFE)**
> Immediately-Invoked Function Expressions (IIFE), pronounced "iffy", are a common JavaScript pattern that executes a function instantly after it's defined. Developers primarily use this pattern to ensure variables are only accessible within the scope of the defined function
```javascript
(function() {
    // Code....
})()
```
* **User-defined Callback Functions (writing your own functions that take a callback)**
```javascript
function add(n1, n2) {
    return n1 + n2;
}

let sub = function (n1, n2) {
    return n1 - n2
}

let calculate = function (n1, n2, callback) {
    return `Result = ${callback(n1, n2)}`;
};

calculate(5, 8, add) // returns Result = 12 
```
* **Explain the methods `map()`, `filter()` and `reduce()`**
> Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function.
> The map() method is used for creating a new array from an existing one, applying a function to each one of the elements
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]
```
> The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array.
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]
```
> The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array. The callback argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.
>* accumulator - the returned value of the previous iteration
>* currentValue - the current item in the array
>* index - the index of the current item
>* array - the original array on which reduce was called
>* initialValue - this is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10
```
* **Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)**
```javascript
// main.js
const mymodule = require('./mymodule.js')
const dir = process.argv[2]
const filter = process.argv[3]

mymodule(dir, filter, function (error, list) {
  if (error) return console.log(error);
  list.forEach(function (file) {
	console.log(file)
  })
})
..............
// mymodule.js 
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filter, callback) {
  fs.readdir(dir, function (error, list) {
	if (error) return callback(error);
	list = list.filter(function (file) {
	  return path.extname(file) === '.' + filter
	})
	callback(null, list)
  })
}
```
* **Provide examples and explain the es2015 features: `let`, `arrow functions`, `this`, `rest parameters`, `destructuring objects` and `arrays`, `maps`, `sets` etc**
>  * Variables declared with the let keyword can have Block Scope, which means that variables declared inside a block {} can not be accessed from outside the block, unlike var. let and const variables are not hoisted.
```javascript
function func(numb) {
    let temp = 17;
    return temp + numb;
}
// temp is only accessible in the function-scope
```
```javascript
// ES5
var multiply = function(a, b) {
  return a * b;
};
// ES6
const multiply = (a, b) => { return a * b };
```
> In JavaScript 'this' refers to different values depending on where it is used: In a method (a function with an object associated with it), 'this' refers to the owner object. Alone, 'this' refers to the global object. In a function (no object is associated with it), 'this' refers to the global object. In an event, 'this' refers to the element that received the event.
> The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
```javascript
function sum(...theArgs) { //.....

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
```
* **Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6**
* **Explain and demonstrate, how to implement your own events, how to emit events and how to listen for such events**

### ES6,7,8,ES-next and TypeScript
* **Provide examples with es-next, running in a browser, using Babel and Webpack**
* **Explain the two strategies for improving JavaScript: Babel and ES6 (es2015) + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers**
* **Provide a number of examples to demonstrate the benefits of using TypeScript, including, types,  interfaces, classes and generics**
* **Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)**

### Callbacks, Promises and async/await
* **Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:**
  * **Example(s) that demonstrate how to avoid the callback hell (“Pyramid of Doom")**
  * **Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**
  * **Example(s) that demonstrate how to implement our own promise-solutions**
  * **Example(s) that demonstrate error handling with promises**
* **Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API**
**Provide examples to demonstrate**
* **Why this often is the preferred way of handling promises**
* **Error handling with async/await**
* **Serial or parallel execution with async/await**