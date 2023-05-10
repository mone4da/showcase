import Rest from './rest'
import state from './state'

class Model{
	constructor( initialized ){
		this.state = state

		this.initialize( initialized )
	}

	initialize( consume ){
		consume( this )
	}


	notify(data, id){
		this.onUpdate && this.onUpdate(data, id)
	}

	//methods
	update(data, id){
		switch(id){
	 	}
	}

}

export default Model
