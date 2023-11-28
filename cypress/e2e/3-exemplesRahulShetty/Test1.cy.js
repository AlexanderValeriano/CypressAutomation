/// <reference types="cypress" />

describe("My First Test Suite", () => {
  it("My firstTest case", () => {
    // test step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
  });
});
