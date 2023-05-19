
const state =  {
	system: {
		maze: [],

		chickens : [],

		setting : {
			size: {
				width: 30,
				height: 30
			}
		}
	},

	user: {
		player : {
				position : {
					x: 4, z: 3
				},
				material: {
					color: 'red'
				}
		},

		targets: [],

		setting : {
		}
	}

}

export default state

