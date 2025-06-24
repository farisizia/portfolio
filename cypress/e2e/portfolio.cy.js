describe("Tes Portfolio (Live)", () => {
  it("Buka homepage dari Netlify", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.contains("Halo").should("be.visible"); // sesuaikan dengan isi nyata web kamu
  });
});
