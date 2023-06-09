import {useState} from 'react'
import Draggable from 'react-draggable'

const Wheel = props => {
	let handleDragging = e => {
	}
	return	<Draggable
			onDrag = {handleDragging} >
			{props.children}
		</Draggable>

}

const Translation = props => {
	let [shift, setShift] = useState({x:0, y:0})
	let style = {
		width: '100%',
		height: '100%'
	}

	let handleDrag = e => {
		console.log(shift.x + e.movementX, shift.y + e.movementY)
		setShift(s => ({x : s.x + e.movementX, y: s.y + e.movementY}))

	}

	return <svg style={style}>
			<circle cx='50%' cy='50%' r='25%' 
			fill='white'
			stroke='black'
			strokeWidth='4'
			opacity='.2'/>
			<Draggable
				onDrag={handleDrag}
				>
				<circle cx='50%' cy='50%' r='10%' fill='#090909'/>
			</Draggable>
		</svg>
}

const Rotation = props => {
	return <svg>
			<circle
				cx='50%'
				cy='50%' r='30%'
				fill='white'
				stroke='black'
				strokeWidth='4'
				 opacity='.2'/>

			<Draggable>
				<circle cx='50%' cy='50%' r='10%' fill='#090909'/>
			</Draggable>
		</svg>
}

const Controller = props => {
	let {style} = props
	return <div style={style}>
			<Translation />

			<div style={style.rotation}>
				<Rotation />
				<Rotation />
			</div>
		</div>
}

export default Controller
