const helper = require('protractor-helper')
const faker = require('faker')
const Destination = require('../page-objects/destination')
const EditDestination = require('../page-objects/editDestination')
const { browser } = require('protractor')

describe('Given I\'m ata a random edit destination page', () => {
  let editDestinationPage

  beforeEach(() => {
    editDestinationPage = new EditDestination()
    editDestinationPage.visit()
  })

  it('The I see an image, and a form to edit the name and description', () => {
    helper.waitForElementVisibility(editDestinationPage.self.image)
    helper.waitForElementVisibility(editDestinationPage.form.nameLabel)
    helper.waitForElementVisibility(editDestinationPage.form.nameInput)
    helper.waitForElementVisibility(editDestinationPage.form.descriptionLabel)
    helper.waitForElementVisibility(editDestinationPage.form.descriptionInput)
    helper.waitForElementVisibility(editDestinationPage.form.updateButton)
  })

  describe('When I submit the form less than minimum required character', () => {
    beforeEach(() => {
      editDestinationPage
        .form
        .submitFormAfterClearingAndFillingItWith('Ah', 'abcdefg')

      it('Then both input fields are wrapped in a .field_width_errors div', () => {
        helper.waitForElementVisibility(editDestinationPage.form.nameInputWithError)
        helper.waitForElementVisibility(editDestinationPage.form.descriptionInputWithError)
      })
    })

    describe('When successfully submitting for the form with a new name and description', () => {
      let destionationUrl
      const randonUuid = faker.random.uuid()
      const fiveRandomWords = faker.random.words(5)

      beforeEach(() => {
        browser.getCurrentUrl().then(url => {
          destionationUrl = url.replace('/edit', '')
        })

        editDestinationPage
          .form
          .submitFormAfterClearingAndFillingItWith(randonUuid, fiveRandomWords)

        it('Then I\'m redirected to the destination view page, and I see the update value', () => {
          const destination = new Destination()

          helper.waitForUrlNotToBeEqualToExpectedUrl(destionationUrl)
          helper.waitForTextToBePresentInElement(
            destination.self.heading, randonUuid
          )

          helper.waitForTextToBePresentInElement(
            destination.self.paragraph, fiveRandomWords
          )
        })
      })
    })
  })
})
