
const fs = require('fs');
// utf-8 as 2nd arg to convert to string
fs.readFile(process.argv[2], 'utf-8', function (err, data){
	if(err) return console.log(err);
	console.log( data.split('\n').length -1);
})