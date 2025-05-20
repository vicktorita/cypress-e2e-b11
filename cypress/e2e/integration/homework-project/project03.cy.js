/// <reference types="cypress"/>

import BookingPage from "../../../pages/BookingPage.js"

describe('Project 03', ()=>{
 
  beforeEach(() => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Booking Function')
  })

  /*
  Navigate to https://techglobal-training.com/frontend/booking
Validate that the “One way” radio button is displayed enabled and selected by default
Validate that the “Round trip” radio button is displayed enabled and not selected by default
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed and disabled
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
  */ 
  const bookingPage = new BookingPage

  it('TC 01 - Validate the default Book your trip from', ()=>{
     bookingPage.getOnewayButton()
     .should('be.visible')
     .and('be.checked')
     bookingPage.getRoundTripButton()
     .should('be.visible')
     .and('not.be.checked')
     bookingPage.getCabinClassLabel().should('have.text' , 'Cabin Class')
     bookingPage.getCabinClassDropdown().should('be.visible')
     bookingPage.getFromLabel().should('have.text', 'From')
     bookingPage.getFromDropdown().should('be.visible')
     bookingPage.getToLabel().should('have.text', 'To')
     bookingPage.getToDropdown().should('be.visible')
     bookingPage.getDepartLabel().should('have.text', 'Depart')
     bookingPage.getDepartDropdown().should('be.visible')
     bookingPage.getReturnLabel().should('have.text', 'Return')
     bookingPage.getReturnDropdown().should('be.visible')
     bookingPage.getNumberOfPassengersLabel().should('have.text', 'Number of passengers')
     bookingPage.getNumberOfPassengersDropdown().children().select('1').should('be.visible').and('have.value', '1')
     bookingPage.getPassenger1Label().should('have.text', 'Passenger 1')
     bookingPage.getPassenger1Dropdown().children().select('Adult (16-64)').should('be.visible').and('have.value', 'Adult (16-64)')
     bookingPage.getBookButton().should('be.visible').and('be.enabled')
  }) 

  /*
 Navigate to https://techglobal-training.com/frontend/booking
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
  */
  it('TC 02 - Validate the Book your trip form when Round trip is selected', ()=>{
 
    bookingPage.getRoundTripButton().check()
    bookingPage.getRoundTripButton().should('be.checked')
    bookingPage.getOnewayButton().should('not.be.checked')
     bookingPage.getCabinClassLabel().should('have.text' , 'Cabin Class')
     bookingPage.getCabinClassDropdown().should('be.visible')
     bookingPage.getFromLabel().should('have.text', 'From')
     bookingPage.getFromDropdown().should('be.visible')
     bookingPage.getToLabel().should('have.text', 'To')
     bookingPage.getToDropdown().should('be.visible')
     bookingPage.getDepartLabel().should('have.text', 'Depart')
     bookingPage.getDepartDropdown().should('be.visible')
     bookingPage.getReturnLabel().should('have.text', 'Return')
     bookingPage.getReturnDropdown().should('be.visible')
     bookingPage.getNumberOfPassengersLabel().should('have.text', 'Number of passengers')
     bookingPage.getNumberOfPassengersDropdown().children().select('1').should('be.visible').and('have.value', '1')
     bookingPage.getPassenger1Label().should('have.text', 'Passenger 1')
     bookingPage.getPassenger1Dropdown().children().select('Adult (16-64)').should('be.visible').and('have.value', 'Adult (16-64)')
     bookingPage.getBookButton().should('be.visible').and('be.enabled')
   
  })
/*
Navigate to https://techglobal-training.com/frontend/booking
Select the “One way” radio button
Select “Business” for the “Cabin Class” dropdown
Select “Illinois” for the “From” dropdown
Select “Florida” for the “To” dropdown
Select the next week for the ”Depart”
Select “1” for the “Number of passengers” dropdown
Select “Senior (65+)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
IL to FL
{dynamic date}
Number of passengers: 1
Passenger 1: Senior (65+)
Cabin Class: Business
*/
  it('TC 03 - Validate the booking for 1 passenger and one way', ()=>{
  bookingPage.getOnewayButton().check()
  bookingPage.getCabinClassDropdown().select('Business')
  bookingPage.getFromDropdown().select('Illinois')
  bookingPage.getToDropdown().select('Florida')
  bookingPage.getDepartDropdown().click()
  cy.get('.react-datepicker__day--031').click()
     bookingPage.getNumberOfPassengersDropdown().children().select('1')
     bookingPage.getPassenger1Dropdown().children().select('Senior (65+)')
     bookingPage.getBookButton().click()

  })

  /*
Navigate to https://techglobal-training.com/frontend/booking
Select the “Round trip” radio button
Select “First” for the “Cabin Class” dropdown
Select “California” for the “From” dropdown
Select “Illinois” for the “To” dropdown
Select the next week for the ”Depart”
Select the next month for the “Return”
Select “1” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
CA to IL
{dynamic date}
Number of passengers: 1
Passenger 1: Adult (16-64)
Cabin Class: First


RETURN
IL to CA
{dynamic date}
  */

  it('TC 04 - Validate the booking for 1 passenger and round trip', ()=>{
 bookingPage.getRoundTripButton().check()
  bookingPage.getCabinClassDropdown().select('First')
  bookingPage.getFromDropdown().select('California')
  bookingPage.getToDropdown().select('Illinois')
  bookingPage.getDepartDropdown().click()
  cy.get('.react-datepicker__day--031').click()
  bookingPage.getReturnDropdown().click()
  cy.get('.react-datepicker__navigation-icon--next').click({ force: true })
  cy.get('.react-datepicker__day--009').click()
     bookingPage.getNumberOfPassengersDropdown().children().select('1')
     bookingPage.getPassenger1Dropdown().children().select('Adult (16-64)')
     bookingPage.getBookButton().click()
  })

  /*
Navigate to https://techglobal-training.com/frontend/booking
Select the “One way” radio button
Select “Premium Economy” for the “Cabin Class” dropdown
Select “New York” for the “From” dropdown
Select “Texas” for the “To” dropdown
Select the next day for the ”Depart”
Select “2” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Select “Child (2-11)” for the Passenger 2 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
NY to TX
{dynamic date}
Number of passengers: 2
Passenger 1: Adult (16-64)
Passenger 2: Child (2-11)
Cabin Class: Premium Economy
  */

  it('TC 05 - Validate the booking for 2 passengers and one way', () =>{
    bookingPage.getOnewayButton().click()
    bookingPage.getCabinClassDropdown().select('Premium Economy')
    bookingPage.getFromDropdown().select('New York')
    bookingPage.getToDropdown().select('Texas')
    bookingPage.getDepartDropdown().click()
    cy.get('.react-datepicker__day--021').click()
    bookingPage.getNumberOfPassengersDropdown().children().select('2')
    bookingPage.getPassenger1Dropdown().children().select('Adult (16-64)')
    bookingPage.getPassenger2Dropdown().children().select('Child (2-11)')
    bookingPage.getBookButton().click()

  })
})