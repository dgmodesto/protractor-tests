const configCreator = require('../utils/configCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      // 'binary': '/opt/bin/firefox',
      args: ['--headless'],
      pageLoadStrategy: 'normal'
    }
  },
  directConnect: true
})
