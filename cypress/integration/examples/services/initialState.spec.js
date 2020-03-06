/// <reference types="Cypress" />
import { baseURL } from "../../../../cypress"

context("App State", () => {
  it("should fetch Launch data", () => {
    cy.request(`${baseURL}`).then($response => {
      assert.isObject($response, "response is an object")
      assert.isArray($response.body, "data is an array")
      assert.equal($response.status, 200, "status is OK")
      assert.isAtLeast($response.body.length, 2, "Body length")
    })
  })
})
