const EventSource = require('eventsource')

class NetLatencySession{
    constructor(config,  consume ){

        this.time = Date.now()
        let es = new EventSource(config.source)
	es.onmessage = msg => {
            let now = Date.now()
            if (now - this.time > 25){
               	consume( parseInt(msg.data) || 0 )

                this.time = now
            }
        }
    }
}

module.exports = NetLatencySession
