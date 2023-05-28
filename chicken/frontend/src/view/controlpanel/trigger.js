
import {useState, useEffect} from 'react'

const local = {
	style: {
		width: '100%',
		height: '100%'
	}
}

const Trigger = props => {
	let {style, state, onFire,onHoldFire} = props

	let [firing, setFiring] = useState(false)

	let handleMouseDown = () => {
		setFiring(true)
	}

	let handleMouseUp = () => {
		setFiring(false)
		onHoldFire && onHoldFire()
	}

	useEffect(() => {
		firing && onFire && onFire()
	})

	return <div style={style}>
			<svg style={local.style}>
				<circle
					cx='50%' cy='50%' r='60'
					fill='#b33234' />
				<circle 
					cx='50%' cy='50%' r='30'
					fill='red'
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseUp}/>
			</svg>
		</div>
}

export default Trigger
