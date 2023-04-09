let generateNodes = (size, tag) => {
  return [...new Array(size)].map((_, i) => ({ id: tag[i], label: tag[i] + '' }))
}

let generateEdges = nodes => {
  let edges = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes.length; j++) {
      if (nodes[i].id !== nodes[j].id && Math.random() < .5)
        edges.push({
          from: nodes[i].id,
          to: nodes[j].id
        })
    }
  }

  return edges
}

let generate = (size, tag) => {
  let nodes = generateNodes(Math.min(size, tag.length), tag)
  return {
    nodes: nodes,
    edges: generateEdges(nodes)
  }
}

module.exports = { generate }