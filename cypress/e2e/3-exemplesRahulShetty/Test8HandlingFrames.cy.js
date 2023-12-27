/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe";

describe("My Eight Test Frames test", () => {
  it("My eightTest case Iframe", () => {
    // test step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");

    cy.iframe().find("a[href*='mentorship']").eq(0).click();
  });
});
