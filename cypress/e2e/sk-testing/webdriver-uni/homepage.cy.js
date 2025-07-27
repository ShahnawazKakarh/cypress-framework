/// <reference types="cypress" />

describe("Test Home PAGE via Automation Test Store", () => {
    it("Click on Login/Register link with new Email, from the Home Page", () => {
        //cypress code
        cy.visit("https://automationteststore.com//")

        cy.wait(300)
        cy.get('a[href$="account/login"]').contains('Login or register').click()

        cy.get('#accountFrm > fieldset > .btn').click().should('be.visible')

        cy.wait(300)

        cy.get('#AccountFrm_firstname').type('Shahnawaz')
        cy.get('#AccountFrm_lastname').type('Khan')
        cy.get('#AccountFrm_email').type('shanu@gmail.com')
        cy.get('#AccountFrm_address_1').type('Lahore')
        cy.get('#AccountFrm_city').type('Lahore')
        cy.get('#AccountFrm_zone_id').select('Glasgow').should('have.value', 3551).contains('Glasgow')
        cy.get('#AccountFrm_postcode').type('324')
        cy.get('#AccountFrm_country_id').select('Pakistan').should('have.value', 162).contains('Pakistan')
        cy.get('#AccountFrm_zone_id').select('Punjab').should('have.value', 2461)
        cy.get('#AccountFrm_loginname').type('shanukhan')
        cy.get('#AccountFrm_password').type('shanikhan@')
        cy.get('#AccountFrm_confirm').type('shanikhan@')
        cy.get('#AccountFrm_newsletter0').check().should('be.checked')
        cy.get('#AccountFrm_agree').check().should('be.checked')
        cy.get('.col-md-2 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').contains('Congratulations! Your new account has been successfully created!')
        cy.get('.mb40 > .btn').click().should('have.string', 'Continue').should('be.visible')

    });

    it("Click on Login/Register link with Already Registed Email, from the Home Page", () => {
        //cypress code
        cy.visit("https://automationteststore.com//")

        cy.wait(300)
        cy.get('a[href$="account/login"]').contains('Login or register').click()

        cy.get('#accountFrm > fieldset > .btn').click().should('be.visible')

        cy.wait(300)

        cy.get('#AccountFrm_firstname').type('Shahnawaz')
        cy.get('#AccountFrm_lastname').type('Khan')
        cy.get('#AccountFrm_email').type('shanu.kakarh@gmail.com')
        cy.get('#AccountFrm_address_1').type('Lahore')
        cy.get('#AccountFrm_city').type('Lahore')
        cy.get('#AccountFrm_zone_id').select('Glasgow').should('have.value', 3551).contains('Glasgow')
        cy.get('#AccountFrm_postcode').type('324')
        cy.get('#AccountFrm_country_id').select('Pakistan').should('have.value', 162).contains('Pakistan')
        cy.get('#AccountFrm_zone_id').select('Punjab').should('have.value', 2461)
        cy.get('#AccountFrm_loginname').type('shanikhan')
        cy.get('#AccountFrm_password').type('shanikhan@')
        cy.get('#AccountFrm_confirm').type('shanikhan@')
        cy.get('#AccountFrm_newsletter0').check().should('be.checked')
        cy.get('#AccountFrm_agree').check().should('be.checked')
        cy.get('.col-md-2 > .btn').click()
        cy.get('.mb40 > .btn').click().should('have.string', 'Continue').should('be.visible')
        cy.get('.alert').contains('Error: E-Mail Address is already registered!')


    });
})




