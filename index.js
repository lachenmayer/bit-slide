module.exports = function* bitSlide(string) {
  const buffer = new Uint8Array(string.length)
  const last = string.length - 1
  for (let offset = 0; offset < string.length; offset++) {
    let first = last - offset
    for (let b = 7; b >= 0; b--) {
      for (let i = 0; i <= offset; i++) {
        const current = string.charCodeAt(first + i)
        const next = string.charCodeAt(first + 1 + i) || 0
        buffer[i] = (current << b) | (next >> (8 - b))
      }
      yield buffer
    }
  }
  return buffer
}
