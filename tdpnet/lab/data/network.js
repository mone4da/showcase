
const data = {
	nodes : [
		{
			id: 0,
			name: 'zero',
			type: 'e'
		},
		{
			id: 1,
			name: 'one',
			type: 'b'
		},
		{
			id: 2,
			name: 'two',
			type: 'b'
		},
		{
			id: 3,
			name: 'three',
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
			type: 'e'
		},
		{
			id: 6,
			name: 'six',
			type: 'b'
		},
		{
			id: 7,
			name: 'seven',
			type: 'g'
		},
		{
			id: 8,
			name: 'eight',
			type: 'r'
		},
		{
			id: 100,
			name: 'hundred',
			type: 'ux'
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
		{a: 7, b: 100}
	]
}

let client = type => ({
		nodes: data.nodes.map(item => ({...item, view: type[item.type].view})),
		links: data.links
	})

let service = () => data

module.exports = {client, service}
