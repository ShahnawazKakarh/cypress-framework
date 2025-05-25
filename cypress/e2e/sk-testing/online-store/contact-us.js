/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe("Test Contact Us form via Online Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {

        // Css Selector's Link for reference
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors

        //cypress code
        cy.visit("https://www.automationteststore.com/");

        // Step 1: Click the "Contact Us" link
        // archana@irisstar.tech
        // Following all are XPATHS for clicking to Href of Contact Us on Website
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        // cy.xpath("//ul[@class='info_links_footer']//a[normalize-space()='Contact Us']").click();
        // cy.xpath('//*[@id="footer"]/footer/section[2]/div/div[1]/div/ul/li[5]/a').click();

        // using xpath library and then searching it with xpath
        // cy.xpath("//a[contains(@href, 'contact')]").click();

        // using css selector
        cy.get("a[href$='contact']").click();
         
        // Step 2: Cypress switches to automationteststore.com and interacts with the form
        cy.origin('https://automationteststore.com', () => {
            cy.get('#ContactUsFrm_first_name').type("Joe");
            cy.get('#ContactUsFrm_email').type("joe_blogs@example.com");
            cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
            cy.get('.col-md-6 > .btn').click();

            cy.get('body')
            // This assertion helps avoid flakiness in your test scripts by ensuring that the element is present in the DOM
          .should('be.visible') // Check if the body element is visible in DOM
          .and('contain.text', 'Your enquiry has been successfully sent to the store owner!'); // Check if it contains the expected success message
          

        });
    });
});
