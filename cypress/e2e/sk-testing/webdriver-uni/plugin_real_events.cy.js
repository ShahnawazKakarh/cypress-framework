/// <reference types="cypress" />

describe("Test Date picket, via WebdriverUni", () => {

    it("Drag and Drop, Example", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/")

        // invoking to open the Mouse Page on same tab
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Wait for the page to load
        cy.wait(2000);

        cy.get('#draggable > p > b').drag('#droppable > p > b', {force: true})

    })
    // iterate and keep changing months one by one till 1992 july
  it("Able to hold down the left mouse click button on a given element, Example", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/")

        // invoking to open the Mouse Page on same tab
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Wait for the page to load
        cy.wait(2000);

        cy.get('#click-box').realMouseDown('left').then(($element) => {
            expect($element).to.have.css("background-color", "rgb(0, 255, 0)")
        })

    })

    it("Hover over the Menu, Example", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/")

        // invoking to open the Mouse Page on same tab
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Wait for the page to load
        cy.wait(2000);

        cy.get('.dropbtn').realHover().contains('Hover Over Me Third!')

    })

});
