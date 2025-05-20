import BasePage from "./BasePage";

class BookingPage extends BasePage {

 getOnewayButton() {
   return  cy.get('[type="radio"][value="One way"]')
 }

 getRoundTripButton(){
    return cy.get('input[type="radio"][value="Round trip"]')
 }
 getCabinClassLabel(){
   return cy.contains('Cabin Class')
 }

 getCabinClassDropdown(){
   return  cy.get(':nth-child(2) > .select > select')
   
 }

  getFromLabel(){
   return cy.contains('From')
 }

 getFromDropdown(){
   return  cy.get(':nth-child(3) > .select > select')
 }
  getToLabel(){
   return cy.contains('To')
 }

 getToDropdown(){
   return  cy.get(':nth-child(4) > .select > select')
 }
 getDepartLabel(){
   return cy.contains('Depart')
 }
getDepartDropdown(){
   return cy.contains('Depart').next()
}
 getReturnLabel(){
   return cy.contains('Return')
 }
 getReturnDropdown(){
   return cy.contains('Return').next()
 }
 getNumberOfPassengersLabel(){
   return cy.contains('Number of passengers')
 }
 getNumberOfPassengersDropdown(){
   return cy.contains('Number of passengers').next()
 }

 getPassenger1Label(){
  return cy.contains('Passenger 1')
 }
 getPassenger1Dropdown(){
   return  cy.contains('Passenger 1').next()
 }

 getPassenger2Label(){
  return cy.contains('Passenger 2')
 }
 getPassenger2Dropdown(){
   return  cy.contains('Passenger 2').next()
 }
 getBookButton(){
   return cy.get('button[type ="submit"]')
 }

}

export default BookingPage