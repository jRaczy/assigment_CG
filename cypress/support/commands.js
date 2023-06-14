Cypress.Commands.add('runOnMobileView', () => {
    if(Cypress.env('run_on_mobile') == true){
        cy.viewport(360, 800)
    }
});

Cypress.Commands.add('goBackAfterSelectingPaymentMethod',() => {
    Cypress.env('run_on_mobile') == true ?
      cy.get('[data-at="bankid-loader-cancel"]').click() :
      cy.get('[data-at=""]').click()
});

Cypress.Commands.add('acceptCookies',() =>{
    cy.contains('Godkänn').click();
});

Cypress.Commands.add('verifyStartBank',() => {
    Cypress.env('run_on_mobile') == true ?
      cy.contains('Starta din BankID-app').should('exist') : 
      cy.get('[data-at="input-personalNumber"]').should('be.visible');
});