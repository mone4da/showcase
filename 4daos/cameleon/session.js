const NetLatencySession = require('./netlatencysession')

class Session extends require('./adrenalina/abstractapp'){
	constructor(config, socket){
		super(config.netgate)

		this.credentials = config.netgate.credentials

		this.appSocket = socket

		new NetLatencySession(config.netlatency, data => this.notify('latency', {time: data}))
	}

	notify(id, data){
		console.log(data)
		this.appSocket.emit(id, data)
	}

	getCredentials() {
        return this.credentials
      }
    
      onGranted() {
		this.notify('granted', {})
        console.log('granted and reaching out')

		this.time = Date.now()
        this.sendAIAUCHE2(this.credentials.address, 'EEEEEEEE-00000000AE')

		this.listen()
      }

	  onDenied(data){
		this.notify('denied', data)
	  }

      onAIAUCHE2(msg) {
		let now = Date.now()
		this.notify('latency', {time: now - this.time})
		this.time = now

        //this.sendAIAUCHE2(this.credentials.address, msg.from)
      }


	  listen(){
		this.appSocket.on('reply', (from, to, subject, body) => this.reply(from, to, subject, body))
		this.appSocket.on('signal', (from, to, subject, body) => this.signal(from, to, subject, body))
		this.appSocket.on('signin', (accesskey, password, address) => this.signin(accesskey, password, address))
		this.appSocket.on('signout', (accesskey, password, address) => this.signout(accesskey, password, address))
	  }

}

module.exports = Session
