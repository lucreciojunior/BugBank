/// <reference types="cypress" />

var el = require('../support/elements/registro').Registro

Cypress.Commands.add('HomePage', () => {
    cy.visit('/')
    cy.get('.pages__Title-sc-1ee1f2s-4').should('be.visible')
        .should('have.text', 'O banco com bugs e falhas do seu jeito')
        .wait(1500)
})

Cypress.Commands.add('ClickRegistrar', () => {
    cy.contains('button', 'Registrar').should('be.visible').click()
})

Cypress.Commands.add('AccountOpening', (email, nome, senha) => {
    
    cy.get(el.RegistEmail).type(email, {force: true})
    cy.get(el.RegistNome).type(nome, {force: true})
    cy.get(el.RegistSenha).type(senha, {force: true})
    cy.get(el.RegistConfSenha).type(senha, {force: true})
    cy.get(el.ButtonSaldo).click({force: true})
    
    cy.ClickCadastrar().wait(1500)

    cy.get('#modalText').should('be.visible')
    cy.get('#btnCloseModal').click()
})

Cypress.Commands.add('ClickCadastrar', () => {
    cy.get(el.ButtonCadastrar).click({force: true})
})
Cypress.Commands.add('ButtonAcessar', () => {
    cy.contains('button', 'Acessar').should('be.visible').click()
})

Cypress.Commands.add('LoginSuccessfully', (email, senha) => {
    cy.get(el.LoginEmail).type(email)
    cy.get(el.LoginSenha).type(senha)
    cy.ButtonAcessar()
    
})
Cypress.Commands.add('ValidaLoginSuccessfully', () => {
    cy.contains('p', 'bem vindo ao BugBank :)').should('be.visible')
    .wait(1500)
})

Cypress.Commands.add('ValidateRequiredField', (posic, alert) => {
    cy.get('.input__warging').eq(posic).invoke('css', 'opacity', '1')
      .should('have.text', alert)

})
Cypress.Commands.add('ValidateFieldName', (alert) => {
    cy.contains('#modalText', alert).should('be.visible')
        // .should('have.text', 'Nome não pode ser vazio.\n')

})