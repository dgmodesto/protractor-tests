const helper = require('protractor-helper')
const pageSorter = require('../utils/pageSorter')
const pages = [
  require('../page-objects/home'),
  require('../page-objects/tag'),
  require('../page-objects/destination'),
  require('../page-objects/editDestination')
]

describe('Given I\'m at a random page of the app', () => {
  let randonPage

  beforeEach(() => {
    randonPage = new pages[pageSorter()]()
    randonPage.visit()
  })

  it('Then I see an anchor to the home page ', () => {
    helper.waitForElementVisibility(randonPage.header.anchorToHome)
  })
})
