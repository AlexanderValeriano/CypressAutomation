/// <reference types="cypress" />

describe("My Sixth Test Suite", () => {
  it("My sixthTest case", () => {
    // test step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // Verifing the popup is displaying and i can select TOP for validate scenario POPUP opened
    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");
  });
});
