const Interpreter = require('./interpreter')
const language = require('./language')
const contexts = require('./context')

let statements = [
`
0 list true 2348886904
max = 10
filter = '3,9'
type = 'bridge'
`,
`
10 show
duration = 10s
` ,
`
200 list
max = 10
filter = '39,139'
`,
`
200 merge
max = 10
filter = '39,139'
`
]

let interpreter = new Interpreter(language, contexts)

for (let statement of statements)
	console.log( interpreter.build(statement) )

