/// <reference types="cypress"/>

//chia liabrary for assertion
//default assertions, cypress runs an assertion before u run an action, for exemple get()
//  checks is element existin dom and visibale  and clickable by default

// implicit assertions cypres retry the assertion up to 4 secons by default// number can be changed // with should()

// explicit assertions is expect() does not have retry 
// 
// in real world we put in describe a functionality

describe("Cypress Assertion", () => {
    beforeEach(() => {
        // even visit has a default assertion it waits till this urls in load

      cy.visit("https://www.techglobal-training.com/");
    });
  
    it("Default Assertions 1", () => {
      cy.get('img[class^="Footer_logo"]')// if fails becz its not into view
        .scrollIntoView()
        //.should('exist')
        //.and('be.visible')
        .and("have.attr", "alt", "Tech Global Logo");
    });
  
    it("Default Assertions 2", () => {
      cy.get("button")
        .contains("Mock Interviews") 
        //.should('be.enabled')// clickable or not
        .click();// by default checks if its clickable or not// terms and conditions

  
      cy.url().should("eq", "https://www.techglobal-training.com/login");
    });
    //states of an element visability. clickability enabbility
  
    it("Explicit Assertions with then()", () => {
      cy.get("#dropdown-testing").then((el) => {
        // then() is used to convert Cypress selector to jQuery object
        // si it returns something
        const text = el.text(); // jQuery method
  
        // These logs cannot be done with Cypress commands
        cy.log("Element color is", el.css("color"));
        cy.log("Element background color is", el.css("background-color"));
        cy.log(text);

        //locate the section// go to stylesand u can see the backroung color
        // font size as well, spacing between the letters
  
        // Explicit Assertiions
        expect(el).to.be.visible;
        expect(text).eq("Testing");
  
        // wrap() is used to convert jQuery object back to Cypress chainable
        cy.wrap(el).should("be.visible").and("have.text", "Testing");
      });
    });
  
    it("Explicit Assertions with invoke()", () => {
        // good case to use when u have a hidden element and u use show() to show the element
      cy.get("#dropdown-testing").should("have.text", "Testing");
  
      cy.get("#dropdown-testing").invoke("text").should("eq", "Testing");
  
      cy.get("#dropdown-testing").then((el) => {
        // In case you need multiple assertions
        expect(el.text()).eq("Testing");
        expect(el.attr("class").includes("button"));
      });
  
      // use invoke when u need to extract some info

      cy.get("#dropdown-testing")
        .invoke("text")
        .then((txt) => {
          expect(txt).eq("Testing");
          cy.log(txt);
        });
    });
  
    it("Explicit Assertions with each() 1", () => {
      /*
      Hover over Exercises Nav Item
      Validate below option are visible, clickable, and make sure their text are correct
        Java Exercises
        JS Exercises 
      */
    /// usefulll 

      const expectedOptions = ["Java Exercises", "JS Exercises"];
  
      cy.get("#dropdown-exercises").realHover();
  
      cy.get('a[id*="j"]').should('have.length', 2).each((el, index) => {
        // Explicit assertions
        expect(el).to.be.visible;
        expect(el.text()).eq(expectedOptions[index]);
  
        // Implicit assertions
        cy.wrap(el).should('be.visible').and('have.text', expectedOptions[index]);
      })
  
      // Primitive way
      // cy.get("#java-option")
      //   .should("be.visible")
      //   // .and("be.enabled")
      //   .and("have.text", "Java Exercises");
  
      // cy.get("#js-option")
      //   .should("be.visible")
      //   // .and("be.enabled")
      //   .and("have.text", "JS Exercises");
    });
  
    it.only('Explicit Assertions with each() 2', () => {
      /*
      Validate there 5 social media icons are visible in the footer
      Validate all the links has "techglobal" in href attribute
      Validate all the links has target attribute value is "_blank"
      */

     cy.get('.Footer_socials__7h4n1').then(el =>{
      console.log(el)
     })

    });
  });