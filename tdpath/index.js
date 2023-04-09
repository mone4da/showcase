/** 
 * Small POC representing an algorithm that try to find the shortest path between two nodes.
 * Observe that the nodes are labeled from 0 to n. This is in fact the only information needed.
 * This is just a concept. A real implementation should take place across a network of machines
 * where every machine represent a node. Every machine spreads the search.
 * The machine initiating the search gets all the results back and compare them to retrieve the "optimum".
 * 
 * Notice that the search can keep going as far as many machines join the network. For this rason consider
 * attach a "gas quote" to tell the current machine how deep the search can go.
 */

const { generate } = require('./graph')
const { search } = require('./search')

let data = [...new Array(15)].map((_, i) => i)

let graph = generate(data.length, data)

let min = {
  length: 100,
  path: []
}

let consume = data => {
  if (data.length < min.length) {
    min = {
      length: data.length,
      path: data
    }
    console.log(data.channel.toString(), data.trace.join('->'), data.length)
  }
}

search(
  graph, 4, 12,/** search shortest path from 4 to 12 */
  (a, b) => a === b,
  data => consume(data)
)