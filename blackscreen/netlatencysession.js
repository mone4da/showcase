const EventSource = require('eventsource')

class NetLatencySession{
    constructor(config,  consume ){
        new EventSource(config.source).onmessage = msg => consume(msg.data)
    }
}

module.exports = NetLatencySession