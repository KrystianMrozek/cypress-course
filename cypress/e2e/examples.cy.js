describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/examples");
  });
  it("multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "http://localhost:3000/overview");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "http://localhost:3000/fundamentals");

    cy.getDataTest("nav-examples").click();
    cy.location("pathname").should("equal", "http://localhost:3000/examples");
  });
});
