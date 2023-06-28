
const data = {
	nodes : [
		{
			id: 0,
			name: 'zero',
			location: 'local',
			type: 'e'
		},
		{
			id: 1,
			name: 'one',
			location: 'local',
			type: 'b'
		},
		{
			id: 2,
			name: 'two',
			location: 'local',
			type: 'b'
		},
		{
			id: 3,
			name: 'three',
			location: 'local',
			type: 'b'
		},
		{
			id: 4,
			name: 'four',
			type: 'b'
		},
		{
			id: 5,
			name: 'five',
			location: 'local',
			type: 'e'
		},
		{
			id: 6,
			name: 'six',
			location: 'local',
			type: 'b'
		},
		{
			id: 7,
			name: 'seven',
			location: 'local',
			type: 'g'
		},
		{
			id: 8,
			name: 'eight',
			location: 'local',
			type: 'r'
		},
		{
			id: 100,
			name: 'hundred',
			location: 'local',
			type: 'ux'
		},
		{
			id: 20,
			name: 'twenty',
			location: 'local',
			type: 'sp'
		},
		{
			id: 21,
			name: 'twentyone',
			location: 'local',
			type: 'sp'
		}

	],

	links: [
		{a: 0, b:1},
		{a: 0, b:3},
		{a:3, b: 5},
		{a: 1, b: 2},
		{a:2, b: 0},
		{a:3, b: 5},
		{a:4, b: 1},
		{a:5, b: 6},
		{a:2, b: 4},
		{a:5, b: 1},
		{a: 5, b: 7},
		{a: 7, b: 8},
		{a: 7, b: 100},
		{a: 0, b: 20},
		{a:5, b: 21}
	]
}

let client = type => ({
		nodes: data.nodes.map(item => ({...item, view: type[item.type].view})),
		links: data.links
	})

let service = () => data

module.exports = {client, service}
