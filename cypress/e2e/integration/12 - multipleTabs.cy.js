/// <reference types="cypress"/>

describe("Handling Multiple Windows", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard("Multiple Windows"); // locates in commands.js
    });
  
    it("Tabs", () => {
      cy.get("#microsoft").should("have.attr", "target", "_blank");  /// do not click... will not work

  
      cy.get("#microsoft").invoke("removeAttr", "target").click(); // to open in the same tab // we remove the attribute target
    });
  
    /**
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Multiple Windows" card
     * Click on the "Apple" link
     * Validate that the child window title is "Apple"
     * Navigate back to main page
     * Validate title contains "techglobal"
     */
    it('Test Case', () => {
      cy.get('#apple').invoke('removeAttr', 'target').click()
      cy.title().should('contain', 'Apple')// for title is contain for webelement have txt
    
      cy.go(-1) // go back 
    
      cy.title().then((title) => {// no jquery// title is a string
        cy.wrap(title.toLowerCase()).should('contain', 'techglobal')//put to lowercase to 
      })
    })
  
  
  });