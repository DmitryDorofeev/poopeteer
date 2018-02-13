const jest = require('jest-cli')
const path = require('path')

jest.runCLI({
  config: path.join(__dirname, 'jest.config.js')
}, '.')
