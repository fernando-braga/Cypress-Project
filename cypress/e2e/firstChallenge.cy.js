/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
const userData = require('../fixtures/firstChallenge.json')

describe('User Registration Test', () => {

    const userName = 'Fernando Braga'
    const userEmail = 'fernando@gmail.com'
    const userPassword = '123456'
    const nameUsingFakejsToExemple = faker.name.fullName()

    beforeEach('Accessing register page', () => {

        // ACCESING THE REGISTRATION SCREEN
        cy.accessRegisterPage();
        // ACCESING THE REGISTRATION SCREEN
    })

    it.only('Validate empty name field', () => {
        cy.get('#user').should('be.visible');
        cy.get('#user').click();
        cy.saveRegister();
        cy.checkMessage('O campo nome deve ser prenchido');
    });

    it('Validate empty email field', () => {
        cy.get('#user').should('be.visible');
        cy.fillName(userData.name).click();
        cy.get('#email').click();
        cy.saveRegister();
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente');
    });

    it('Validate invalid email field', () => {
        cy.get('#user').should('be.visible');
        cy.fillName(userData.name).click();
        cy.get('#email').click().type(userData.invalidEmail);
        cy.saveRegister();
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente');
    });

    it('Validate empty password field', () => {
        cy.get('#user').should('be.visible');
        cy.fillName(userData.name).click();
        cy.fillEmail(userData.email).click();
        cy.get('#password').click();
        cy.saveRegister();
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Validate invalid password', () => {
        cy.get('#user').should('be.visible');
        cy.fillName(userData.name).click();
        cy.fillEmail(userData.email).click();
        cy.get('#password').click().type(userData.invalidPassword);
        cy.saveRegister();
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos');
    })

    it.only('User registered successfully', () => {
        cy.get('#user').should('be.visible');
        cy.get('#user').click().type(nameUsingFakejsToExemple);
        cy.fillEmail(userData.email).click();
        cy.fillPassword(userData.password).click();
        cy.saveRegister();
        cy.successfullyRegistered();
        cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${nameUsingFakejsToExemple}`);
        cy.get('.swal2-confirm').click();

    });
});