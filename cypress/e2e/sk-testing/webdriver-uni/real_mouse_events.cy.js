/// <reference types="cypress" />

describe("Test Mouse Actions, via WebdriverUni", () => {
    it("I should be able to drag and drop a dropable item", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/")

        // invoking to open the Mouse Page on same tab
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Wait for the page to load
        cy.wait(2000);

        // it will click on the element and keep it
        cy.get('#draggable > p > b').trigger('mousedown', {which: 1});

        // it will move the mouse and drop it on droppable item
        cy.get('#droppable > p').trigger('mousemove').trigger('mouseup', {force:true})
        cy.get('#droppable > p').cy.realMouseMove({wheel: 1}).trigger('mouseup', {force:true})


        // cy.realMouseDown
        // cy.realMouseUp
        // cy.realMouseMove
        // cy.realMouseWheel


    });

    it("Double Mouse Click Example", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/")

        // invoking to open the Mouse Page on same tab
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Wait for the page to load
        cy.wait(2000);

        // it will click on the element and keep it
        cy.get('#double-click').dblclick();


    });

    it("Able to hold down the left mouse click button on a given element, Example", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/")

        // invoking to open the Mouse Page on same tab
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Wait for the page to load
        cy.wait(2000);

        // it will click on the element and keep it
        cy.get('#click-box').realMouseDown().then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0')
        })

    });
})
