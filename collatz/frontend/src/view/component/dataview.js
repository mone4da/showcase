
const Bar = props => {
	let {x,y,w,h} = props
	return <rect 
		x={x}
		y={y}
		width={w}
		height={h}
		fill={props.fill || 'blue'}
	/>
}

const Bars = props => {
	let data = props.data
	let xscale = props.width / data.length
	let yscale = props.height / props.max
	let barWidth = Math.max(1,xscale - 1)
	let fill = props.fill || 'white'
	return <svg>
			{data.map(
				(value,i) => <Bar x={i * xscale} y={props.height - value * yscale}  h = {value * yscale}  w = {barWidth} fill={fill} />
			)}
		</svg>
}

const Lines = props => {
	let data = props.data
	let xscale = props.width / data.length
	let yscale = props.height / props.max

	let points = [...data.map( (value,i) => `${i*xscale}, ${props.height - value * yscale}`)].join(' ')

	return <svg>
			<polygon points={points} fill={props.fill || '#F1F6FA'} stroke={props.stoke || '#117DBB'} />
		</svg>

}


export {
	Bars,
	Lines
}
