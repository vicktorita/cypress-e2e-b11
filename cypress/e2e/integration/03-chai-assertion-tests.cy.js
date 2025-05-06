/// <reference types="cypress"/>

describe('', () => {
  it('Sample Chai Assertion', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements');

    cy.get('#hello_paragraph')
      .should('be.visible')
      .and('have.text', 'Hello World!');

    expect('Hello').eq('Hello');
    expect(true).eq(false);
    // expect it does not have cy so it executes first
  });
});