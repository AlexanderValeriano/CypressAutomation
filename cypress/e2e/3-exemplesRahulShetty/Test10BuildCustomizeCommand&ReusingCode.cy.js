/// <reference types="cypress" />

import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("Validate attribute properties with Hook DDT Test Suite", () => {
  let userdata;
  //********* Using Hooks *********** */
  before(() => {
    cy.log("*****This is a test before all *****");

    cy.fixture("exampleRahulShetty").then((data) => {
      userdata = data;
    });
  });
  // ******* Tests ************//
  it("ValidatingAttributePropertiesAndBehavior", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getEditBox().type(userdata.name);
    homePage.getTwoWaysBinding().should("have.value", userdata.name);
    homePage.getGender().select(userdata.gender);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");
    homePage.getShopTab().click();

    userdata.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    productPage.CheckOutButton().click();
  });
});
