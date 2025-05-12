/// <reference types="cypress"/>


// alerts are not port from html dom
// it triggers from browser that only knows javascript js

// any browser exemple :chrome dev tools (api ) can manipulate with the whole browser for developers
// sdet can not manipulate the browser

// cypress handles by default the ok button at allerts but if u have to get the text or validate the text and handle it


// event listener = some events expected to happen in a webpage


describe("Handling Alerts", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard("Alerts");
    });
  
    it("Handling the Warning Alert", () => {
      cy.on("window:alert", (str) => {
        console.log(`My warning alert text content is: ${str}`);
        expect(str).to.eq("You are on TechGlobal Training application.");
      });
  
      cy.get("#warning_alert").click(); // does not matter when its clicking in this case bcz the event listener does not get trigger 
      // until we need it to handle this event
      //cypress will wait only till we need it
      // it gets store in event loop we will use it only we need it

      // cy.get('#warning_alert').click()
      // cy.get('#warning_alert').click()
      // cy.get('#warning_alert').click()
      // cy.get('#warning_alert').click()
      // cy.get('#warning_alert').click()
    });
  
    /**
     * CONFIRMATION ALERT
     * 1. Go to https://techglobal-training.com/frontend/
     * 2. Click on the "Alerts" card
     * 3. Click on the "Confirmation alert" button
     * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
     * 5. Click on the "Cancel" button on the alert
     * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
     */
  
    it("Handling the Confirmation Alert", () => {
  

      // event listener
      cy.on('window:confirm', (str) => {  // window:confirm
        expect(str).to.eq('Would you like to stay on TechGlobal Training application?')
        return false /// to click on cancel button ... we need to return false 
      })
  
      cy.get('#confirmation_alert').click()
      cy.get('#action').should('have.text', 'You rejected the alert by clicking Cancel.')

    });
  

    // do not copy from chatgpt .. its gonna just add a html and can be cached, copy put it in file  and after in the text



    it('Handling Prompt Alert', () => {
//to handle we need cy.window comes // cy.stub() from sinon



      // cypress does not know the answer of the promp allert
      // that why does not handle the allert

      // we can not use cy.on() on this

    //cy.window/// we access the window object


      // Clicks cancel for the prompt error
  
      // cy.window().then((win) => {  
      //   cy.stub(win, 'prompt').returns(null).. window object, function we want is prompt// returns nulll idf we dont want to click on anything
      // do nothing

      // })
      //cy.get('#'prompt_alert).click();
  
      // cy.window().then((win) => {
      //   cy.stub(win, 'prompt')
  
      //   return false
      // })

       //cy.get('#'prompt_alert).click();

       
      // Clicks okay and sends message through the prompt
      // cy.window().then((win) => {
      //   cy.stub(win, 'prompt').returns('TechGlobal school message')
      // })
  
      // cy.window().then((win) => {
      //   cy.stub(win, 'prompt').returns('')
      // })
  
      // Validate the alert message and click cancel
      // cy.window().then((win) => {
      //   cy.stub(win, 'prompt').callsFake((message) => {
      //     console.log(message)
      //     expect(message).to.eq('What would you like to say to TechGlobal?')
  
      //     return null
      //   })
      // })
  
  
  
      // Validate the alert message and enter your prompt
      cy.window().then((win) => {
        cy.stub(win, 'prompt').callsFake((message) => {
          expect(message).to.eq('What would you like to say to TechGlobal?')
  
          return 'My Message'
        })
      })
  
      cy.get('#prompt_alert').click()
  
    })
  });