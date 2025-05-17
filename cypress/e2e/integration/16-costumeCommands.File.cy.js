/// <reference types="cypress"/>
import fs from "fs";
import path from "path";

// dry code//clean code
//overingineer
//separation of concerns


// arrow function has his own this scope 
// function callback for safty
// global makes accesible in the framewor
// parent, child, dualcommand, overwrited the existing commands

describe('Cypress Custom Commands', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend')
    cy.clickCard('HTML Elements')
  })

  it('Parent Command', () => {
    /* Parent Commands  can not be chain them // we use cy. to call them */
    // cy.get()
    // cy.url()
    // cy.title()
    // cy.wrap()
    // cy.visit()
    // cy.on()
    // cy.window()

    cy.selectDropdown('#company_dropdown1', 'Apple')

    cy.loginApp('randomEmail@gmail.com', 'TechGlobal')
  })


  // js docs // 2 double slash and 2 stars
  // js is loose type language
  // star(*)  is wild card
  //for complex functions
  //@example

  // loose type// documentation to specify if we are adding 2 numbers only so they know


  //important



  it('Child Command', () => {
    /* Child Commands */
    // .should()
    // .find()
    // .click()
    // all the action methods

    // Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {  fixed syntax
    //   const text = subject.text()
    //   cy.log(text)
    // }) same thing as below method

    cy.get('#main_heading').then(($el) => {
      const text = $el.text()
      cy.log(text)
    })

    cy.get('#main_heading').logText()

    cy.get('#main_heading').haveText('HTML Elements')

    cy.get('#main_heading').logText().haveText('HTML Elements') // error we can chain if does not return anything

    // cy.get().should('have.attr', 'target')
    // cy.get().should('have.attr', 'target', '_blank')

    // contains is a dual command

    cy.get('#main_heading').assertAttribute('id')
    cy.get('#main_heading').assertAttribute('id', 'main_heading')


    // env comns from node js its like config in java
    cy.log(Cypress.env('SITE_URL'))
   //cy.log(Cypress.env('SITE_URL', 'techglobal.com')) // we can override even if its static // we use dotenv instead
   // we dont want to put values to github// security reason
   // we use dotenv 
   //read the envirom var that i set static in my framework 
   //    cy.log(Cypress.env('UI_USERNAME'))
    cy.log(Cypress.env('UI_PASSWORD'))

    cy.log(Cypress.env('SITE_URL', 'https://www.google.com/')) // assign new url for this test only


    /*
 "test": "npx cypress run",
    "test:open": "npx cypress open",
    "test:config": "npm t -- --browser chrome --config viewportHeight=720,viewportWidth=1080 --headed",

    "npx cypress run", => npm t -- important (' --') always to make it work behaves like concatination +
    we combime npm and npx everything else is cypress runner
    
    */
  })
})
