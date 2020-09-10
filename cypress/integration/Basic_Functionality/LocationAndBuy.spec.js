/// <reference types = "Cypress"/>

import HomePage from '../PageObjects/HomePage'
const hp = new HomePage()
const baseurl = Cypress.config().baseUrl


describe('Entertainer Locations URL and Product Verification', () => {
    before(function(){
        hp.catchException()
        cy.visitTo(baseurl)
    })

    it('Verification of Singapore', ()=>{
        cy.locationChangesVerification('Singapore')
    })

    it('Verification of Riyadh', ()=>{
        cy.locationChangesVerification('Riyadh')
    })

    it('Verification of Durban', ()=>{
        cy.locationChangesVerification('Durban')
    })

    it('Verification of Malta', ()=>{
        cy.locationChangesVerification('Malta')
    })

    it('Verification of Malaysia', ()=>{
        cy.locationChangesVerification('Malaysia')
    })
})


describe('Entertainer Locations Language Verification', () => {
    before(function(){
        hp.catchException()
        cy.visitTo(baseurl)
    })

    it('Verification of Riyadh Language', ()=>{
        cy.languageChangesVerification('Riyadh', 'Ar')
    })

    it('Verification of Qatar Language', ()=>{
        cy.languageChangesVerification('Qatar', 'Ar')
    })

    it('Verification of Jeddah Language', ()=>{
        cy.languageChangesVerification('Jeddah', 'Ar')
    })

    it('Verification of Oman Language', ()=>{
        cy.languageChangesVerification('Oman', 'Ar')
    })

    it('Verification of Cyprus Language', ()=>{
        cy.languageChangesVerification('Cyprus', 'El')
    })

    it('Verification of Hong Kong Language', ()=>{
        cy.languageChangesVerification('Hong Kong', 'Cn')
    })
})
