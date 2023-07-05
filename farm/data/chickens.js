
const maxBullets = 10

module.exports = {
	rufus : {
		position : {x: 20, z: 20},
		size: .007,
		orientation: -30,
		rate: 20,
		speed : {
			rotation: .1,
			translation: 1
		},
		material : {
			color: 'orange',
			opacity: 1
		},
		bullets: maxBullets
	}
}
