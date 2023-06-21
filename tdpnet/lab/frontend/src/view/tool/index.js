
import Cli from './cli'

const tool = (id, style) => {
	switch(id){
		case '>': return <Cli style={style.cli} position={{x: 200, y: 200}} />
		default: return null
	}
}

const Tool = props => {
	let {style, size, tools} = props

	return <>
		{tools.map(id => tool(id, style))}
		</>
}

export default Tool
