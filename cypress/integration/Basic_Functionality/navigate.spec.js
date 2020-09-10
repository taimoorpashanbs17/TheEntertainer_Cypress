

describe('Entertainer Basics Steps', () => {
    it('Verify Title of The Entertainer', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
      cy.visit('https://www.theentertainerme.com/')
      cy.title().should('include', 'the ENTERTAINER - Buy One Get One Free offers on Dining, Restaurants, Spas, Hotels, Waterpark, Dessert Safari & Gyms')
      cy.location('protocol').should('eq', 'https:')
    })

    it('Verify "Buy" Button Working and Verification', () =>{ 
      cy.get('a.nav-link').contains('Buy').should('not.be.disabled')
      cy.get('a.nav-link').contains('Buy').click()
    })

    it('Hub Button is working and URL Verification', () =>{
      cy.visit('https://www.theentertainerme.com/')
      cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
      cy.get('a.nav-link').contains('The Hub').should('not.be.disabled')
      cy.get('a.nav-link').contains('The Hub').click()
      cy.url().should('eq', 'https://hub.theentertainerme.com/blog')

    })

    it('Search Results For London', () =>{
      cy.visit('https://www.theentertainerme.com/')
      cy.get('input[type = "search"]').should('not.to.disabled')
      cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
      cy.get('input[type = "search"]').type('London').type('{enter}')
    })
  })