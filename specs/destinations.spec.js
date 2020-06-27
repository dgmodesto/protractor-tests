const helper = require('protractor-helper')
const Destination = require('../page-objects/destination')

describe('Give I\'m at a random destination page', () => {
  let destinationpage

  beforeEach(() => {
    destinationpage = new Destination()
    destinationpage.visit()
  })

  it('Then I see an image, a heading, a paragraph and anchor', () => {
    helper.waitForElementVisibility(destinationpage.self.image)
    helper.waitForElementVisibility(destinationpage.self.heading)
    helper.waitForElementVisibility(destinationpage.self.paragraph)
    helper.waitForElementVisibility(destinationpage.self.anchor)
  })
})
