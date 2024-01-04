/// <reference types="cypress" />
//**  npm run greenKartTest  **/
describe("My Second Test Suite", () => {
  it("My secondTest case", () => {
    // test step
    // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.visit("https://rahulshettyacademy.com");

    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //Parent child
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);

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

    cy.get(".cart-icon>img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
