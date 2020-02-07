
const fs = require('fs');
const path = require('path');
const type = '.'+process.argv[3];

fs.readdir(process.argv[2], function(err, data){
	if (err) return console.log(err);
	data.forEach(function (file){
		if (path.extname(file)=== type){
			console.log(file);
		}
	})

})