"use strict";
// (a:any, b:any)
function logger(a, b) {
    console.log(`Value of 1: ${a}, Value 2: ${b}`);
}
let a = 12;
let b = 'Hello World';
logger(a, b);
let p = { name: 'a', phone: "33" };
let p1 = { name: 'a' };
function loggerV2(a, b) {
    console.log(`Person: ${JSON.stringify(a)}, Address: ${b.address}`);
}
const person1 = { name: 'Rigmor' };
let person2 = { name: 'Silvia' };
let address1 = { address: 'Ice Crown Citadel' };
loggerV2(person1, address1);
class Person {
    //constructor(public name: string) { }; // overholder interfacet
    //constructor(private _name:string){};  //shortcut notation constructor med privat variable 
    constructor(_name) {
        this._name = _name;
    }
    ;
    get name() { return this._name; } // overholder interface (??)
    set name(val) { this._name = val; }
}
let person3 = new Person('Olga');
person3.name = 'Inga';
loggerV2(person3, address1);
//generisk logger
// function loggerV1(a, b) {
//     console.log(`Value A: ${JSON.stringify(a)}, Value B: ${JSON.stringify(b)}`)
// }
function loggerV3(a, b) {
    console.log(`Value A: ${JSON.stringify(a)}, Value B: ${JSON.stringify(b)}`);
}
loggerV3(a, b); // implicit står der loggerV3<number, string>(a,b)
class GenericLogger {
    constructor() {
        this.log = (t, u) => console.log(`Value A: ${JSON.stringify(t)}, Value B: ${JSON.stringify(u)}`);
    }
}
const logger1 = new GenericLogger();
const logger2 = new GenericLogger();
logger1.log(a, b);
logger2.log(person1, address1);
//# sourceMappingURL=logger.js.map