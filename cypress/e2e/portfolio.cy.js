describe("Tes Portfolio", () => {
  it("Buka halaman utama", () => {
    cy.visit("http://localhost:4173");
    cy.contains("Halo, Faris").should("be.visible"); // sesuaikan dengan isi halaman kamu
  });
});
