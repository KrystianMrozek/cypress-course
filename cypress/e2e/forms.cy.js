describe("form tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("krystian@gmail.com");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: krystian@gmail.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: krystian@gmail.com!/i).should(
      "not.exist"
    );
  });
});
