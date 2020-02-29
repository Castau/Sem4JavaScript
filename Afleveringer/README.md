# Period 1 Learning Goals
**Exercises done in this period**
* [Week 1](https://github.com/Castau/Sem4JavaScript/tree/master/Afleveringer/Week1)
* [Week 2](https://github.com/Castau/Sem4JavaScript/tree/master/Afleveringer/Week2)
* [Week 3](https://github.com/Castau/Sem4JavaScript/tree/master/Afleveringer/Week3)
* [Week 4](https://github.com/Castau/Sem4JavaScript/tree/master/Afleveringer/Week4)
* [Week 5](https://github.com/Castau/Sem4JavaScript/tree/master/Afleveringer/Week5)
* [learnyounode](https://github.com/Castau/Sem4JavaScript/tree/master/Afleveringer/learnyounode)

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
> ![Event loop](https://github.com/Castau/Sem4JavaScript/tree/master/Images/eventloop.gif)
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
> Unlike Java, JS Object inheritance is Prototype based. ES6 classes are just syntactic sugar to make it look similar to OOP languages like Java. Behind the scene, there’s no  class based inheritance but prototype based inheritance.
>* Class inheritance creates parent/child object taxonomies as a side-effect.
>* Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.

```typescript
abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;

    get color() { return this._color }
    set color(val: string) { this._color = val }

    public toString(): string {
        return `color: ${this.color}`;
    }
}

class Circle extends Shape {
    _radius: number;

    constructor(color: string, radius: number) {
        super(color); 
        this._radius = radius;
    }
    
    get radius() { return this._radius }
    set radius(val: number) { this._radius = val }

    get area(): number { return Math.PI * Math.pow(this._radius, 2) }
    get perimeter(): number { return 2 * this._radius * Math.PI }

    public toString(): string {
        return `color: ${this.color}, radius: ${this.radius}`;
    }
}
```
* **Explain and demonstrate, how to implement your own events, how to emit events and how to listen for such events**
> If there is no listener for the event, this code does nothing. If there are multiple listeners, they are all called, one after another, with the same arguments.
```javascript
const EventEmitter = require("events");
const numbers = process.argv.slice(2).map(nas => Number(nas))
class MyEventPublisher extends EventEmitter {
    _numbers = [];
    addNumber(number) {
        this._numbers.push(number)
        if (number % 2 === 0) {
            this.emit("even", { number })
        }
        else {
            this.emit("odd", { number })
        }
        if (number >= 100) {
            this.emit("high", { number })
        }
        else {
            this.emit("low", { number })
        }
    }
}
const publisher = new MyEventPublisher();
publisher.on("odd", (n) => console.log(`ODD: ${n.number}`))
publisher.on("even", (n) => console.log(`EVEN: ${n.number}`))
publisher.on("low", (n) => console.log(`LOW: ${n.number}`))
publisher.on("high", (n) => console.log(`HIGH: ${n.number}`))
publisher.on("high", (n) => console.log(`HIGH: ${n.number}`))
```

### ES6,7,8,ES-next and TypeScript
* **Provide examples with es-next, running in a browser, using Babel and Webpack**
> I don't understand what I'm supposed to show in this question?
> Exercises regarding babel and webpack can be found here:
* **Explain the two strategies for improving JavaScript: Babel and ES6 (es2015) + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers**
> With babel it's possible to write Javascript in ES6 or newer and have babel transpiling it to ES5 which is supported by most browsers. 
> Typescript is a highlevel language on top of javascript and also comes with a transpiler like babel. 
* **Provide a number of examples to demonstrate the benefits of using TypeScript, including, types,  interfaces, classes and generics**
```typescript
// interface and types
interface IBook {
    title: string
    readonly author: string
    published?: Date
    pages?: number
}

// class
class Book implements IBook {
    constructor(private _title: string, private _author: string, private _published: Date, private _pages: number) { };

    get title() { return this._title }
    set title(val: string) { this._title = val }

    get author() { return this._author }

    get published() { return this._published }
    set published(val: Date) { this._published = val }

    get pages() { return this._pages }
    set pages(val: number) { this._pages = val }
}

// generic function
function reverseArr<T>(array : T[]){
    return array.reverse()
}

// generic class
class DataHolder<T> {
    _t: T;
    constructor(t: T) {
        this._t = t;
    }

    get value() { return this._t }
    set value(val: T) { this._t = val }
}
```
* **Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)**
> The TC39 is made up of members who are typically browser vendors and large companies who’ve invested heavily in the web. When a new proposal is created, that proposal has to go through certain stages before it becomes part of the official specification. It’s important to keep in mind that in order for any proposal to move from one stage to another, a consensus among the TC39 must be met. This means that a large majority must agree while nobody strongly disagrees enough to veto a specific proposal. Each new proposal starts off at Stage 0 and moves up through the different stages if the members choose so. If a proposal reaches and completes the final stage, the proposal is ready for inclusion in the formal ECMAScript standard. As of 2016, a new version of ECMAScript is released every year with whatever features are ready at that time. What that means is that any Stage 4 proposals that exist when a new release happens, will be included in the release for that year.
  >* [Source](https://medium.com/free-code-camp/ecmascript-tc39-and-the-history-of-javascript-26067498feb9)

### Callbacks, Promises and async/await
* **Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:**
> A Promise represents the result of an operation that hasn't been completed yet, but will at some point in the future. An example of such an operation is the network request fetch. There is no way to determine when the response will be received. This can be problematic if other operations are dependent on the completion of fetch. Without Promises, we would have to use callbacks to deal with actions that need to happen in sequence. This isn't necessarily a problem if we there's one asynchronous action, but if we need to complete multiple asynchronous steps in sequence, callbacks become unmanageable and result in the infamous callback hell.
```javascript
function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) { 
          resolve(req.response); /* PROMISE RESOLVED */
      } else { 
          reject(Error(req.statusText)); /* PROMISE REJECTED */
      }
    };
    req.onerror = function() { reject(Error("Network Error")); };
    req.send();
  });
}
```
  * **Example(s) that demonstrate how to avoid the callback hell (“Pyramid of Doom")**
```javascript
function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    let swapiObj = {};
    fetch('https://swapi.co/api/people/' + id)
        .then(res => res.json())
        .then(data => {
            swapiObj.name = data.name;
            return data.films[0];
        })
        .then(film_url => fetch(film_url))
        .then(res => res.json())
        .then(data => {
            swapiObj['First film'] = data.title;
            return data.species[0];
        })
        .catch(err => console.log('Error: ', err))
        .finally(() =>
            console.log('Promises', JSON.stringify(swapiObj, null, '\t'))
        );
}
```
  * **Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**
```javascript
async function printNamesParallel() {
    const promise1 = fetchPerson(URL + '1');
    const promise2 = fetchPerson(URL + '2');
    (await Promise.all([promise1, promise2])).forEach(result => {
        console.log(result.name);
    });
}

```
  * **Example(s) that demonstrate how to implement our own promise-solutions**
    ```javascript
    var myPromise = new Promise(function(resolve, reject) { 
    const nameA = 'Rigmor' 
    const nameB = 'Rigmor'
    if(nameA === nameB) { 
        resolve(); 
    } else { 
        reject(); 
    }}); 

    myPromise. 
    then(function () { 
        console.log('Success'); 
    }). 
    catch(function () { 
        console.log('Some error...'); 
    }); 
    ```


  * **Example(s) that demonstrate error handling with promises**
  ```javascript
  async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    let swapiObj = {};
    try {
        const role = await fetch('https://swapi.co/api/people/' + id).then(res => res.json());
        const firstfilm = await fetch(role.films[0]).then(res => res.json());
        const firstspecie = await fetch(firstfilm.species[0]).then(res => res.json());
        const homeworld = await fetch(firstspecie.homeworld).then(res => res.json());
        swapiObj.name = role.name;
        swapiObj['First film'] = firstfilm.title;
        swapiObj['First species'] = firstspecie.name;
        swapiObj['Homeworld for Specie'] = homeworld.name;
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Async', JSON.stringify(swapiObj, null, '\t'));
    }
  
  ```
* **Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API**
>* Async/await is a new way to write asynchronous code. Previous alternatives for asynchronous code are callbacks and promises.
>* Async/await is just syntax sugar built on top of promises. It cannot be used with plain callbacks or node callbacks.
>* Async/await is, like promises, non-blocking.
>* Async/await makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.
```javascript
// Plain promise
const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })
makeRequest()

// async/await
const makeRequest = async () => {
  console.log(await getJSON())
  return "done"
}
makeRequest()
```
> Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function.
**Provide examples to demonstrate**
  * **Why this often is the preferred way of handling promises**
    >* Concise and clean, no .then, no nesting
    >* Async/await makes it finally possible to handle both synchronous and asynchronous errors with the same try/catch.
    ```javascript
    // With plain promise
    const makeRequest = () => {
        try {
            getJSON()
            .then(result => {
                const data = JSON.parse(result)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }

    // With async/await
    const makeRequest = async () => {
        try {
            const data = JSON.parse(await getJSON())
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    ```
  * **Error handling with async/await**
  ```javascript
    // Plain promises
    const makeRequest = () => {
        return callAPromise()
        .then(() => callAPromise())
        .then(() => callAPromise())
        .then(() => callAPromise())
        .then(() => callAPromise())
        .then(() => {
            throw new Error("oops");
        })
    }

    makeRequest()
        .catch(err => {
            console.log(err);
            // output
            // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
        })

    // async/await
    const makeRequest = async () => {
        await callAPromise()
        await callAPromise()
        await callAPromise()
        await callAPromise()
        await callAPromise()
        throw new Error("oops");
    }

    makeRequest()
    .catch(err => {
        console.log(err);
        // output
        // Error: oops at makeRequest (index.js:7:9)
    })

  ```
  * **Serial or parallel execution with async/await**
  ```javascript
    // serial
    const makeRequest = async () => {
        const value1 = await promise1()
        const value2 = await promise2(value1)
        return promise3(value1, value2)
    }

    //parallel
    async function printNamesParallel() {
        const promise1 = fetchPerson(URL + '1');
        const promise2 = fetchPerson(URL + '2');
        (await Promise.all([promise1, promise2])).forEach(result => {
            console.log(result.name);
        });
    }

  ```