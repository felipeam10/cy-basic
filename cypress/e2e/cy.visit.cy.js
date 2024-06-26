/// <reference types="cypress"/>

it("Acessando URL", () => {
    cy.visit('category_products/1')
        .visit('category_products/5')
        
})