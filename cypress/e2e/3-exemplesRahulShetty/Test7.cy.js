/// <reference types="cypress" />

describe("My Sixth Test Suite", () => {
  it("My sixthTest case", () => {
    // test step
    // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    cy.get("#opentab").then((el) => {
      const url = el.prop("href");
      cy.log(url);
      cy.visit(url);
    });
  });
});
// *** command line

// node_modules/.bin/cypress run --spec cypress/e2e/3-exemplesRahulShetty/Test7.cy.js --env url=https://www.google.com --headed
