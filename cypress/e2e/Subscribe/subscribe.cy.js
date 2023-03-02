/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import subscribePage from '../../model/Subscribe/subscribe'
let email = faker.internet.email()
describe('Subscribe', () => {
  it('Subscribe valid email should be success', function () {
    cy.get(subscribePage.linkSubscribe).click()
    cy.get(subscribePage.email).type(email)
    cy.get(subscribePage.btnSubscribe).click()
    cy.get(subscribePage.message).should('contain', 'Thank you. Your email ' + email + ' has been accepted')
    cy.url().should('include', '/doSubscribe')
  })
})
