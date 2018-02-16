const jest = require('jest-cli')
const path = require('path')

module.exports = () => {
  jest.runCLI({
    config: path.join(__dirname, 'jest.config.js')
  }, '.')
}
