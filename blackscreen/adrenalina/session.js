const { Manager } = require('socket.io-client')

class Session {
  constructor() {
  }

  connect(config) {
    this.manager = new Manager(config.host)
    this.socket = this.manager.socket(config.path, config.options)

    this.socket.on('connect', () => { this.onConnection() })
    this.socket.on('disconnect', () => { this.onDisconnection() })
    this.socket.on('connect_error', _ => this.onConnectionError(_))
    this.socket.on('session', _ => this.onSession(_))
    this.socket.on('granted', _ => this.onGranted(_))
    this.socket.on('denied', _ => this.onDenied(_))
    this.socket.on('reply', _ => this.onReply(_))
  }

  // Event
  onConnection() { }
  onDisconnection() { }
  onConnectionError(_) { }
  onSession(_) { }
  onGranted(_) { }
  onDenied(_) { }
  onReply(_) { }

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

module.exports = Session