const EventSource = require('eventsource')

class NetLatencySession{
    constructor(config,  consume ){

        this.time = Date.now()
        new EventSource(config.source).onmessage = msg => {
            let now = Date.now()
            if (now - this.time > 125){
                consume(msg.data)
                this.time = now
            }
        }
    }
}

module.exports = NetLatencySession