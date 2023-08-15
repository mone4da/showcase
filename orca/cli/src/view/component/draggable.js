import {useState} from 'react'

let Area = props => {
	let [po, setPo] = useState({x:0, y:0})
	let [position, setPosition] = useState(props.offset || { x: 0, y: 0 })
	let [dragging, setDragging] = useState(false)

	let handleReady = (e, ok) => {
		setDragging(ok)
		ok && setPo({x: e.clientX, y: e.clientY})
	}

	let drag = e => {
		let d = {x: e.clientX - po.x, y: e.clientY - po.y}
		setPosition( p => ({x: p.x + d.x, y: p.y + d.y }) )
		setPo({x: e.clientX, y: e.clientY})

		props.onDragging && (d.x !== 0 || d.y !== 0) && props.onDragging(position)
	}

	let touchDrag = e => {
		e.preventDefault()
		drag(e.touches[0])
	}

	return 	<svg 	style={{ cursor: dragging ? 'pointer' : 'default', touchAction: 'none' }}
			x = {position.x} y={position.y}

			onMouseDown={e => handleReady(e, true)}
			onMouseUp={e => handleReady(e, false)}
			onMouseLeave={e=> dragging && handleReady(e ,false)}
			onMouseMove={e => dragging && drag(e)}

			onTouchStart={e => handleReady(e.touches[0], true)}
			onTouchEnd={e => handleReady(e.touches[0], false)}
			onTouchMove={e => dragging && touchDrag(e)}

			fill={props.fill}
			>
			{props.children}

		</svg>
}


let Icon = props => {
	let height = props.height || 40
	let width = props.width || 40

	return <Area
			fill={props.area && props.area.fill}
			offset = {props.area && (props.area.offset || {x:0, y:0})}
			onDragging={props.onDragging}>

			<image
				onMouseUp = {e => props.onSelected && props.onSelected()}
				height={height}
				width={width}
				href={props.url} />
		</Area>
}



let Rect = props => {
		return <Area fill={props.fill} offset = {props.area && (props.area.offset || {x:0, y:0})}>

			<rect
				height={props.height || 40}
				width={props.width || 40}

				rx={props.rx || 10}
				fill={props.fill || 'lightblue'}
				stroke={props.stroke || 'blue'} />

		</Area>

}


export {
	Icon,
	Area,
	Rect
}
