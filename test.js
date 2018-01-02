const child_process = require('child_process')
const fs = require('fs')
const actual = child_process.execSync('node bin.js abc')
const expected = fs.readFileSync('expected.txt')
if (!actual.equals(expected)) {
  console.log('fail')
  process.exit(1)
}
