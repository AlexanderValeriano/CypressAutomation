/// <reference types="cypress" />

describe("Validate attribute properties with Hook DDT Test Suite", () => {
  let userdata;

  before(() => {
    cy.log("*****This is a test before all *****");

    cy.fixture("exampleRahulShetty").then((data) => {
      userdata = data;
    });
  });

  it("ValidatingAttributePropertiesAndBehavior", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get("input[name='name']:nth-child(2)").type(userdata.name);
    cy.get("select").select(userdata.gender);
    cy.get(":nth-child(4) > .ng-pristine").should("have.value", userdata.name);
    cy.get("input[name='name']:nth-child(2)").should(
      "have.attr",
      "minlength",
      "2"
    );

    cy.get("#inlineRadio3").should("be.disabled");
    cy.get(":nth-child(2) > .nav-link").click();
    cy.selectProduct("Blackberry");
  });
});
