// <reference types="cypress" />
describe("Test Dropdown Menu(s), Checkboxe(s) & Radio Button(s), via WebdriverUni", () => {
    it("Checboxes Check and Uncheck Automation", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        // Wait for the page to load
        cy.wait(2000);

        // using alias for checkboxes to get remember
        cy.get('#checkboxes > :nth-child(1) > input').as("checkbox-1")
        cy.get(':nth-child(5) > input').as('checkbox-3')
        cy.get(':nth-child(3) > input').as('checkbox-2')
        cy.get(':nth-child(7) > input').as('checkbox-4')

        // assertion that checkbox is checked or unchecked
        cy.get('@checkbox-1').check().should("be.checked")
        cy.get('@checkbox-2').should("not.be.checked")
        cy.get('@checkbox-4').should("not.be.checked")
        cy.get('@checkbox-3').uncheck().should("not.be.checked")


    });

    it.only("Multiple Checkboxes Check and Uncheck Automation", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        // Wait for the page to load
        cy.wait(2000);

        // using alias for checkboxes to get remember
        cy.get('#checkboxes > :nth-child(1) > input').as("checkbox-1")
        cy.get(':nth-child(5) > input').as('checkbox-3')
        cy.get(':nth-child(3) > input').as('checkbox-2')
        cy.get(':nth-child(7) > input').as('checkbox-4')

        // checkboxes values
        // option-1, option-2, option-3, option-4
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked")


    });

});