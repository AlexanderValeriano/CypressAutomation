import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import HomePage from "../../support/pageObjects/HomePage";
// import ProductPage from "../../support/pageObjects/ProductPage";
const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const homePage = new HomePage();
const productPage = new ProductPage();

Given("I open Ecommerce Page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to cart", () => {
  homePage.getShopTab().click();

  userdata.productName.forEach((element) => {
    cy.selectProduct(element);
  });

  productPage.CheckOutButton().click();
});
And("Validate the total prices", () => {
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
});
Then("select the country submit and validate thank you", () => {
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
