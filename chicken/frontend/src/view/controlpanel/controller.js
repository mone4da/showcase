import {useState} from 'react'
import Draggable from 'react-draggable'
import ReactResizeDetector from 'react-resize-detector'

const Translation = props => {
	let {size, onChange} = props

	let [shift, setShift] = useState({x:0, y:0})

	let style = {
		width: '100%',
		height: '100%'
	}

	let handleDrag = e => {
		let news = {x : shift.x + e.movementX, y: shift.y + e.movementY}
		setShift(s => news)
		onChange && onChange(news)

	}

	let handleClick = () => {
		setShift({x:0, y: 0})
		onChange && onChange({x:0, y: 0})
	}

	return 	<svg  style={style}>
				<circle
					cx={size.width/2}
					cy={size.height/2}
					r='25%'
					fill='white'
					stroke='black'
					strokeWidth='1%'
					opacity='.2'
					onClick={handleClick}/>
				<Draggable
					position={shift}
					onDrag={handleDrag}
					>
					<circle cx='50%' cy='50%' r='10%' fill='#090909'/>
				</Draggable>
			</svg>
}

const Rotation = props => {
	let {size,onChange} = props

	let [shift, setShift] = useState({x:0, y:0})

	let handleDrag = e => {
		let news = {x : shift.x + e.movementX, y: shift.y + e.movementY}
		setShift(s => news)
		onChange && onChange(news)
	}

	let handleClick = () => {
		setShift({x:0, y: 0})
		onChange && onChange({x:0, y: 0})
	}

	return <svg>
			<circle
				cx={size.width/8}
				cy={size.height/8}
				r='8%'
				fill='white'
				stroke='black'
				strokeWidth='.1%'
				 opacity='.5'
				onClick={handleClick}/>

			<Draggable
				position={shift}
				onDrag={handleDrag}
				>
				<circle	cx={size.width/8} cy={size.height/8} r='4%' fill='#090909'/>
			</Draggable>
		</svg>
}


const Controller = props => {
	let {style, onChange} = props

	let handleTranslation = v => {
		onChange && onChange(v, 'translate')
	}

	let handleRotation = v => {
		onChange && onChange(v, 'rotate')
	}

	return <div style={style}>
			<ReactResizeDetector handleWidth handleHeight>
				{({width, height}) => (<>
								<Translation size={{width, height}} onChange={handleTranslation} />
								<Rotation size={{width, height}} onChange={handleRotation} />
								</>)
				}
			</ReactResizeDetector>
		</div>
}

export default Controller
