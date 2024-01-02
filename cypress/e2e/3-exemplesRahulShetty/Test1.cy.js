/// <reference types="cypress" />

describe("My First Test Suite", () => {
  it("My firstTest case", () => {
    // test step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // seleniun get hiyt url in browset, cypress get acts like findElement of selenium
    // use of a JQuery selectors similar to CSS .product:visible
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    // PArent child chaining
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    // Risk of break Path if we use xpath of an ellement in the DOM
    cy.get(":nth-child(4) > .product-action > button");
    cy.get("@productLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click()
      .then(() => console.log("hello world"));

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        //includes is a method in Javascript
        if (textVeg.includes("Cashews")) {
          // $el.contains("ADD TO CART").trigger("click");
          $el.find("button").trigger("click");
        }
      });
    // Assert if logo test is correctly displayed
    cy.get(".brand").should("have.text", "GREENKART");
    // This is to print in logs
    cy.get(".brand").then((logoElement) => {
      cy.log(logoElement.text());
    });
    const logo = cy.get(".brand");
    // cy.get(".brand").text();
    // cy.log(log.text());
  });
});
