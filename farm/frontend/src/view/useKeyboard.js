
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

		const handleTimer = () => {
			pressing && onPressing && onPressing(pressing)
		}

		document.addEventListener('keydown', handleKeydown)
		document.addEventListener('keyup', handleKeyup)
		document.timer = setInterval(handleTimer, 50)

		return () => {
				document.removeEventListener('keydown', handleKeydown)
				document.removeEventListener('keyup', handleKeyup)
				clearInterval(document.timer)
			}
	})
}

export default useKeyboard
