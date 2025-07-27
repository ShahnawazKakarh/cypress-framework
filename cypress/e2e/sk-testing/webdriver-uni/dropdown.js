// <reference types="cypress" />
describe("Test Dropdown Menu(s), Checkboxe(s) & Radio Button(s), via WebdriverUni", () => {
    it("DropDOwn Menu selection and validations, Automation", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        // Wait for the page to load
        cy.wait(2000);

        cy.get('#dropdowm-menu-1').as('menu-1')
        cy.get('#dropdowm-menu-2').as('menu-2')
        cy.get('#dropdowm-menu-3').as('menu-3')
        cy.get('#fruit-selects').as('fruits-menu')


        cy.get('@menu-1').should('be.visible').select('Python').should('have.value', 'python').contains('Python')
        cy.get('@menu-2').should('be.visible').select('JUnit').should('have.value', 'junit').contains('JUnit')
        cy.get('@menu-3').should('be.visible').select('JavaScript').should('have.value', 'javascript').contains('JavaScript')
        cy.get('@fruits-menu').should('be.visible').select('Pear').should('have.value', 'pear').contains('Pear')
        cy.get('@fruits-menu').contains('Orange').should('be.disabled').should('have.value', 'orange').contains('Orange')


    });

    it("Dropdown Selection specific, Automation", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        // Wait for the page to load
        cy.wait(2000);

        cy.get('#dropdowm-menu-1').as('menu-1')
        cy.get('#dropdowm-menu-2').as('menu-2')
        cy.get('#dropdowm-menu-3').as('menu-3')
        cy.get('#fruit-selects').as('fruits-menu')

        // select maven
        cy.get('@menu-2').should('be.visible').select('Maven').should('have.value', 'maven').contains('Maven')

        // select TestNG
        cy.get('@menu-2').should('be.visible').select('TestNG').should('have.value', 'testng').contains('TestNG')


    });

});