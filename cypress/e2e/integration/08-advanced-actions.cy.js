/// <reference types="cypress"/>

describe('Cypress Advanced Actions', () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.contains(".card", "Actions").click();
    });
  
    it('Type and clear actions', () => {
  
      let query = 'Apple';
      
      cy.get('#input_box')
        // .should('exist') is useless since we have many other assertions
        // if its visible means it exists
        // footer exists but not showed on the window, u have to scroll down
        // be visible. .be enable. exists is more a component testing
        // soft assortion
        .and('be.visible')
        .and('be.enabled') // be able to input text
        .and('have.attr', 'placeholder', 'Enter your message...')
        .and('have.attr', 'value', '')
        .type(query) // .type('Techglobal'); make dinamic put query
                     // to be able to update only in 1 place
        .should('have.attr', 'value', query)
        .clear()
        .should('have.attr', 'value', '')
        .and('be.empty')
  

        // selector is in cypress is chainable ()
   //     locator is playwrite and selenium that we can store the element into a variable
      
   //.then is converty cypress in javascript object
   //use .then and .wrap
   
   // cy.get('#input_box').then(($inputElement) => {
      //   const placeholder = $inputElement.attr('placeholder');
      //expect(placeholder) .to.include('Enter');
      //$inputElement.val('techglobal')/// changes the placeholder value
      //expect($inputElement.val()).eq('techglobal');
      //   cy.log(placeholder);
  
      //   cy.wrap($inputElement); // Cypress chainable
      // })
    })
  
    it('Right-Click and Double-Click', () => {
      cy.get('#right-click').rightclick();
      cy.get('#right_click_result')
        .should('be.visible')
        .and('have.text', 'You right-clicked on a button!');
  
      cy.get('#double-click').dblclick();
      cy.get('#double_click_result')
        .should('be.visible')
        .and('have.text', 'You double-clicked on a button!');
    });
  
    it('Drag and Drop', () => {
      cy.get('#drag_element').drag('#drop_element'); 
      
      // requires 4tw/cypress-drag-drop dependency
      /// needs to be imported in e2e.js
      
      cy.get('#drag_and_drop_result')
        .should('be.visible')
        .and('have.text', 'An element dropped here!')
    });
  
    it('Hover Over', () => {
      // cy.get('#dropdown-testing').trigger('mouseover'); // does not work and requires cypress-real-events dependency

      // all tests has to have assertions
      cy.get('#dropdown-testing').realHover();
      cy.get('#backend-option').click();
      cy.url().should('include', 'backend');
  
      // cy.on() here is used to listen if we get any "uncaught:exception"
      // and ignore it by returning false
  
      cy.on('uncaught:exception', () => {
        return false
      });
    });
  })