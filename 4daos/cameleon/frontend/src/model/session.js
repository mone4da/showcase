
import {Manager} from 'socket.io-client'

class Session {
	constructor() {
		this.connect()
	}
  
	connect() {
	  this.manager = new Manager()
	  this.socket = this.manager.socket('/')
  
	  this.socket.on('connect', () => { this.onConnection() })
	  this.socket.on('disconnect', () => { this.onDisconnection() })
	  this.socket.on('connect_error', _ => this.onConnectionError(_))
	  this.socket.on('session', _ => this.onSession(_))
	  this.socket.on('granted', _ => this.onGranted(_))
	  this.socket.on('denied', _ => this.onDenied(_))
	  this.socket.on('reply', _ => this.onReply(_))
	  this.socket.on('latency', _ => this.onLatency(_))
	}
  
	// Event
	onConnection() { }
	onDisconnection() { }
	onConnectionError(_) { }
	onSession(_) { }
	onGranted(_) { }
	onDenied(_) { }
	onReply(_) { }
	onLatency(_){}
  
	//Method
	send(id, data) {
	  this.socket.emit(id, { timestamp: Date.now(), ...data })
	}
  
	signin(accesskey, password, address) {
	  let data = {
		body: {
		  accesskey,
		  password,
		  address
		}
	  }
  
	  this.send('signin', data)
	}
	signout(accesskey, password, address) {
	  let data = {
		body: {
		  accesskey,
		  password,
		  address
		}
	  }
  
	  this.send('signout', data)
	}
  
	signal(from, to, subject, body) {
	  this.send('signal', {
		from,
		to,
		subject,
		body
	  })
	}
  
	reply(from, to, subject, body) {
	  this.send('reply', {
		from,
		to,
		subject,
		body
	  })
	}
  
  }

export default Session
