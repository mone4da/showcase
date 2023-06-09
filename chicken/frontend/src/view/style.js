
const style = {
	display: 'flex',
	height: '100%',
	width: '100%',
	background: '#08093B',
	color: '#BF9000',

	controlpanel: {
		display: 'grid',
		gridTemplateRows: '50px auto 120px 30px',
		height: '100%',
		width: '100%',

		menu: {
			display : 'flex',
			background: 'black'
		},

		controller: {
			display : 'flex',
			flexDirection: 'column',
			background: 'lightgray',

			rotation: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between'
			}
		},

		trigger: {
			display : 'flex',
			background: 'black'
		},

		info: {
			display : 'flex',
			background: 'black'
		}
	}
}

export default style
