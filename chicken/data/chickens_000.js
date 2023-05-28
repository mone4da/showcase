
const maxBullets = 10

module.exports = {
	rufus : {
		position : {x: 50, z: 30},
		size: .005,
		orientation: -30,
		rate: 20,
		speed : {
			rotation: .1,
			translation: 1
		},
		material : {
			color: '#0D516C',
			opacity: 1
		},
		bullets: maxBullets
	},

	gunter : {
		position : {x: 30, z: 50},
		size: .005,
		orientation: -30,
		rate: 80,
		speed : {
			rotation: .1,
			translation: 1
		},
		material : {
			color: 'brown',
			opacity: 1
		},
		bullets: maxBullets
	},

	default : {
		position : {x: 20, z: 20},
		size: .005,
		orientation: -30,
		rate: 60,
		speed : {
			rotation: .1,
			translation: 1
		},
		material : {
			color: 'gray',
			opacity: 1
		},
		bullets: maxBullets
	},
}
