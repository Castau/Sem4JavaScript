const fs = require('fs');
const buffObj = fs.readFileSync(process.argv[2]);
const str = buffObj.toString();
const arrStr = str.split('\n');
console.log(arrStr.length-1);
