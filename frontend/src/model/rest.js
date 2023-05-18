
import axios from 'axios'

const HTTP = {
	OK : 200
}

class Rest{
	constructor(root){
		this.root = root || ''
	}

	async get(){
		let path = [this.root, ...arguments].join('/')

		let response = await axios.get(path)
		return {
			data: response.data,
			status: response.status,
			ok : response.status === HTTP.OK
		}
	}

	async post(_path, parameters){
		let path = [this.root, _path].join('/')

		let response = await axios.post(path, parameters)
		return {
			data: response.data,
			status: response.status,
			ok : response.status === HTTP.OK
		}
	}

	async config(){
		return await this.get('config')
	}
}

export default Rest
