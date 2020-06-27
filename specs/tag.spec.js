const Tag = require('../page-objects/tag')
const helper = require('protractor-helper')

describe('Given I\'m at a random tag page', () => {
  let tagpage

  beforeAll(() => {
    tagpage = new Tag()
    tagpage.visit()
  })

  describe('And there are three destinations for this tag in the database', () => {
    it('Then they all render as cardas', () => {
      helper.waitForElementVisibility(tagpage.destinations.cards.last())

      expect(tagpage.destinations.cards.count()).toBe(3)
    })
  })

  describe('When I look to the first card in isolation', () => {
    it('Then I see an Image, a heading, a paragraph and an anchor', () => {
      helper.waitForElementVisibility(tagpage.destinations.imageOfFirstCard)
      helper.waitForElementVisibility(tagpage.destinations.headingOfFirstCard)
      helper.waitForElementVisibility(tagpage.destinations.paragraphOfFirstCard)
      helper.waitForElementVisibility(tagpage.destinations.anchorOfFirstCard)
    })
  })
})
