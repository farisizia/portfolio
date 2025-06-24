describe("Tes Portfolio (Live)", () => {
  it("Buka homepage Netlify", () => {
    const url = Cypress.env("BASE_URL");
    cy.visit(url);
  });
});
