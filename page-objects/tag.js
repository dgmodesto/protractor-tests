const HeaderComponent = require('./components/header')
const DestinationsComponent = require('./components/destinations')
const randomNumberBetweenOneAndN = require('../utils/randonNumberBetweenOneAndN')
class Tag {
  constructor () {
    this.destinations = new DestinationsComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/tags/${randomNumberBetweenOneAndN(5)}`)
  }
}

module.exports = Tag
