import { Component } from "react"

let data = [...new Array(500)].map(() => 0)

let Content = props => {
	let {Chart, event} = props

	const style = {
		display:'flex',
		width: '100%',
		height: '100%',
		background: '#0C0C00',

		glass: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			height: '92px',
			width: '310px',
			position: 'absolute',
			fontSize: '8px',

			line: {
				backgroundColor: 'orange', 
				borderWidth: 0, 
				height: 1 ,
				width: '310px'
			}
		}
	}

	data.unshift(props.event.data)
	data.pop()

	return <div style={style} >
			<Chart width={500} height={100} data={[0,...data,0]} max={1000} />
			<div style={style.glass}>
				<label>500 miliseconds</label>
				<hr style={style.glass.line} />
			</div>
		</div>
}

const Histogram = props => {
	let {Component, event, asset, offset, onFocused, onDragged, onClose} = props


	return <Component.Window
			width={360} 
			height={100}
			offset={offset}
			onFocused={onFocused}
			onDragged={onDragged}
			icon={asset.icon}>
		<Content Chart={Component.Lines} event={event} onClose={onClose} />
</Component.Window>


}

export default Histogram
