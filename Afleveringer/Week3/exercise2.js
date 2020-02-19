const fetch = require("node-fetch");


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
        .then(species_url => fetch(species_url))
        .then(res => res.json())
        .then(data => {
            swapiObj['First species'] = data.name;
            return (
                (Array.isArray(data.homeworld) && data.homeworld[0]) || data.homeworld);
        })
        .then(homeworld_url => fetch(homeworld_url))
        .then(res => res.json())
        .then(data => {
            swapiObj['Homeworld for Specie'] = data.name;
        })
        .catch(err => console.log('Error: ', err))
        .finally(() =>
            console.log('Promises', JSON.stringify(swapiObj, null, '\t'))
        );
}

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
}

getPlanetforFirstSpeciesInFirstMovieForPerson(1);
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);