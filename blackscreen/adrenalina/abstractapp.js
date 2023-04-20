
class AbstractApp extends require('./session') {
  constructor(config) {
    super()

    console.log(config.connection)
    this.connect(config.connection)
  }

  onConnection() {
    this.onAccessing();

    var cred = this.getCredentials()
    this.signin(cred.key, cred.password, cred.address)
  }

  onConnectionError(e) {
    console.log(e)
  }

  onDisconnection() {
    this.onSessionEnd()
  }

  getCredentials() {
    return { accesskey: '', password: '' }
  }

  sendAIAUCHE2(from, to) {
    this.reply(
      from,
      to,
      'AIAUCHE2',
      'AIAUCHE2')
  }

  onSession(data) {
    console.log('onsession', data)
  }


  onDenied(data) {
    console.log('denied')
    this.onAccess(false)
  }

  onGranted(data) {
    console.log('granted')
    this.onAccess(true)
  }

  onReply(data) {
    let msg = data
    switch (msg.subject) {
      case 'AIAUCHE2': this.onAIAUCHE2(msg); break;
      case 'enter': this.onEnter(msg); break;
    }
  }

  //Events - internal
  onAccess(_) { }
  onAccessing() { }
  onSessionEnd() { console.log('end of session') }

  //Network specific events
  onAIAUCHE2(msg) { }
  onEnter(_) { }
}

module.exports = AbstractApp