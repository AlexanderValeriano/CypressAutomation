/// <reference types="cypress" />

describe("My Nine Hook Test Suite", () => {
  let userdata;

  before(() => {
    cy.log("*****This is a test before all *****");

    cy.fixture("exampleRahulShetty").then((data) => {
      userdata = data;
    });
  });

  it("FixtureDemoTest", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get("input[name='name']:nth-child(2)").type(userdata.name);
    cy.get("select").select(userdata.gender);
  });
  // it("My nineTest case Iframe", () => {
  //   cy.visit("https://rahulshettyacademy.com/angularpractice/");
  //   cy.fixture("exampleRahulShetty").then((data) => {
  //     cy.get("input[name='name']:nth-child(2)").type(data.name);
  //     cy.get("select").select(data.gender);
  //   });
  // });
});
