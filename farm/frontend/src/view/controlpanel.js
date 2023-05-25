
import {useState} from 'react'

const ControlPanel = props => {
	let {style, onUpdate} = props

	let [color, setColor] = useState('#FF3400')

	let handleColor = e => {
		setColor(e.target.value)
		onUpdate && onUpdate(e.target.value, 'color')
	}

	return <div style={style}>
			<input type="color" id="color" name="color" value={color} onChange={handleColor}/>
			<label for="color">Color</label>
		</div>
}


export default ControlPanel
