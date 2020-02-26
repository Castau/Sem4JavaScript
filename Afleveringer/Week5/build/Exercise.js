"use strict";
//1) Verify that you can use Node modules by requiring one of nodes built -in modules, for example:
let http = require("http");
function printBookInfo(book) {
    console.log(`This is a book! ${JSON.stringify(book)}`);
}
// This is ducktyping - i never specify that i am using the interface
let book1 = {
    title: '1984',
    author: 'George Orwell',
    published: new Date('1949-06-08'),
    pages: 237
};
let book2 = {
    title: 'A Constellation of Vital Phenomena',
    author: 'Anthony Marra',
    published: new Date('1914-02-14'),
};
let book3 = {
    title: 'All My Puny Sorrows',
    author: 'Miriam Toews',
};
//book2.author = 'Other Author' //- Compiler Error (Cannot assign to 'author' because it is a read-only property.)
printBookInfo(book1);
printBookInfo(book2);
printBookInfo(book3);
class Book {
    constructor(_title, _author, _published, _pages) {
        this._title = _title;
        this._author = _author;
        this._published = _published;
        this._pages = _pages;
    }
    ;
    //constructor(public title: string, public author: string, public published: Date, public pages: number) { };
    get title() { return this._title; }
    set title(val) { this._title = val; }
    get author() { return this._author; }
    set author(val) { this._author = val; }
    get published() { return this._published; }
    set published(val) { this._published = val; }
    get pages() { return this._pages; }
    set pages(val) { this._pages = val; }
}
let book4 = new Book('Beacon 23', 'Hugh Howey', new Date('1915-08-12'), 254);
printBookInfo(book4);
// A) The declaration below defines a Shape class, which as it's only properties has a color field +  a getArea() and a getPerimeter() 
// function which both returns undefined. This is the closest we get to an abstract method in Java. Provide the class with a nice 
// (using template literals) toString() method  + a getter/setter for the colour property. Verify that you cannot (why) make an instance of this class.
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
    set color(val) { this._color = val; }
    toString() {
        return `color: ${this.color}`;
    }
}
//let testShape = new Shape(); // Cannot create an instance of an abstract class.
// B) Create a new class Circle that should extend the Shape class.
// Test the class constructor, the getters / setters and the three methods.
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    get radius() { return this._radius; }
    set radius(val) { this._radius = val; }
    get area() { return Math.PI * Math.pow(this._radius, 2); }
    get perimeter() { return 2 * this._radius * Math.PI; }
    toString() {
        return `color: ${this.color}, radius: ${this.radius}`;
    }
}
let circle1 = new Circle('red', 5);
console.log(circle1.toString());
console.log(JSON.stringify(circle1));
console.log(circle1.area);
console.log(circle1.perimeter);
// C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that 
// should extend the Circle class. Test the new class
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get radius() { return this._radius; }
    set radius(val) { this._radius = val; }
    get height() { return this._height; }
    set height(val) { this._height = val; }
    get area() { return 2 * Math.PI * this._radius * (this._height + this._radius); }
    get perimeter() { throw new Error('Method not implemented'); }
    get volume() { return this._height * Math.PI * Math.pow(this._radius, 2); }
    toString() {
        return `color: ${this.color}, radius: ${this.radius}, height: ${this.height}`;
    }
}
let cylinder1 = new Cylinder('red', 5, 2);
console.log(cylinder1.toString());
console.log(JSON.stringify(cylinder1));
console.log(cylinder1.area);
//console.log(cylinder1.perimeter)
console.log(cylinder1.volume);
// a) Implement a generic function which will take an array of any kind, and return the 
// array reversed (just use the built-in reverse function), so the three first calls below 
// will print the reversed array, and the last call will fail.
function reverseArr(array) {
    return array.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
// console.log(reverseArr<number>(["a", "b", "c"])); // Type 'string' is not assignable to type 'number'.
// b) Implement a generic Class DataHolder that will allow us to create instances.
// Verify that once created, an instance can only be used with the type it was created from.
class DataHolder {
    constructor(t) {
        this._t = t;
    }
    get value() { return this._t; }
    set value(val) { this._t = val; }
    getValue() {
        return `generic: ${this._t}`;
    }
    setValue(val) {
        this._t = val;
    }
}
let d = new DataHolder("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
let d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
// c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods
let d3 = new DataHolder(456);
console.log(d3.value);
d3.value = 111;
console.log(d3.value);
//# sourceMappingURL=Exercise.js.map