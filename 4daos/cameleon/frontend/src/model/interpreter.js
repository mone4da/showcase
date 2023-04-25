
class Interpreter{
	constructor(language, contexts){
		this.language =  language
		this.contexts = contexts || {}
	}

	build(statement){
		return this.analyze(
				this.parse(statement.trim())
			)
	}

	parse(string){
		let lines = string.split('\n')
		if (!lines.length)
			return null

		let [context, command, ...params] = lines[0].split(' ')

		return {
			context,
			command,
			params,
			options : lines.slice(1)
		}
	}

	analyze(structure){
		let {context, command, params, options} = structure

		let ctx = this.contexts[context]
		if (!ctx)
			return this.error('nocontext',structure)

		let cmd = this.language.types[ctx.type]?.commands[command]
		if (!cmd)
			return this.error('nocommand', structure)

		let opts = options && options
				.map(item => item.split('='))
				.reduce((list, item) => {
					list[item[0].trim()] = item[1].trim()
					return list
					}, {})

		return {
			status: 0,
			context: ctx,
			command: cmd,
			params,
			options : opts || {}
		}
	}

	error(type, data, status){
		return {
			status: status || 666,
			type,
			data
		}
	}

}

export default Interpreter
