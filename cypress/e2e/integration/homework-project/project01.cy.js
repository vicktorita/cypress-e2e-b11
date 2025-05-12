/// <reference types="cypress"/>

describe('Form- Elements Project', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.techglobal-training.com/frontend/form-elements');
    });

    it('TC01 - Validate the Contact Us Information', ()=>{
      cy.get('.is-size-3').should('have.text', 'Contact Us');
      cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
      cy.get('#email').should('have.text', 'info@techglobalschool.com');
      cy.get('#phone-number').should('have.text', '(224) 580-2150');

    });

    it('TC02 - Validate the Full name input box', ()=>{
     cy.get('label[for ="name"]')
     .should('be.visible')
     .and('contain.text', '*')
     .and('have.text', 'Full name *');

     cy.get('input[placeholder ="Enter your full name"]')
     .should('have.attr','placeholder', 'Enter your full name');
    });

    it('TC03 - Validate the Gender radio button', ()=>{
      cy.get('.control > label[class = "label"]')
      .should('be.visible')
      .and('contain.text', '*')
      .and('have.text', 'Gender *');

      const expectedOptions = ['Male', 'Female', 'Prefer not to disclose'];

      cy.get('.radio').should('have.length', 3).each((el, index) => {
        expect(el).to.be.visible;
        expect(el.text()).equal(expectedOptions[index]);
        cy.wrap(el).should('be.visible').and('have.text', expectedOptions[index]).and('not.be.checked');
       
      
        cy.wrap(el)
        .find('input[type="radio"]')
        .should('be.enabled')
    
        cy.get('input[type= "radio"]').eq(0).check().should('be.checked');
        cy.get('input[type= "radio"]').eq(1).should('not.be.checked');
        cy.get('input[type= "radio"]').eq(2).should('not.be.checked');

        cy.get('input[type= "radio"]').eq(1).check().should('be.checked');
        cy.get('input[type= "radio"]').eq(0).should('not.be.checked');
        cy.get('input[type= "radio"]').eq(2).should('not.be.checked');
      });
      
    })

    it('TC04 - Validate the Address input box', ()=>{
      cy.get('input[placeholder="Enter your address"]').should('be.visible')
      .and('have.attr','placeholder', "Enter your address")
      cy.get('label[class ="label"] ').contains('Address')
      .should('have.text', 'Address')
      .and('not.contain', '*');
    })

    it('TC05 - Validate Email input box', ()=>{
      cy.get('input[placeholder="Enter your email"]').should('be.visible')
      .and('have.attr','placeholder', "Enter your email")
      cy.get('label[class ="label"] ').contains('Email')
      .should('have.text', 'Email *')
      .and('contain', '*');
    })

    it('TC06 - Validate Phone input box', ()=> {
      cy.get('input[placeholder="Enter your phone number"]').should('be.visible')
      .and('have.attr','placeholder', "Enter your phone number")
      cy.get('label[class ="label"] ').contains('Phone')
      .should('have.text', 'Phone')
      .and('not.contain', '*');
    })

    it('TC07 - Validate the Message text area', ()=> {
      cy.get('.textarea').should('be.visible')
      .and('have.attr','placeholder', "Type your message here...");
      cy.get('label[class ="label"] ').contains('Message')
      .should('have.text', 'Message')
      .and('not.contain', '*');
    })
    it('TC08 - Validate the Consent checkbox', ()=> {
      cy.get('.checkbox')
      .should('have.text', ' I give my consent to be contacted.')
      .and('be.visible')
      .and('not.be.disabled');

      cy.get('input[type = "checkbox"]')
      .should('have.attr', 'required')
      

      cy.get('input[type = "checkbox"]')
      .check()
      .and('be.checked')
      .uncheck()
      .and('not.be.checked')
    
    })

    it('TC09 - Validate Submit button', () =>{
      cy.get('button[type = "submit"]')
      .should('be.visible')
      .and('be.enabled')
      .and('have.text', 'SUBMIT')
    })

    it('TC10 - Validate the form submition', ()=>{
      cy.get('input[placeholder ="Enter your full name"]')
      .type('Victoria Jardan');
      cy.get('input[type= "radio"]').eq(1).check();
      cy.get('input[placeholder="Enter your address"]').type('Key West, FL');
      cy.get('input[placeholder="Enter your email"]').type('moonndsun@gmail.com');
      cy.get('input[placeholder="Enter your phone number"]').type('305-393-4609');
      cy.get('.textarea').type('Learning Cypress');
      cy.get('input[type = "checkbox"]').check();
      cy.get('button[type = "submit"]').click();
      cy.on('uncaught:exception', () => {
        return false
      });
      cy.get('.mt-5').should('have.text', 'Thanks for submitting!')





    })

})