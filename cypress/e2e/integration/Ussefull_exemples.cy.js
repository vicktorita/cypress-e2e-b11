function clickSearchButton() {
  cy.get('.searchButton').click()
}

function searchUser(userName) {
  cy.get('.searchBar').type(userName)
  this.clickSearchButton()
  cy.get('.row').contains(userName).should('have.text', userName)
}

function editOrShowUserByName(buttonType ,userName) {
  cy.get('.row').contains(userName).find(buttonType).click()
  cy.url().should('eq', '/edit/user/18')
}

function searchAndEditOrShowUserByName(buttonType ,userName){
  this.searchUser()
  this.editOrShowUserByName(buttonType ,userName)
}




// separation of concernes  to be easier to maintain frameworks in the future







