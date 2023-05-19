
import {useEffect} from 'react'

const useKeyboard = (onKeyup, onKeydown) => {
 	useEffect(() => {
		const handleKeyup = (e) => {
			onKeyup && onKeyup(e.code)
		}

		const handleKeydown = (e) => {
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
