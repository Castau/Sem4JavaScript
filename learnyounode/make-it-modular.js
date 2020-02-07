const mymodule = require('./mymodule.js')
const dir = process.argv[2]
const filter = process.argv[3]

mymodule(dir, filter, function (error, list) {
  if (error) return console.log(error);
  list.forEach(function (file) {
	console.log(file)
  })
})
