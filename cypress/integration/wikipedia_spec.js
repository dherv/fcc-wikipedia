describe("Wikipedia API test", () => {
  it("should display the meaning list from wikipedia api", () => {
    cy.visit("http://localhost:5000");
    cy.get("input").clear().type("meaning");
    cy.get("ul").contains("Meaning of life");
  });

  it("should display the movie list from wikipedia api", () => {
    cy.get("input").clear().type("movie");
    cy.get("ul").contains("B movie");
  });

  it("should display the previously searched list when input cleared", () => {
    cy.get("input").clear();
    cy.get("ul").should("contain", "B movie");
    cy.get("ul").should("not.contain", "Meaning of life");
  });
});
