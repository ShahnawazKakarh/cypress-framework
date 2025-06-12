/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // class with dot
        // hash # with id
        // square brackets [] for any other div element

        // assertion of web page document having utf-8 property
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');

        // assertion of title with have.text
        // cy.title().should('have.text', 'WebDriver | Contact Us');

        // assertion of title with include
        cy.title().should('include', 'WebDriver | Contact Us');

        // assertion of url
        cy.url().should('include', 'contactus');

        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Bidden");
        cy.get('[name="email"]').type("xyz@gmail.com");
        cy.get('textarea.feedback-input').type("This is a feedback section");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Donald");
        cy.get('[name="last_name"]').type("Trump");
        cy.get('textarea.feedback-input').type("This is a feedback section");
        cy.get('[type="submit"]').click();
        cy.get('body')
            // This assertion helps avoid flakiness in your test scripts by ensuring that the element is present in the DOM
          .should('be.visible') // Check if the body element is visible in DOM
          .and('contain.text', '\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n'); // Check if it contains the expected email address
        
    });
})
