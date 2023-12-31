/// <reference types="cypress" />

describe("My Fourth Test Suite", () => {
  it("My fourthTest case", () => {
    // test step
    cy.visit("https://qaclickacademy.com/practice.php");
    cy.get("#alertbtn").click();
    cy.get("#confirmbtn").click();

    // windows :alert
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
    // Using removeAttr-Jquery fonction for not flaky test and remove attribute target.
    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.url().should("include", "qaclickacademy");
    cy.go("back");
  });
});
