/// <reference types = "Cypress"/>

import HomePage from '../PageObjects/HomePage'
import SeachPage from '../PageObjects/SearchPage'

const hp = new HomePage()
const sp = new SeachPage()
const baseurl = Cypress.config().baseUrl

describe('Entertainer Basics Steps', () => {
    let browseData
    beforeEach(function(){
        cy.fixture('example').then((data)=> {
            browseData = data
        })
    })

    before(function(){
        hp.catchException()
        cy.visitTo(baseurl)
    })

    it('Verify Title of The Entertainer', () => {
        const title = browseData.title
        const protocol = browseData.protocol
        hp.verifyTitleShouldBe(title)
        hp.verifyProtocolShouldBe(protocol)
    })

    it('Verify "Buy" Button Working and Verification', () => {
        hp.buyButton().should('not.be.disabled')
        hp.buyButton().click()
        hp.catchException()
    })

    it('Verify "Hub" Button Working and URL Verification', () => {
        const hub_url = browseData.hub_url
        hp.catchException()
        cy.window().scrollTo('top')
        hp.hubButton().should('not.be.disabled')
        hp.hubButton().click()
        hp.verifyURLShouldBe(hub_url)
        hp.navigateTo('back')
        
    })

    it('Search Results For Location and Verify', () => {
        const location = browseData.location_to_search
        hp.searchField().should('not.be.disabled')
        hp.catchException()
        hp.enterDataInSearchField(location)
        sp.showingResultsHeader().contains(location)
        sp.verifyCount()
    })
})