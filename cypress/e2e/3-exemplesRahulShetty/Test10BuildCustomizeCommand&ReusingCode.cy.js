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
    //***** Ideally until 10 seconds - If tou need to apply a config time to a specific test ***//
    // Cypress.config("pageLoadTimeout", 8000);

    const homePage = new HomePage();
    const productPage = new ProductPage();
    cy.visit(Cypress.env("url") + "/angularpractice/");
    homePage.getEditBox().type(userdata.name);
    homePage.getTwoWaysBinding().should("have.value", userdata.name);
    homePage.getGender().select(userdata.gender);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");

    // ****** If i apply before getShopBUtton this config apply only here   ****//
    // Cypress.config("pageLoadTimeout", 8000);

    homePage.getShopTab().click();

    userdata.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    productPage.CheckOutButton().click();
    //**   declare variables for assertion **//
    let sum = 0;
    // *** Assertion **//
    cy.get("tr td:nth-child(4) strong")
      .each(($el, i, $list) => {
        //** First : Extract text ***/
        // cy.log($el.text());
        //** Second : Recupere only value from text and use trim for remove espaces ***/
        const actualText = $el.text();
        let res = actualText.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(() => {
        cy.log(sum);
      });

    //** Thirth compare with the total */
    cy.get("h3 strong").then((el) => {
      const amountTotal = el.text();
      let res = amountTotal.split(" ");
      let total = res[1].trim();
      total = Number(total);
      // cy.log(total);
      expect(total).to.equal(sum);
    });
    cy.contains("Checkout").click();
    cy.get("#country").type("India");
    cy.get(".suggestions > ul > li > a").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get("input[type='submit']").click();
    // cy.get(".alert").should(
    //   "have.text",
    //   "Success! Thank you! Your order will be delivered in next few weeks :-).             "
    // );
    cy.get(".alert").then((el) => {
      const actualtext = el.text();
      // ** Alternative way to solve that using chai assertions **
      expect(actualtext.includes("Success")).to.be.true;
    });
  });
});
