import HomePage from '../integration/PageObjects/HomePage'
const hp = new HomePage()

Cypress.Commands.add("visitTo", url => {
      cy.visit(url)
})


Cypress.Commands.add('locationChangesVerification', location_name =>{
        hp.locationDropDowntoggle().click()
        hp.selectLocation(location_name).click()
        hp.catchException()
        hp.verifyLocationSelected(location_name)
        hp.verifyURLShouldHaveAddedLocation(location_name)
        hp.scrollToProductDetails()
        hp.verifyLocationNamePresentsWithinProductName(location_name)
        cy.window().scrollTo('top')
})

Cypress.Commands.add('languageChangesVerification', (location_name, language) => {
        hp.locationDropDowntoggle().click()
        hp.selectLocation(location_name).click()
        hp.catchException()
        hp.languageList(language)
})