// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('clickCard', (link) => { 
    cy.contains('.card, [class*="projectCard"]', link).click();

   })

// select tag only
Cypress.Commands.add('selectDropdown', (locator, option) => {
  cy.get(locator).select(option)
})

                        //method name                  callback function // 
   Cypress.Commands.add('checkOptionAndValidateOthers', (optionToCheck, expectedTexts) =>{

    cy.contains(optionToCheck).find('input').check().should('be.checked')

    expectedTexts.filter(option => option !== optionToCheck).forEach(uncheckedOption => {
    cy.contains(uncheckedOption).find('input').should('not.be.checked');

   })
})

/**
 * Create a Cypress function that will name 'login'
 *
 * This function will get 2 arguments ( email, and name )
 *
 * It will enter the user email, and name on Focus section and click on the submit button
 */
Cypress.Commands.add('loginApp', (email, name) => {
  cy.get('[name="email"]').type(email)
  cy.get('.mb-3 > input').clear().type(name)/// bug thats why we clear it
  cy.get('.mb-3 + button').click()
})

 
/**
 * Adds two numbers.
 *
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The sum of the two numbers.
 *
 * @example
 * add(2, 5)
 * // Returns 5
 *
 * @example
 * add(7, 3)
 * // Return 10
 */
export function add(a, b) {
  return a + b
}

//  add(1, 2)         => 3
// add('Tech', 'Global')    => TechGlobal
//
// -- This is a child command --
                                                           // always subject represent the parent comment, it does not have to be subject name
                                                           //any name, second argument is optional
                                                           // subject behaves like then. retrieves something

// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })


//  we can make any additional argument optional when is null
                                 // true means any element or action or url
                                                         
Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
  const text = subject.text()
  cy.log(text)

  return cy.wrap(subject)  // wrap so we can make cypress
})


/* cy.get('#main_heading').then((subject) =>{
    cy.wrap(subject).should('have.text', expectedText)  // implicit assertion
      expect(subject).to.have.text(expectedText)    /// explicit assertion

    })
    */
Cypress.Commands.add(
  'haveText',
  //            only webelement
  { prevSubject: 'element' },
  (subject, expectedText) => {
    cy.wrap(subject).should('have.text', expectedText)
    expect(subject).to.have.text(expectedText)
  }
)

/**
 * Create a child custom command that will validate the attribute and the value of previous subject
 */

/**
 * Custom Cypress command to assert an attribute on a DOM element
 * If no value is provided, it checks only for the attribute's existence.
 */
Cypress.Commands.add(
  'assertAttribute',
  { prevSubject: true },
                      //  give value to value
  (subject, attribute, value = null) => {
    if (value === null) {
      cy.wrap(subject).should('have.attr', attribute)
    } else {
      cy.wrap(subject).should('have.attr', attribute, value)
    }
  }
)


// cy.get('#main_heading').then((subject) => {

// })
//
// -- This is a dual command --

// create same as child command only is when you put prevSubject just say optional
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

