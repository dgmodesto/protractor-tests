const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destination')
const FormComponent = require('./components/form')
const randomNumberBetweenOneAndN = require('../utils/randonNumberBetweenOneAndN')
const { browser } = require('protractor')

class EditDestination {
  constructor () {
    this.self = new DestinationComponent()
    this.form = new FormComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAndN(15)}/edit`)
  }
}

module.exports = EditDestination
