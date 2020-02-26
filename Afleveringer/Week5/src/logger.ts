
// (a:any, b:any)
function logger(a: number, b: string) {
    console.log(`Value of 1: ${a}, Value 2: ${b}`)
}

let a = 12;
let b = 'Hello World';

logger(a, b)

// logger(b, a) typefejl

// node ./build/logger.js
// tsc --watch


interface IPerson { name: string }
interface IAddress { address: string }

interface IPersonV2 { name: string, phone?: string } // med optional field
let p: IPersonV2 = { name: 'a', phone: "33" }
let p1: IPersonV2 = { name: 'a' }

function loggerV2(a: IPerson, b: IAddress) {
    console.log(`Person: ${JSON.stringify(a)}, Address: ${b.address}`)
}

const person1 = { name: 'Rigmor' };
let person2 = { name: 'Silvia' }
let address1 = { address: 'Ice Crown Citadel' }

loggerV2(person1, address1);


class Person implements IPerson {
    //constructor(public name: string) { }; // overholder interfacet
    //constructor(private _name:string){};  //shortcut notation constructor med privat variable 
    constructor(private _name: string) { };
    get name() { return this._name } // overholder interface (??)
    set name(val: string) { this._name = val }
}

let person3 = new Person('Olga');
person3.name = 'Inga';
loggerV2(person3, address1);


//generisk logger

// function loggerV1(a, b) {
//     console.log(`Value A: ${JSON.stringify(a)}, Value B: ${JSON.stringify(b)}`)
// }


function loggerV3<T, U>(a: T, b: U) {
    console.log(`Value A: ${JSON.stringify(a)}, Value B: ${JSON.stringify(b)}`)
}
loggerV3(a, b) // implicit står der loggerV3<number, string>(a,b)

class GenericLogger<T, U> {
    log = (t: T, u: U) => console.log(`Value A: ${JSON.stringify(t)}, Value B: ${JSON.stringify(u)}`)
}

const logger1 = new GenericLogger<number, string>();
const logger2 = new GenericLogger<IPerson, IAddress>();

logger1.log(a, b);
logger2.log(person1, address1);

