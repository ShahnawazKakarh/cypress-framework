// <reference types="cypress" />
describe("Test Dropdown Menu(s), Checkboxe(s) & Radio Button(s), via WebdriverUni", () => {
    it("RadioButton Check specific, Automation", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        // Wait for the page to load
        cy.wait(2000);

        // radio buttons alias and elements
        cy.get('[value="green"]').as('green')
        cy.get('[value="blue"]').as('blue')
        cy.get('[value="yellow"]').as('yellow')
        cy.get('[value="orange"]').as('orange')
        cy.get('[value="purple"]').as('purple')

        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
        cy.get('#radio-buttons').find("[type='radio']").eq(2).check()
        cy.get('#radio-buttons').find("[type='radio']").eq(3).check()
        cy.get('#radio-buttons').find("[type='radio']").eq(4).check().should('be.checked')


    });

    it("Validates the states of specific radio buttons, Automation", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        // Wait for the page to load
        cy.wait(2000);

        // radio buttons alias and elements
        cy.get("[value='lettuce']").check().should('be.checked').should('be.visible')
        cy.get("[value='cabbage']").should('not.be.checked').should('be.disabled')
        cy.get("[value='pumpkin']").should('not.be.checked').should('be.visible')
        


    });

});