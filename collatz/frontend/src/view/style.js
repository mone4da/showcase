
const style = {
	display: 'grid',
	gridTemplateRows: '30px auto',
	height: '100%',
	width: '100%',
	background: '#08093B',
	color: '#BF9000',

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		background: '#08093B',
		fontSize: '.7em',

		border: 'solid #BF9000',
		borderWidth: '0 0 1px 0',

		logo: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			image : {
				height: '100%'
			}
		}
	},

	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},

	footer: {
		border: 'solid #BF9000',
		borderWidth: '1px 0 0 0',
		fontSize: '.7em',
	}
}

export default style
