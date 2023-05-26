
const state =  {
	system: {
		maze: [],

		chickens : {},

		impacts : [],

		setting : {
			size: {
				width: 30,
				height: 30
			},

			firerate: 40
		}
	},

	user: {
		player : {
				position : {
					x: 0, z: 3
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

