/// <reference types="Cypress" />
import userData from '../../fixtures/data/user.json'
import loginPage from '../../fixtures/model/Login/login'

describe('Login Sanity', () => {
  beforeEach(() => {
    cy.visit('https://testfire.net')
  })
  it('Input Valid Username and Password should be success', () => {
    cy.get(loginPage.login).click()
    cy.get(loginPage.usernameInput).type(userData.email)
    cy.get(loginPage.passwordInput).type(userData.password)
    cy.get(loginPage.loginBtn).click()
    cy.url().should('include', '/bank/main.jsp')
  })
  it('Input invalid Username and Password should be fail', () => {
    cy.get(loginPage.login).click()
    cy.get(loginPage.usernameInput).type(userData.password)
    cy.get(loginPage.passwordInput).type(userData.password)
    cy.get(loginPage.loginBtn).click()
    cy.get(loginPage.mainMessage)
      .should('be.visible')
      .should(
        'contain',
        "Login Failed: We're sorry, but this username or password was not found in our system. Please try again."
      )
    cy.url().should('include', '/login.jsp')
  })
  it('Input Username and invalid Password should be fail', () => {
    cy.get(loginPage.login).click()
    cy.get(loginPage.usernameInput).type(userData.email)
    cy.get(loginPage.passwordInput).type(userData.email)
    cy.get(loginPage.loginBtn).click()
    cy.url().should('include', '/login.jsp')
  })
  it.skip('Not input Username and Password should be fail', () => {
    cy.get(loginPage.login).click()
    cy.get(loginPage.usernameInput)
    cy.get(loginPage.passwordInput)
    cy.get(loginPage.loginBtn).should('have.disabled', 'disabled')
    cy.url().should('include', '/login.jsp')
  })
})
