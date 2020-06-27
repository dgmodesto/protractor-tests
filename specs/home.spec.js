const Home = require('../page-objects/home')
const helper = require('protractor-helper')

describe('Given I\'m at the home page', () => {
  let homepage

  beforeAll(() => {
    homepage = new Home()
    homepage.visit()
  })

  describe('And there are five tags in the database', () => {
    it('Then they all render as cardas', () => {
      helper.waitForElementVisibility(homepage.tags.cards.last())

      expect(homepage.tags.cards.count()).toBe(5)
    })
  })

  describe('When I look to the first card in isolation', () => {
    it('Then I see an Image, a heading, and an anchor', () => {
      helper.waitForElementVisibility(homepage.tags.imageOfFirstCard)
      helper.waitForElementVisibility(homepage.tags.headingOfFirstCard)
      helper.waitForElementVisibility(homepage.tags.anchorOfFirstCard)
    })
  })
})
