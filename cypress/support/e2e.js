// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@4tw/cypress-drag-drop'
import 'cypress-real-events'
import 'cypress-mochawesome-reporter/register'
// import exec, { spawnSync } from 'child_process'
// import spawn from 'child_process'

const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()


beforeEach(() => {
  cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
})

before(() => {
  // exec('node index.js')
  // spawn('node index.js')
  cy.exec('node index.js')
  // cy.exec('react run')
})

// after(() => {
// exec('node index.js')
// spawn('node index.js')
// cy.exec('node index.js')
// cy.exec('react stop')
// })