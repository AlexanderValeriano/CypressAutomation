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
    // Another way to do an  assertion
    cy.get("input[name='name']:nth-child(2)").then((el) => {
      const minLength = el.prop("minlength");
      cy.log(minLength);
    });

    cy.get("#inlineRadio3").should("be.disabled");
  });

  // it("My nineTest case Iframe", () => {
  //   cy.visit("https://rahulshettyacademy.com/angularpractice/");
  //   cy.fixture("exampleRahulShetty").then((data) => {
  //     cy.get("input[name='name']:nth-child(2)").type(data.name);
  //     cy.get("select").select(data.gender);
  //   });
  // });
});
