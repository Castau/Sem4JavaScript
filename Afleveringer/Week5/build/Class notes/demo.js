"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user));
function sortByName(a) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([]);
//# sourceMappingURL=demo.js.map