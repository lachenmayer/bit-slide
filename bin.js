const bitSlide = require('./')

const args = process.argv.slice(2)
if (args.length < 1) {
  console.log('usage: ascii-slide <string>')
  return
}

const generator = bitSlide(args.join(' '))
for (let bytes of generator) {
  console.log(bits(bytes) + '\n' + chars(bytes))
}

function bits(bytes) {
  return Array.from(bytes)
    .map(byte => pad(byte.toString(2), 8, '0'))
    .join(' ')
}

function chars(bytes) {
  return Array.from(String.fromCharCode(...bytes))
    .map(char => pad(escape(char), 8, ' '))
    .join(' ')
}

function pad(string, length, char = '0') {
  let output = ''
  for (let i = 0; i < length - string.length; i++) {
    output += char
  }
  output += string
  return output
}
