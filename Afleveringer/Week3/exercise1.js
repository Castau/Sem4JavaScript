const crypto = require("crypto");

const secObj = {
    title: "6 Secure Randoms",
    randoms: []
};

const size = 24;
crypto.randomBytes(size, (err, buffer) => {
    let secureHex = buffer.toString("hex");
    secObj.randoms.push({
        length: secureHex.length,
        random: secureHex
    });
    crypto.randomBytes(size - 4, (err, buffer) => {
        let secureHex = buffer.toString("hex");
        secObj.randoms.push({
            length: secureHex.length,
            random: secureHex
        });
        crypto.randomBytes(size - 8, (err, buffer) => {
            let secureHex = buffer.toString("hex");
            secObj.randoms.push({
                length: secureHex.length,
                random: secureHex
            });
            crypto.randomBytes(size - 12, (err, buffer) => {
                let secureHex = buffer.toString("hex");
                secObj.randoms.push({
                    length: secureHex.length,
                    random: secureHex
                });
                crypto.randomBytes(size - 16, (err, buffer) => {
                    let secureHex = buffer.toString("hex");
                    secObj.randoms.push({
                        length: secureHex.length,
                        random: secureHex
                    });
                    crypto.randomBytes(size - 20, (err, buffer) => {
                        let secureHex = buffer.toString("hex");
                        secObj.randoms.push({
                            length: secureHex.length,
                            random: secureHex
                        });
                        console.log('randomBytes', JSON.stringify(secObj, null, 4));
                    });
                });
            });
        });
    });
});


const makeSecureRandom = size => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (error, buffer) => {
            if (error) {
                return reject(error);
            }
            let secureHex = buffer.toString("hex");
            return resolve({
                length: secureHex.length,
                random: secureHex
            });
        });
    });
};

const getSecureRandoms = async sizeList => {
    const promises = [];
    for (let index = 0; index < sizeList.length; index++) {
        const element = makeSecureRandom(sizeList[index]);
        promises.push(element);
    }
    return await Promise.all(promises);
};

module.exports.getSecureRandoms = getSecureRandoms;