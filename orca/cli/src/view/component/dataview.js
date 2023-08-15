
const Bar = props => {
	let {x,y,w,h} = props
	return <rect 
		x={x}
		y={y}
		width={w}
		height={h}
		fill='blue'
	/>
}

const Bars = props => {
	let data = props.data
	let xscale = props.width / data.length
	let yscale = props.height / props.max
	let barWidth = xscale - 10
	return <svg>
			{data.map(
				(value,i) => <Bar x={i * xscale} y={props.height - value * yscale}  h = {value * yscale}  w = {barWidth} />
			)}
		</svg>
}

const Lines = props => {
	let data = props.data
	let xscale = props.width / data.length
	let yscale = props.height / props.max

	let points = [...data.map( (value,i) => `${i*xscale}, ${props.height - value * yscale}`)].join(' ')

	return <svg>
			<polygon points={points} fill='#F1F6FA' stroke='#117DBB'/>
		</svg>

}


export {
	Bars,
	Lines
}
