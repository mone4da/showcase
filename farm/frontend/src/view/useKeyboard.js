
import {useState, useEffect} from 'react'

const useKeyboard = ({onKeyup, onKeydown, onPressing}) => {
	let [pressing, setPressing] = useState(false)

 	useEffect(() => {
		const handleKeyup = (e) => {
			setPressing(0)
			onKeyup && onKeyup(e.code)
		}

		const handleKeydown = (e) => {
			setPressing(e.code)
			onKeydown && onKeydown(e.code)
		}

		document.addEventListener('keydown', handleKeydown)
		document.addEventListener('keyup', handleKeyup)

		return () => {
				document.removeEventListener('keydown', handleKeydown)
				document.removeEventListener('keyup', handleKeyup)
			}
	})
}

export default useKeyboard
