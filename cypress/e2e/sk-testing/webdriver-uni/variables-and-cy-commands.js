/// <reference types="cypress" />

describe("Verifying Variables, Cypress Commands and Jquerry Commands, via WebdriverUni", () => {
    it("Navigating to specific product pages", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/")

        // const makeup = cy.get(a[href='product/category&path']).contains("Makeup")
        // skincare.click()

        // const skincare = cy.get(a[href='product/category&path']).contains("Skincare")
        // makeup.click()

        // cy.xpath('//*[@id="maincontainer"]/div/div/div/h1/span[1]').contains("Makeup")
        // cy.get('h1 .maintext').contains("Makeup")

        cy.get(a[href = 'product/category&path']).contains("Makeup").click()
        cy.get(a[href = 'product/category&path']).contains("Skincare").click()

        // cy.get('a[href$="contact"]').click()
        // cy.get(button[title='Submit']).click()

        // Wait for the page to load
        cy.wait(2000);

    });

    it, only("Should verify title Makeup", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get(a[href = 'product/category&path']).contains("Makeup").click()
        // cy.contains("Makeup", { timeout: 10000 }).should("be.visible");
        // var content = $('#elementId').text();

        // verify title on the page
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found text here: " + headerText);
            expect(headerText).to.eq('Makeup');
        });

    });
})