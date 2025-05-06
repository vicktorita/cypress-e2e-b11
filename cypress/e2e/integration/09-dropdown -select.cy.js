/// <reference types="cypress"/>

describe("Dropdown select", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.contains(".card", "Dropdowns").click();
    });
  
    it("Select product & color", () => {
      // cy.get('#product_dropdown')
      //   .select('Apple Watch Series 8')// by value, by text by index// starts with 1// ussualy visable exact text

      // with select just put the text dont look for locator
      // only look for selector/locator when there is no select tag
      //   .should('have.value', 'Apple Watch Series 8');
  
      // cy.get('#color_dropdown')
      //   .select('Yellow')
      //   .should('have.value', 'Yellow');
  
      cy.get("#product_dropdown").select("Apple Watch Series 8");
      cy.get("#color_dropdown").select("Yellow");

      // use pseudo classes  option:selected chechs for selected action
  
      cy.get("#product_dropdown option:selected").should(
        "have.text",
        "Apple Watch Series 8"
      );
      cy.get("#color_dropdown option:selected").should("have.text", "Yellow");
    });
  
    //it.only only runs that text
    it("Select product & color & delivery", () => {
      cy.get("#product_dropdown option:selected").should(
        "contain.text",
        "Select"
      );
      cy.get("#product_dropdown").select("Apple Watch Series 8");
      cy.get("#product_dropdown option:selected").should(
        "have.text",
        "Apple Watch Series 8"
      );
      // should.have didnt work // try conatins or includes
      cy.get("#color_dropdown option:selected").should("contain.text", "Select");// select before choosing everything
      cy.get("#color_dropdown").select("Yellow");
      cy.get("#color_dropdown").select("Silver");
      cy.get("#color_dropdown option:selected").should("have.text", "Silver");
  
      cy.get("#shipment_dropdown").click();
      cy.get('span[aria-label="Delivery"]').click();
    });
  
    [
      {
        product: "Apple Watch Series 8",
        color: "Yellow",
        delivery: "Delivery",
      },
      {
        product: "iPad Pro 11",
        color: "Green",
        delivery: "Pick up",
      },
      {
        product: 'MacBook Pro 13',
        color: 'Silver',
        delivery: 'Pick up'
      }
    ].forEach(({ product, color, delivery }) => {
      it(`Validate the result of selections for ${color} ${product}`, () => {
        /*
          Select "iPad Pro 11"
          Select "Green"
          Select "Pick up"
          Click on "SUBMIT" button
          Validate "Your Green iPad Pro 11 is ready to be picked up." is visible
          Your Green iPad Pro 11 will be delivered to you.
        */
        const deliveryMessage =
          delivery === "Pick up"
            ? "is ready to be picked up."
            : "will be delivered to you.";
  
        cy.get("#product_dropdown").select(product);
        cy.get("#color_dropdown").select(color);
  
        cy.get("#shipment_dropdown").click();
        cy.get(`span[aria-label="${delivery}"]`).click();
        cy.get("#submit").click();
  
        const expectedResult = `Your ${color} ${product} ${deliveryMessage}`;
  
        cy.get("#result").should("have.text", expectedResult);
  
        cy.on('uncaught:exception', () => {
          return false
        });
      });
    });
  });