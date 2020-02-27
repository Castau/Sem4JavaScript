//1) Verify that you can use Node modules by requiring one of nodes built -in modules, for example:
let http = require("http");

// 2) Verify that you can use external node-modules, for example by using node-fetch:
// npm install --save @types/node-fetch


// Interfaces 1
// a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
// b) Create a function that takes an IBook instance and test it with an object instance.
// c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
// d) Change the interface to make published and pages become optional - Verify the new behaviour.
// e) Change the interface to make author readonly - Verify the new behaviour.
// f) Create a class Book and demonstrate the "Java way" of implementing an interface.


interface IBook {
    title: string
    readonly author: string
    published?: Date
    pages?: number
}

function printBookInfo(book: IBook) {
    console.log(`This is a book! ${JSON.stringify(book)}`);
}

// This is ducktyping - i never specify that i am using the interface
let book1 = {
    title: '1984',
    author: 'George Orwell',
    published: new Date('1949-06-08'),
    pages: 237
}

let book2: IBook = {
    title: 'A Constellation of Vital Phenomena',
    author: 'Anthony Marra',
    published: new Date('1914-02-14'),
}

let book3 = {
    title: 'All My Puny Sorrows',
    author: 'Miriam Toews',
}

//book2.author = 'Other Author' //- Compiler Error (Cannot assign to 'author' because it is a read-only property.)

printBookInfo(book1);
printBookInfo(book2);
printBookInfo(book3);

class BookJava implements IBook {
    title: string
    author: string
    published: Date
    pages: number
    constructor(private _title: string, private _author: string, private _published: Date, private _pages: number) {
        this.title = _title
        this.author = _author
        this.published = _published
        this.pages = _pages
     };

    getTitle() { return this._title }
    setTitle(val: string) { this._title = val }

    getAuthor() { return this._author }
    setAuthor(val: string) { this._author = val }

    getPublished() { return this._published }
    setPublished(val: Date) { this._published = val }

    getPages() { return this._pages }
    setPages(val: number) { this._pages = val }
}

class Book implements IBook {
    constructor(private _title: string, private _author: string, private _published: Date, private _pages: number) { };

    get title() { return this._title }
    set title(val: string) { this._title = val }

    get author() { return this._author }
    set author(val: string) { this._author = val }

    get published() { return this._published }
    set published(val: Date) { this._published = val }

    get pages() { return this._pages }
    set pages(val: number) { this._pages = val }
}

let book4 = new Book('Beacon 23', 'Hugh Howey', new Date('1915-08-12'), 254);
let book5 = new BookJava('Beacon 23', 'Hugh Howey', new Date('1915-08-12'), 254);
printBookInfo(book4);


// A) The declaration below defines a Shape class, which as it's only properties has a color field +  a getArea() and a getPerimeter() 
// function which both returns undefined. This is the closest we get to an abstract method in Java. Provide the class with a nice 
// (using template literals (backticks)) toString() method  + a getter/setter for the colour property. Verify that you cannot (why) make an instance of this class.

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
//let testShape = new Shape(); // Cannot create an instance of an abstract class.

// B) Create a new class Circle that should extend the Shape class.
// Test the class constructor, the getters / setters and the three methods.

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

let circle1 = new Circle('red', 5);
console.log(circle1.toString())
console.log(JSON.stringify(circle1))
console.log(circle1.area)
console.log(circle1.perimeter)


// C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that 
// should extend the Circle class. Test the new class

class Cylinder extends Circle {
    _height: number;

    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this._height = height;
    }

    get radius() { return this._radius }
    set radius(val: number) { this._radius = val }

    get height() { return this._height }
    set height(val: number) { this._height = val }

    get area(): number { return 2 * Math.PI * this._radius * (this._height + this._radius) }
    get perimeter(): number { throw new Error('Method not implemented'); }
    get volume(): number { return this._height * Math.PI * Math.pow(this._radius, 2)}

    public toString(): string {
        return `color: ${this.color}, radius: ${this.radius}, height: ${this.height}`;
    }
}

let cylinder1 = new Cylinder('red', 5, 2);
console.log(cylinder1.toString())
console.log(JSON.stringify(cylinder1))
console.log(cylinder1.area)
//console.log(cylinder1.perimeter)
console.log(cylinder1.volume)

// a) Implement a generic function which will take an array of any kind, and return the 
// array reversed (just use the built-in reverse function), so the three first calls below 
// will print the reversed array, and the last call will fail.

function reverseArr<T>(array : T[]){
    return array.reverse()
}

console.log(reverseArr<string>(["a", "b", "c"]));
console.log(reverseArr<number>([1, 2, 3]));
console.log(reverseArr<boolean>([true, true, false]));
// console.log(reverseArr<number>(["a", "b", "c"])); // Type 'string' is not assignable to type 'number'.


// b) Implement a generic Class DataHolder that will allow us to create instances.
// Verify that once created, an instance can only be used with the type it was created from.

class DataHolder<T> {
    _t: T;
    constructor(t: T) {
        this._t = t;
    }
    
    get value() { return this._t }
    set value(val: T) { this._t = val }

    public getValue(): string {
        return `generic: ${this._t}`;
    }

    public setValue(val: T) {
        this._t = val;
    }
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());


// c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods

let d3 = new DataHolder<number>(456);
console.log(d3.value);
d3.value = 111;
console.log(d3.value);
