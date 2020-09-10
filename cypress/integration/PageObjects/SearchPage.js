class SearchPage
{
    showingResultsHeader(){
        return cy.get('div.results-for-wrap')
    }

    countResultText(){
        return cy.get('div.results-for').find('p')
    }

    displayingResults(){
        return cy.get('a.merchant')
    }

    noResultsFoundText(){
        cy.server().route('POST', 'https://apipdb2csearchpy.theentertainerme.com/pysearch/v1/merchant-search')
        .as('dataGetFirst');
        cy.get('div.col-12').find('p');
        cy.wait('@dataGetFirst').its('status').should('be', 200);
        return cy.get('div.col-12').find('p')
    }

    verifyCount(){
        cy.wait(4000)
        this.countResultText().invoke('text') 
        .then(text => {
          var count = parseInt(text.replace(/\D/g, ""));
          if (count >= 1){
            this.displayingResults().should($div => {
                expect($div).to.have.length(count);
            })
          }
          else{
            this.noResultsFoundText().invoke('text').should(result =>{
                expect(result).to.contain('No results found');
                expect(result).to.contain('Please try changing your search criteria.');
            })
          }
        })
    }
}

export default SearchPage