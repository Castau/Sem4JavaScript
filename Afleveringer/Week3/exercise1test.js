const { getSecureRandoms } = require("./exercise1.js");

getSecureRandoms([24, 20, 16, 12, 8, 4])
    .then(randoms => console.log('Promise', randoms));


const async_function = async () => {
    const randoms = await getSecureRandoms([24, 20, 16, 12, 8, 4]);
    console.log('Async', randoms);
}

async_function();