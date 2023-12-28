/// <reference types="cypress" />

describe("My Nineth Test Frames test", () => {
  before(() => {
    // root-level hook
    // runs once before all tests
  });

  it("My nineTest case Iframe", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("input[name='name']:nth-child(2)").type("bob");
    cy.get("select").select("Female");
  });
});
