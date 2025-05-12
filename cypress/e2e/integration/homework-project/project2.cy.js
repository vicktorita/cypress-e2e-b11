/*Navigate to https://techglobal-training.com/frontend/login
Validate that the username input box is displayed
Validate that the username input box is not required
Validate that the label of the username input box is “Please enter your username”
Validate that the password input box is displayed
Validate that the password input box is not required
Validate that the label of the password input box is “Please enter your password”
Validate the “LOGIN” button is displayed
Validate the “LOGIN” button is clickable
Validate that the button text is “LOGIN”
Validate the “Forgot Password?” link is displayed
Validate that the “Forgot Password?” link is clickable
Validate that the link text is “Forgot Password?”
*/

/// <reference types="cypress"/>

describe('Project 02', ()=> {

    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/login');
    })

it('TC - 01 Validate the Login form', ()=>{
    cy.get('#username').should('be.visible')

    cy.get('[for = "username"]')
    .should('have.text', 'Please enter your username')
    .and('not.have.attr', 'required')

    cy.get('#password').should('be.visible')
    cy.get('[for = "password"]')
    .should('have.text', 'Please enter your password')
    .and('not.have.attr', 'required')
  
    cy.get('#login_btn')
    .should('be.visible')
    .and('be.enabled')
    .and('have.text', "LOGIN")
    
    cy.get('#login_btn + a')
    .should('be.visible')
    .and('have.text', "Forgot Password?")
    .click()
   

})

/*
Navigate to https://techglobal-training.com/frontend/login
Enter the username as “TechGlobal”
Enter the password as “Test1234”
Click on the “LOGIN” button
Validate the success message is displayed as “You are logged in”
Validate the logout button displayed with the text “LOGOUT”

Navigate to https://techglobal-training.com/frontend/login
Enter the username as “TechGlobal”
Enter the password as “Test1234”
Click on the “LOGIN” button
Click on the “LOGOUT” button
Validate that the login form is displayed
*/ 
it('TC 02 - 03 - Validate login and logout', ()=>{

    cy.get('#username').clear()
    .type('TechGlobal')
    cy.get('#password').clear()
    .type('Test1234')
    cy.get('#login_btn').click()
    cy.get('#success_lgn')
    .should('have.text','You are logged in' )
cy.get('#logout')
.should('be.visible')
.and('have.text', 'LOGOUT')
.click()
cy.get('.is-size-3').should('be.visible')
})

/*
Navigate to https://techglobal-training.com/frontend/login
Click on the “Forgot Password?” link
Validate that the modal heading “Reset Password” is displayed
Validate that the close button is displayed
Validate that the email input box is displayed
Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
Validate the “SUBMIT” button is displayed
Validate the “SUBMIT” button is clickable
Validate that the button text is “SUBMIT”
*/
it('TC 04 - Validate the Forgot Password? Link and Reset Password modal ', () => {

cy.get('#login_btn +a').click();
cy.get('#sub_heading').should('be.visible')
cy.get('.delete').should('be.visible')
cy.get('#email').should('be.visible')
cy.get('label[for="email"]')
.should('contain', "Enter your email address and we'll send you a link to reset your password.")
                    
cy.get('#submit').should('be.visible')
.and('be.enabled')
.and('have.text', 'SUBMIT');


})

/*
Navigate to https://techglobal-training.com/frontend/login
Click on the “Forgot Password?” link
Validate that the “Reset Password” modal is displayed
Click on the close button
Validate that the “Reset Password” modal is closed
*/
it('TC 05 - Validate  Reset Password modal close button ', () =>{

    cy.get('#login_btn +a').click();
    cy.get('#sub_heading').should('be.visible')
    cy.get('.delete').click()
    cy.get('.is-size-3').should('be.visible')
})

/*
Navigate to https://techglobal-training.com/frontend/login
Click on the “Forgot Password?” link
Enter an email
Click on the “SUBMIT” button
Validate the form message “A link to reset your password has been sent to your email address.” is displayed under the “SUBMIT” button
*/
it('TC 06 - Validate the Reset Password form submission', () =>{
 cy.get('#login_btn +a').click();
 cy.get('#email').type('moon@gmail.com')
 cy.get('#submit').click()
 cy.get('#confirmation_message'). should('have.text', 'A link to reset your password has been sent to your email address.')
})

it('TC 07 - Validate the invalid login with empty credentials', ()=>{
     cy.get('#username').clear()
        cy.get('#password').clear()
        cy.get('#login_btn').click()
        cy.get('#error_message').should('have.text', 'Invalid Username entered!')
})


        const testCases =[
        
        {description: 'TC 08 -Validate the invalid login with the wrong username',
            username:'John',
            password:'Test1234',
            message: 'Invalid Username entered!'
        },
        {description: 'TC 10 - Validate the invalid login with the wrong username',
            username:'John',
            password:'1234',
            message: 'Invalid Username entered!'
        },

   ]

   testCases.forEach((test) =>{
    it(` ${test.description}`, ()=>{
        cy.get('#username').clear().type(test.username)
        cy.get('#password').clear().type(test.password)
        cy.get('#login_btn').click()
        cy.get('#error_message').should('have.text', 'Invalid Username entered!')
    
    })
   })


   it('TC 09 - Validate the invalid login with the wrong password ', () =>{
     cy.get('#username').clear().type('TechGlobal')
        cy.get('#password').clear().type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('have.text', 'Invalid Password entered!')
    
   })

    })
