/// <reference types="cypress" />

describe("Test Dropdown Menu(s), Checkboxe(s) & Radio Button(s), via WebdriverUni", () => {
    it("Should be able to play with mouse with a successful click and selection", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/")
        cy.xpath('//*[@id="iframe"]/div/div[1]/h1').click()

        // Wait for the page to load
        cy.wait(2000);


    });
})
