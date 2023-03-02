/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import subscribePage from '../../fixtures/model/Subscribe/subscribe'
let password = faker.random.numeric(8)
describe('Subscribe', () => {
  beforeEach(() => {
    cy.loginDashboard()
  })

  it('Subscribe valid email should be success', function () {
    cy.get(subscribePage.linkSubscribe).click()
    cy.get(subscribePage.email).type(faker.internet.email())
    cy.get(subscribePage.btnSubscribe).click()
    cy.url().should('include', '/subscribe.jsp')
  })
})
