class HomePage 
{

    verifyTitleShouldBe(value){
        cy.title().should('include',value)
        return this
    }

    verifyURLShouldBe(value){
        cy.url().should('eq', value)
        return this
    }

    catchException(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    verifyProtocolShouldBe(value){
        cy.location('protocol').should('eq', value)
        return this
    }

    buyButton(){
        return cy.get('a.nav-link').contains('Buy')
    }

    hubButton(){
        return cy.get('a.nav-link').contains('The Hub')
    }

    searchField(){
        return cy.get('input[type = "search"]')
    }

    enterDataInSearchField(data){
        this.searchField().type(data).type('{enter}')
    }

    refreshPage(){
        return cy.reload()
    }

    navigateTo(key){
        return cy.go(key)
    }

    locationDropDowntoggle(){
        return cy.get('span.dropdown-toggle')
    }

    selectLocation(locationname){
        return cy.get('a').contains(locationname)
    }

    verifyLocationSelected(locationname){
        cy.get('span.selected_item').invoke('text').should(result =>{
            expect(result).to.equal(locationname)
        }) 
    }

    verifyURLShouldHaveAddedLocation(locationname){
        cy.url().should('include', locationname.toLowerCase())
        return this
    }

    scrollToProductDetails(){
        cy.get('div.col-12').first().scrollIntoView()
    }

    verifyLocationNamePresentsWithinProductName(location_name){
        cy.get('h2.product_name').invoke('text') 
        .then(text => {
            expect(text).to.contain(location_name);
            expect(text).to.contain('2020');
        })
    }

    scrollToLocationDropDown(){
        this.locationDropDowntoggle().scrollIntoView()
    }

    languageList(language){
        cy.get('li.list-inline-item').children().invoke('text') 
        .then(text => {
            expect(text).to.contain(language);
        })
    }
}

export default HomePage