/// <reference types="Cypress" />
import userData from '../../fixtures/data/user.json'
import loginPage from '../../model/login'

Cypress.Commands.add('loginAccount', function () {
  cy.get(loginPage.login).click()
  cy.get(loginPage.usernameInput).type(userData.email)
  cy.get(loginPage.passwordInput).type(userData.password)
  cy.get(loginPage.loginBtn).click()
  cy.url().should('include', '/bank/main.jsp')
})
