/// <reference types="cypress"/>

describe('Project - 01 Solution', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/form-elements');
    });

    it('TC01 - Validate the Contact Us Information', () => {
        cy.get('.is-size-3').as('header').should('have.text', 'Contact Us');

        const expectedTexts = ['2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', '(224) 580-2150'];
        cy.get('@header').nextAll().each((ele, index) => {
            cy.wrap(ele).should('have.text', expectedTexts[index])
        })
    });

    it('TC02 - Validate the Full name input box', () => {
        cy.get('[for="name"]')
        .parent()
        .find('input')
        .should('be.visible')// is displayed
        .and('have.attr', 'placeholder', 'Enter your full name')
        .and('have.attr', "required")//requierd// put it las assertion

        cy.get('[for ="name"]').should('have.text', 'Full name *')
    });


    it('TC03 - Validate the Gender radio button', () => {
        cy.contains('Gender *').and('have.text', 'Gender *');
        const expectedTexts = ['Male', 'Female', 'Prefer not to disclose'];

        cy.get('.radio > input').should('have.attr', 'required');

        cy.get('.radio > input').each((ele, index) => {
            cy.wrap(ele).parent().should('have.text', expectedTexts[index])// go to the parent // labele to compare the text
            cy.wrap(ele).should('not.be.selected').and('be.enabled')
            // not all has requiered attribute  and('have.attr', 'required'); // enabled checks if its clickable

            // cy.contains('Male').find('input').check().should('be.checked');
            // cy.contains('Female').find('input').should('not.be.checked');
            // cy.contains('Prefer not to disclose').find('input').should('not.be.checked');

            // moved to commands.js
            // const checkOptionAndValidateOthers = (optionToCheck, expectedTexts) => {
            //     cy.contains(optionToCheck).find('input').check().should('be.checked');
            //     expectedText.filter(option => option !== optionToCheck).foEach(uncheckedOption => {
            //         cy.contains(uncheckedOption).find('input').should('not.be.checked');
            //     })
            // }



        });


        cy.checkOptionAndValidateOthers('Male', expectedTexts);
        cy.checkOptionAndValidateOthers('Female', expectedTexts);

    })


    const testCases = [
        {
            description: 'Address input box',
            label: 'Address',
            placeholder: 'Enter your address',
            required: false
        },
        {
            description: 'Email input box',
            label: 'Email *',
            placeholder: 'Enter your email',
            required: true
        },
        {
            description: 'Phone input box',// input
            label: 'Phone', // input
            placeholder: 'Enter your phone number',//label
            required: false//input
        },
        {
            description: 'Message text area',
            label: 'Message',
            placeholder: 'Type your message here...',
            required: false
        }
    ]

    testCases.forEach((test, index )=> {// starts with test case 4
        it(`Test Case - 0${index +4 } - ${test.description}`, () => {
            cy.contains('label', test.label).should('have.text', test.label)

            cy.contains('label', test.label).parent().find('input, textarea').should('be.visible')
                .and('have.attr', 'placeholder', test.placeholder)
                .and(test.required ? 'have.attr' : 'not.have.attr', 'required')
        })

    })

    it('TC08 - Validate the Consent checkbox', () => {
        cy.get('.checkbox')
            .should('have.text', ' I give my consent to be contacted.')

        cy.get('.checkbox').then((txt) => {
            expect(txt.text().trim()).to.be.equal('I give my consent to be contacted.')// removing the space before I give

        })

        cy.get('.checkbox > input').should('be.enabled')
            .click().should('be.checked')
            .click().should('not.be.checked')
            .and('have.attr', 'required')
    })

    it('TC09 - Validate Submit button', () => {
        cy.get('.control > .button')
            .should('be.visible')
            .and('be.enabled')
            .and('have.text', 'SUBMIT')
    })

    it('TC10 - Validate the form submition', () => {


        const inputs = ['Techglobal', '2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', '(224) 580-2150', 'random message']

        cy.get('.control').find('.input, textarea').each((el, index) => {
            cy.wrap(el).type(inputs[index])
        })
        cy.contains('label', 'Female').find('input').check()
        cy.get('.checkbox').find('input').check()
        cy.get('.control > .button').click()

        cy.on('uncaught:exception', () => {   /// event listener
            return false
        });
        cy.get('.mt-5').should('have.text', 'Thanks for submitting!')

    })

})