/// <reference types="cypress" />

describe("Test Date picket, via WebdriverUni", () => {
    // iterate and keep changing months one by one till 1992 july
  it("Selects July 1, 1992", () => {
    const targetDate = new Date("1992-07-01");
    const targetYear = targetDate.getFullYear();
    const targetMonth = targetDate.toLocaleString("default", { month: "long" });
    const targetDay = targetDate.getDate();

    //cypress code
    cy.visit("https://www.webdriveruniversity.com/");

    // invoking to open the Mouse Page on same tab
    cy.get("#datepicker").scrollIntoView().invoke("removeAttr", "target").click({ force: true });

    // Wait for the page to load
    cy.wait(2000);
    cy.get("#datepicker").click();
    function selectDate() {
      cy.get(".datepicker-switch")
        .first()
        .then(($el) => {
          const [displayMonth, displayYear] = $el.text().split(" ");
          const displayDate = new Date(`${displayMonth} 1, ${displayYear}`);
          if ( displayDate.getFullYear() === targetYear && displayMonth === targetMonth
          ) {
            cy.get(".day")
              .not(".old")
              .each(($day) => {
                if ($day.text() === `${targetDay}`) {
                  cy.wrap($day).click();
                  return false; // exit loop once clicked
                }
              });
          } else {
            cy.get(".prev").first().click();
            selectDate(); // recursion until correct month/year
          }
        });
    }
    selectDate();
  });

//   using previous years and then month
  it.only("Selects July 1, 1992 from the datepicker", () => {
    // 1. Open the calendar
    cy.visit("https://www.webdriveruniversity.com/Datepicker/index.html");
    cy.get("#datepicker").click();

    // 2. Click twice to switch to year view
    cy.get('.datepicker-switch').first().click({ force: true });
    cy.wait(300);
    cy.get('.datepicker-switch').first().click({ force: true });
    cy.wait(300);

    // 3. Navigate to the 1990s
    function selectYear() {
      cy.get(".datepicker-years").then(($el) => {
        if ($el.text().includes("1992")) {
          cy.contains(".year", "1992").click();
        } else {
          cy.get('.datepicker-years:visible .prev').click();
          cy.wait(300);
          selectYear(); // recursive loop
        }
      });
    }
    selectYear();
    // 4. Select July
    cy.contains(".month", "Jul").click();
    // 5. Select 1st
    cy.contains(".day", /^1$/).click();
    // Assert
    cy.get('#datepicker input').should('be.visible').and('have.value', '07-01-1992'); // or '07/01/1992' depending on the widget
  });
});
