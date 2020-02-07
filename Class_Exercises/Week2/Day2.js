// Exercise 1
const systemInfo = require("./osInfo.js");
console.log(systemInfo.systemInfo());

// Exercise 2
const dos = require("./dosDetector.js");

const timeValue = 1500;
const dosdetector = new dos.DOS_Detector(timeValue);
dosdetector.on('DOS', event => {
    console.log('Possible DOS! Relevant data: ', event);
});

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        dosdetector.addUrl('https://www.hack3r.dk/');
    }, timeValue - Math.floor(Math.random() * 1000))
};