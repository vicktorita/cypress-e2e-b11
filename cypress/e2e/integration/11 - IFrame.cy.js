/// <reference types="cypress"/>

describe("Handling iFrames", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.contains(".card", "IFrames").click();
    });
  

    // in iframe we need to access frame first
    // property of frame is iframe
    it("iFrames", () => {
      cy.get("#form_frame")  // id of the frame
        .its("0.contentDocument.body")  // its method retrieves the property of an element
        .find("#first_name")// id of element nedded
        .type("myName");
    });
  
    /**
     * Go to https://techglobal-training.com/frontend/
     * Click on the "IFrames" card
     * Enter "John" into the first name input box
     * Enter "Doe" into the last name input box
     * Click on the "SUBMIT" button
     * Validate the result equals "You entered: John Doe"
     */
  
    it("iFrame Test Case", () => {
  
      const arr = ["John", "Doe"];
  
      // SELECT first_name, last_name FROM namesTable
  
      // "Alina, alineLastName, 1 , 12312321"
  
      cy.get('#form_frame')// unique id only
      .its('0.contentDocument.body')
      .find('[id$="_name"]').each(($el, index) => {
        cy.wrap($el).type(arr[index])
      })
  
      cy.get('#form_frame')
      .its('0.contentDocument.body')// access the property
      .find('#submit').click()
  
      cy.get('#result').should('have.text', `You entered: ${arr.join(' ')}`) // arr[0] arr[1]  same thing
      
    });
  });