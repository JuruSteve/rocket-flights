// /// <reference types="Cypress" />
// import { baseURL } from "../../../../cypress"

context("Filter launches", () => {
  it("Filters by most recent", () => {
    cy.visit("http://localhost:8000")
    cy.get(".launch-list li")
      .should("have.length", 107)
      .then($list => {
        cy.get(".most-recent").click()
        // expect($list).to.contain
        // expect($list).decrease()
      })
  })
})
