interface Person1 {
    firstName: string;
    lastName: string;
}

function greeter(person: Person1) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user))

interface PersonX {
    name: string;
    age: number;
}

function sortByName(a: PersonX[]) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
    return result
}

sortByName([]);