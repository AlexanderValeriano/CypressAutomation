/// <reference types="cypress" />

describe("My Third Test Suite", () => {
  it("My thirdTest case", () => {
    // test step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    // Select a commun attribute for construct a locator and after passs the value in an array
    cy.get("input[type='checkbox']").check(["option1", "option2", "option3"]);
  });
});
