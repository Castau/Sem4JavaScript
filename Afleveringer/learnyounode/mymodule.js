const fs = require('fs')
const path = require('path')

module.exports = function (dir, filter, callback) {
  fs.readdir(dir, function (error, list) {
	if (error) return callback(error);
	list = list.filter(function (file) {
	  return path.extname(file) === '.' + filter
	})
	callback(null, list)
  })
}
