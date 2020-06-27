const HeaderComponent = require('./components/header')
const DestinationsComponent = require('./components/destination')
const randomNumberBetweenOneAndN = require('../utils/randonNumberBetweenOneAndN')
class Destination {
  constructor () {
    this.self = new DestinationsComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAndN(15)}`)
  }
}

module.exports = Destination
