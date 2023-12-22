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

    // static dropdown
    cy.get("#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2");

    // cy.wait(3000);
    cy.get("#dropdown-class-example").select("").should("have.value", "");

    // Dynamic dropdowns
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, i, $list) => {
      if ($el.text() === "India") {
        $el.trigger("click");
      }
    });
    // autocomplete
    cy.get("#autocomplete").should("have.value", "India");

    // visible invisible
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
    // radio buttons
    cy.get("[value=radio2]").check().should("be.checked");
  });
});
