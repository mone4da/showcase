
class Channel{
	constructor(size){
		this.size = size || 64
		this.set([...new Uint8Array(this.size >> 3)])
	}

	set(data, p){
		this.data = data
		p && this.mark(p)
	}

	mark(p){
		let block = p >> 3
		let idx = p % 8
		let mask = 128 >> idx

		this.data[block] |= mask
	}

	clear(p){
		let block = p >> 3
		let idx = p % 8
		let mask = 0xFF ^ (128 >> idx)

		this.data[block] &= mask
	}

	marked(p){
		let block = p >> 3
		let idx = p % 8
		let mask = 128 >> idx

		return (this.data[block] &  mask) !== 0
	}

	toString(){
		return this.data.slice(0, this.size >> 3).map( b => b.toString(2).padStart(8,'0')).join(' ')
	}

	toHex(){
		return this.data.slice(0, this.size >> 3).map( b => b.toString(16).padStart(2,'0').toUpperCase()).join(' ')
	}

}

module.exports = Channel
