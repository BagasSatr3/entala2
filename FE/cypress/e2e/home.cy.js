describe("Home Page", () => {
  beforeEach(() => {
      cy.visit("http://localhost:5173/login");

      cy.get('input[name="username"]').type("guest");
      cy.get('input[name="password"]').type("12345678");

      cy.get('button[type="submit"]').click();

      cy.url({ timeout: 10000 }).should("eq", "http://localhost:5173/");
  });

  it("should display products table", () => {
    cy.get("table").should("exist");

    cy.get("table tbody tr").should("have.length.greaterThan", 0);
  });

  it("should display customers table", () => {
    cy.get("table").should("exist");

    cy.get("table tbody tr").should("have.length.greaterThan", 0);
  });

  it("should display transactions table", () => {
    cy.get("table").should("exist");

    cy.get("table tbody tr").should("have.length.greaterThan", 0);
  });

});
