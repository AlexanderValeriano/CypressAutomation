/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe";

describe("My Eight Test Frames test", () => {
  it("My eightTest case Iframe", () => {
    // test step
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");

    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.wait(3000);
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
