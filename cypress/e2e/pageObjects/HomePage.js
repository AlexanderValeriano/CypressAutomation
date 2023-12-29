export default class HomePage {
  getEditBox() {
    cy.get("input[name='name']:nth-child(2)");
  }
  getTwoWaysBinding() {
    cy.get(":nth-child(4) > .ng-pristine");
  }
  getGender() {
    cy.get("select");
  }

  getEntrepreneaur() {
    cy.get("#inlineRadio3");
  }
  getShopTab() {
    cy.get(":nth-child(2) > .nav-link");
  }
}
