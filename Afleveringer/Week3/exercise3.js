const fetch = require('node-fetch');
const URL = 'https://swapi.co/api/people/';
var now = require('performance-now');


async function fetchPerson(url) {
    return await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}

async function printNames() {
    console.log('Before');
    const person1 = await fetchPerson(URL + '1');
    const person2 = await fetchPerson(URL + '2');
    console.log(person1.name);
    console.log(person2.name);
    console.log('After all');
}


async function calculateTime(func) {
    var start = now();
    await func();
    var end = now();
    console.log('Run time for:', func.name, (end - start).toFixed(2));
}
calculateTime(printNames);


async function printNamesParallel() {
    console.log('Before');
    const promise1 = fetchPerson(URL + '1');
    const promise2 = fetchPerson(URL + '2');
    (await Promise.all([promise1, promise2])).forEach(result => {
        console.log(result.name);
    });
    console.log('After all');
}
calculateTime(printNamesParallel);