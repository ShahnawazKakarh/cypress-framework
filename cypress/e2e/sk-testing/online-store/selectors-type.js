/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe("Test Contact Us form via Online Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {

        // Css Selector's Link for reference
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors

        // Step 1: Cypress visit website code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");

         
        // Step 2: Cypress interacts with the form
        
        // by tagname
        cy.get("input")

        // by attribute name and value
        cy.get("input[name='first_name']")

        // by id
        cy.get("#contact_me")

        // by class
        cy.get(".feedback-input")

        // by multiple classes
        cy.get("[name='email'][placeholder='Email Address']")

        // by xpath
        cy.xpath("//input[@name='first_name']")

    })
})
