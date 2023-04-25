
const data = {
	types : {
		meta: {},
		desktop: {
			commands: {
				add : {
					type: '',
					content: ''
				},
				remove: {
					id: ''
				},
				list : {
					type: '',
					criteria: ''
				},

				lookup : {
					id: ''
				},

				update: {
					type: ''
				},
				listen : {
					type: '',
					criteria: ''
				}
			}
		},
		window: {
			commands: {
				show: {
					duration : ''
				},
				hide: {
					duration : ''
				},
				update: {
					type: ''
				},
				listen : {
					type: '',
					criteria: ''
				}

			}
		},

		middleware: {
			commands: {
			}
		},

		network: {
			commands: {
				list : {},
				lookup: {},
				mount: {},
				unmount: {}
			}
		},

		element: {
			commands: {
				inspect: {},
				update: {},
				listen: {}
			}
		}

	},

}

export default data
