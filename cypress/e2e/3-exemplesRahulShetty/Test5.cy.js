/// <reference types="cypress" />

describe("My Fifth Test Suite", () => {
  it("My fifthTest case", () => {
    // test step
    // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    cy.get(".table-display tr td:nth-child(2)").each(($el, i, $list) => {
      let textCourse = $el.text();
      if (textCourse.includes("Python")) {
        cy.get(".table-display tr td:nth-child(2)")
          .eq(i)
          .next()
          .then((price) => {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
