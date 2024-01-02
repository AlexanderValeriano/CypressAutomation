export default class ProductPage {
  CheckOutButton() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }
}
