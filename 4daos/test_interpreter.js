const Interpreter = require('./interpreter')
const language = require('./language')

let objects = {
	bridges: {}
}

let command =
`
bridges: list true 2348886904
max = 10
filter = '3,9'
`

let interpreter = new Interpreter(language, objects)
console.log( interpreter.parseString(command) )

