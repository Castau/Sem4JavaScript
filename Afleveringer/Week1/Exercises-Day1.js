// a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a 
// callback as the second and returns a new (filtered) array according to the code provided in the callback
// (that is with the same behaviour as the original filter method).
// Test the method with the same array and callback as in the example with the original filter method.

const nums = [...Array(101).keys()];

function myFilter(array, callback) {
    let resultarray = [];
    array.forEach(item => {
        if (callback(item)) resultarray.push(callback(item));
    });
    return resultarray;
}

const testcallback1 = item => {
    if (item < 26) {
        return item;
    }
};

console.log('my filter implementation', myFilter(nums, testcallback1));
console.log('real filter implementation', nums.filter(item => testcallback1(item))
);

// b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides 
// the same functionality as calling the existing map method on an array.
// Test the method with the same array and callback as in the example with the original map method.

function myMap(array, callback) {
    let resultarray = [];
    array.forEach(item => {
        resultarray.push(callback(item));
    });
    return resultarray;
}

const testcallback2 = item => {
    return item * 10;
};

console.log('my map implementation', myMap(nums, testcallback2));
console.log('real map implementation', nums.map(item => testcallback2(item)));


// 3) Using the Prototype property to add new functionality to existing objects
// Create a new version of the two functions (without the array argument) 
// which you should add to the Array prototype property so they can be called on any array as sketched below:
// var names = ["Lars", "Peter", "Jan", "Bo"];
// var newArray = names.myFilter(function (name) { … });


Array.prototype.myFilterV2 = function (callback) {
    let resultarray = [];
    this.forEach(element => {
        if (callback(element)) resultarray.push(element);
    });
    return resultarray;
}

Array.prototype.myMapV2 = function (callback) {
    let resultarray = [];
    this.forEach(element => {
        resultarray.push(callback(element));
    });
    return resultarray;
}

console.log('prototype filter', nums.myFilterV2(testcallback1));
console.log('prototype map', nums.myMapV2(testcallback2));


// var all = ["Lars", "Peter", "Jan", "Bo"];
// a) Use join to create a single string from all, with names: comma -, space.and  # - separated.
// Now let’s create our own reducer functions(see here for info).
// b) Given this array: var numbers = [2, 3, 67, 33];
// Create a reducer function that will return the sum(105) of all values in numbers
// c) Given this array:
// let members = [
//     { name: "Peter", age: 18 },
//     { name: "Jan", age: 35 },
//     { name: "Janne", age: 25 },
//     { name: "Martin", age: 22 },
// ]
// Create a reducer function that will return the average age of all members.
// d) Imagine you were to create a system that could count votes for the presidential election in USA.
// Given this array of votes:
// var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
// Create a reduce function that will return a single object like { Clinton: 3, Trump: 4, None: 1 }

// a
let all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(','));
console.log(all.join(' '));
console.log(all.join('#'));

// b
const numbers = [2, 3, 67, 33];

let result = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(result);

// c
let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];

let ageaverage = members.reduce((total, member, index, array) => {
    total = total + member.age;
    if (index === array.length - 1) {
        return total / array.length;
    }
    return total;
}, 0);

console.log(ageaverage);

// d
let votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

let votecount = votes.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) accumulator[currentValue] = 1;
    else accumulator[currentValue] += 1;
    return accumulator;
}, {});

console.log(votecount);

// Hoisting
// Implement at least two examples to illustrate that:
// Function declarations are completely hoisted
// var declarations are also hoisted, but not assignments made with them

hoistedvariable = 87;
console.log(hoistedvariable);

var resultofhoistedfunction = hoistedfunction(hoistedvariable);
console.log(resultofhoistedfunction);

// Declarations
function hoistedfunction(num) {
    return num + 1;
}

var hoistedvariable;

// this in JavaScript
// Implement at least three examples to illustrate how this in 
// JavaScript differs from what we know from Java. One of the examples should 
// include an example of explicit setting this using either call(), apply() or bind().


// 'this' refers to the owner object, someobj
// the function is a method with an object associated
let someobj = {
    name: "Hattemager",
    somefunction: function (newname) {
        this.name = newname;
    }
}
console.log(someobj.name);
someobj.somefunction('Fiskemager');
console.log(someobj.name);

// 'this' refers to the global object (module.exports in node.js)
// the function is a just a function _without_ an object associated
function otherfunction(newername) {
    this.name = newername;
    if (this !== global) {
        console.log(this);
    }
};

// examples above are implicit bound. Explicit binding is when
// a context is explicitly bound to a function, with call(), apply() or bind. 
otherfunction(); // refers to global object
otherfunction.call(someobj, 'Rigmor'); // refers to someobj


// Reusable Modules with Closures 
// 1) Implement and test the Closure Counter Example from today's lecture
// 2) Implement a reusable function using the closure feature, that should encapsulate information
// about a person(name, and age) and returns an object with the following methods:
// setAge
// setName
// getInfo(should return a string like Peter, 45)
// 3) Implement an ES6 class with a similar functionality as requested in part 2.
// Don't use getXX or  setXX but use ES6 properties. 

let person = function () {
    let age;
    let name;
    function getInfo() {
        return name + ', ' + age;
    }
    function setAge(newAge) {
        age = newAge;
    }
    function setName(newName) {
        name = newName;
    }
    return {
        setAge,
        setName,
        getInfo
    };
};

let person1 = person();
person1.setName('Rigmor');
person1.setAge(32);
console.log(person1.getInfo());

class Person {
    constructor(age, name) {
        this._age = age;
        this._name = name;
    }
    getInfo = function () {
        return `${this._name}, ${this._age}`;
    };

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const person2 = new Person(34, 'Lirekassen');
console.log(person2.getInfo()); 