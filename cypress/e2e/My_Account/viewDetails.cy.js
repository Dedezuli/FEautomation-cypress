/// <reference types="Cypress" />
import myAccountPage from '../../model/myAccount'

describe('Subscribe', () => {  
  beforeEach(() => {
  cy.visit('https://testfire.net')
  cy.loginAccount()
})
  it('View Account History should be success', function () {
    cy.get(myAccountPage.accountLink).click()
    cy.get(myAccountPage.listAccounts).select('800003')
    cy.get(myAccountPage.btnGetAccount).click()
    cy.url().should('include', '/bank/showAccount?listAccounts=800003')
  })
})
