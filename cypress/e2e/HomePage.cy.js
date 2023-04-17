/// <reference types="cypress" />

describe('HomePage', () => {
    it('Acessando Home Page', () => {
        cy.visit('/')
        cy.get('.pages__Title-sc-1ee1f2s-4').should('be.visible')
            .should('have.text', 'O banco com bugs e falhas do seu jeito')
    });
})