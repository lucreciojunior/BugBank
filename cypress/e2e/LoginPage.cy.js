/// <reference types="cypress" />

const LoginCadastro = require('../support/ExportRequire').LoginCadastro

var el = require('../support/elements/registro').Registro

describe('Realizando testes na pagina de LOGIN', () => {
    it('Login com sucesso', () => {
        cy.HomePage()
        cy.ClickRegistrar()
        cy.AccountOpening(LoginCadastro.Email, LoginCadastro.Nome, 
            LoginCadastro.Senha, LoginCadastro.Senha)
        cy.LoginSuccessfully(LoginCadastro.Email, LoginCadastro.Senha) 
        cy.ValidaLoginSuccessfully()
    })
    it('Usuário Incorreto', () => {
        cy.HomePage()
        cy.get(el.LoginEmail).type(LoginCadastro.EmailIncorreto)
        cy.get(el.LoginSenha).type(LoginCadastro.Senha)
        cy.ButtonAcessar() 
        cy.ValidateFieldName('Usuário ou senha inválido. Tente novamente ou verifique suas informações!').wait(1500)
    })
    it('Senha Incorreta', () => {
        cy.HomePage()
        cy.get(el.LoginEmail).type(LoginCadastro.Email)
        cy.get(el.LoginSenha).type(LoginCadastro.SenhaIncorreta)
        cy.ButtonAcessar() 
        cy.ValidateFieldName('Usuário ou senha inválido. Tente novamente ou verifique suas informações!').wait(1500)
    })

    it('Campo E-MAIL Obrigatorio', () => {
        cy.HomePage()
        cy.get(el.LoginSenha).type(LoginCadastro.Senha)
        cy.ButtonAcessar()
        cy.ValidateRequiredField(0, 'É campo obrigatório').wait(1500)    
    })
    it('Campo SENHA Obrigatorio', () => {
        cy.HomePage()
        cy.get(el.LoginEmail).type(LoginCadastro.Email)
        cy.ButtonAcessar()
        cy.ValidateRequiredField(1, 'É campo obrigatório').wait(1500)    
    })
    it('E-mail e Senha são Obrigatório ', () => {
        cy.HomePage()
        cy.ButtonAcessar()
        cy.ValidateRequiredField(0, 'É campo obrigatório').wait(1500)
        cy.ValidateRequiredField(1, 'É campo obrigatório').wait(1500)
    });
    it('Formato E-MAIL incorreto', () => {
        cy.HomePage()
        cy.get(el.LoginEmail).type(LoginCadastro.EmailInvalido)
        cy.ButtonAcessar()
        cy.ValidateRequiredField(0, 'Formato inválido').wait(1500)
    });


})

