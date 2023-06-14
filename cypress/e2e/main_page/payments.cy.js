describe('Code base main page tests', () => {
    const url = Cypress.env('base_url');
    const depositButton = '[data-at="deposit-and-play-homepage"]';
    const submitButton = '[data-at="deposit-login-submit-button-noaccount"]';
    const amountInput = '[data-at="amount-input-label"]';
    const trustlySwishPaymentMethod = '[data-at="TRUSTLY SWISH-paymentmethod-deposit-and-play"]';
  
    beforeEach(() => {
      cy.setCookie('integrationtesting', 'true');
      cy.runOnMobileView();
    });
  
    it('Swiss bank payment with proper money amount', () => {
      cy.visit(url);
      cy.get(depositButton).click();
      cy.get(submitButton).should('be.disabled');
      cy.get(amountInput).type('200');
      cy.get(submitButton).click();
      cy.get(trustlySwishPaymentMethod).click();
      cy.verifyStartBank();
      cy.goBackAfterSelectingPaymentMethod();
      cy.get(trustlySwishPaymentMethod).should('be.visible');
    });
  
    it('Swiss bank payment exceeds the maximum deposit limit', () => {
      cy.visit(url);
      cy.get(depositButton).click();
      cy.get(submitButton).should('be.disabled');
      cy.get(amountInput).type('200000');
      cy.contains('Maximum: ' + Cypress.env('max_deposit_amount')).should('be.visible');
      cy.get(submitButton).should('be.disabled');
    });
  });
  