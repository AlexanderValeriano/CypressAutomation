/// <reference types="cypress" />

describe("My Nine Hook Test Suite", () => {
  before(() => {
    cy.log("*****This is a test before all *****");
  });

  it("My nineTest case Iframe", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.fixture("exampleRahulShetty").then((data) => {
      cy.get("input[name='name']:nth-child(2)").type(data.name);
      cy.get("select").select(data.gender);
    });
  });
});
