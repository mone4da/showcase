
const {shortest} = require('./analyzer')

let paths = [
	[2,4, 10,11],
	[2,1,4,3],
	[2,9,10,12,45,100]
]


console.log( shortest(paths) )
