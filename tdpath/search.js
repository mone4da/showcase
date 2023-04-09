
class Binary {
  constructor(position) {
    this.data = new DataView(new ArrayBuffer(8), 0, 8)

    position && this.set(position)
  }

  add(position) {
    let binary = new Binary()
    binary.data.setBigUint64(0, this.data.getBigUint64(0))

    return binary.set(position)
  }

  set(i) {
    let value = this.data.getBigUint64(0)
    value |= 1n << BigInt(i)

    this.data.setBigUint64(0, value)

    return this
  }

  isSet(i) {
    let value = this.data.getBigUint64(0)
    return (value & (1n << BigInt(i))) !== 0n
  }

  toString() {
    return this.data.getBigUint64(0).toString(2).padStart(64, '0')
  }

}


const search = (graph, entry, exit, match, consume) => {

  let signal = async (from, tag, length, trace) => {
    if (match(from, exit))
      consume({ channel: tag, length, trace })
    else
      graph.edges.filter(edge => edge.from === from && !tag.isSet(edge.to)).forEach(edge => {
        signal(edge.to, tag.add(edge.to), length + 1, [...trace, edge.to])
      })
  }

  signal(entry, new Binary(entry), 0, [entry])
}


module.exports = { search }