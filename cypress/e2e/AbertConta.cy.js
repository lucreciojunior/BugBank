/// <reference types="cypress" />

const LoginCadastro = require('../support/ExportRequire').LoginCadastro

var el = require('../support/elements/registro').Registro

describe('Abertura de conta na BUGBANK', () => {
    it('Abertura de Conta com sucesso', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.AccountOpening(LoginCadastro.Email, LoginCadastro.Nome, 
            LoginCadastro.Senha, LoginCadastro.Senha)
        cy.ClickCadastrar()
    })
    it('Campo E-MAIL é obrigatorio', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.get(el.RegistNome).type(LoginCadastro.Nome, {force: true})
        cy.get(el.RegistSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.RegistConfSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.ButtonSaldo).click({force: true})

        cy.ClickCadastrar()
        cy.ValidateRequiredField(2, 'É campo obrigatório').wait(1500)      
    })
    it('Campo NOME não pode ser vazio', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.get(el.RegistEmail).type(LoginCadastro.Email, {force: true})
        cy.get(el.RegistSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.RegistConfSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.ButtonSaldo).click({force: true})

        cy.ClickCadastrar()
        cy.ValidateFieldName('Nome não pode ser vazio.').wait(1500)
    })
    it('Campo SENHA é obrigatório', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.get(el.RegistEmail).type(LoginCadastro.Email, {force: true})
        cy.get(el.RegistNome).type(LoginCadastro.Nome, {force: true})
        // cy.get(el.RegistSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.RegistConfSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.ButtonSaldo).click({force: true})

        cy.ClickCadastrar()
        cy.ValidateRequiredField(4, 'É campo obrigatório').wait(1500)
    })
    it('Campo CONFIRMAÇÃO SENHA é obrigatório', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.get(el.RegistEmail).type(LoginCadastro.Email, {force: true})
        cy.get(el.RegistNome).type(LoginCadastro.Nome, {force: true})
        cy.get(el.RegistSenha).type(LoginCadastro.Senha, {force: true})
        // cy.get(el.RegistConfSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.ButtonSaldo).click({force: true})

        cy.ClickCadastrar()
        cy.ValidateRequiredField(5, 'É campo obrigatório').wait(1500)
    })
    it('As senhas não são iguais', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.get(el.RegistEmail).type(LoginCadastro.Email, {force: true})
        cy.get(el.RegistNome).type(LoginCadastro.Nome, {force: true})
        cy.get(el.RegistSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.RegistConfSenha).type(LoginCadastro.SenhaIncorreta, {force: true})
        cy.get(el.ButtonSaldo).click({force: true})

        cy.ClickCadastrar()
        cy.ValidateFieldName('As senhas não são iguais.').wait(1500)
    })
    it('Formato E-MAIL incorreto', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.get(el.RegistEmail).type(LoginCadastro.EmailInvalido, {force: true})
        cy.get(el.RegistNome).type(LoginCadastro.Nome, {force: true})
        cy.get(el.RegistSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.RegistConfSenha).type(LoginCadastro.Senha, {force: true})
        cy.get(el.ButtonSaldo).click({force: true})
        
        cy.ValidateRequiredField(2, 'Formato inválido').wait(1500)
        
    });
    it('Campos são obrigatórios', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.ClickCadastrar()
        cy.ValidateRequiredField(2, 'É campo obrigatório')
        cy.ValidateRequiredField(4, 'É campo obrigatório')
        cy.ValidateRequiredField(5, 'É campo obrigatório').wait(1500)
    });
})
