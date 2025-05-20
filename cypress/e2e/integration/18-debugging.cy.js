/// <reference types="cypress"/>

describe('Debugging', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend')
    cy.clickCard('HTML Elements')
  })

  it('cy.wait() - Hard wait', () => {

    cy.get('#checkbox_1').check()

    // cy.wait(10000) only debbugging putposes cy.wait()

    cy.get('#checkbox_2').check()
  })

  it('cy.pause() - Debugging using pause', () => {

    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Login Function')

    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    // cy.pause() better than cy.wait


    cy.get('#password').type(Cypress.env('UI_PASSWORD'))

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })

  it('cy.debug() - Debugging using debug', () => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Login Function')

    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    cy.get('#password').type(Cypress.env('UI_PASSWORD'))

    cy.get('#login_btn').click()

    cy.debug()
    //fn f8 trigger the debugging in inspect // source

    // in console

    /**
     * Sometimes, the pause button on the Sources tab may not work as expected.
     * Instead, you can use the debugger command in JavaScript to trigger the pause whenever you need it.
     * 
     * @example
     * 
     * setTimeout(() => {
     *  debugger
     * }, 2000)
     */

    cy.get('#success_lgn').should('be.visible')
  })
})