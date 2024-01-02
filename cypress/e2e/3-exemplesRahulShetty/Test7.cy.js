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
