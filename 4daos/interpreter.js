
class Interpreter{
	constructor(language, objects){
		this.language =  language
		this.objects = objects || {}
	}

	parseString(str){
		return this.parseLines( str.trim().split('\n'))
	}

	parseLines(lines){
		const [id, command] = lines[0].trim().split(':',2)

		const [name, ...params] = command.trim().split(' ')

		return	this.objects[id] &&
			this.language.lex[name] && this.build(id, name, params, lines.slice(1)) ||
			this.error(id, name, params, lines)
	}

	build(id, name, params, lines){
		return {id, name, params, lines}
	}

	error(id, name, params, lines){
		return {error: 'error', id, name, params, lines}
	}
}

module.exports = Interpreter
