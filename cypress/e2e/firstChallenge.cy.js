/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import homePage from '../support/pages/home_page';
import register_page from '../support/pages/register_page';
const userData = require('../fixtures/firstChallenge.json');

const screen = ['desktop', 'iphone-x', 'iphone-6'];

// screen.forEach(element => {

describe('User Registration Test', () => {
    const registerPage = new register_page();
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    
    beforeEach('Accessing register page', () => {
        // if(element != 'desktop') {
        // cy.viewport(element);
        // }
        homePage.acessRegisterPage();
    })

    it('Validate empty name field', () => {
        registerPage.elements.passwordField().click();
        registerPage.elements.emailField().type(randomEmail);
        registerPage.elements.passwordField().type('123456');
        registerPage.elements.registerBtn().click();
        registerPage.elements.errorMessage().contains('O campo nome deve ser prenchido');
    });

    it('Validate empty email field', () => {
        registerPage.elements.nameField().type(randomName);
        registerPage.elements.passwordField().type('123456');
        registerPage.elements.registerBtn().click();
        registerPage.elements.errorMessage().contains('O campo e-mail deve ser prenchido corretamente');
    });

    it('Validate invalid email field', () => {
        registerPage.elements.nameField().type(randomName);
        registerPage.elements.emailField().type('invalid email');
        registerPage.elements.passwordField().type('123456');
        registerPage.elements.registerBtn().click();
        registerPage.elements.errorMessage().contains('O campo e-mail deve ser prenchido corretamente');
    });

    it('Validate empty password field', () => {
        registerPage.elements.nameField().type(randomName);
        registerPage.elements.emailField().type(randomEmail);
        registerPage.elements.registerBtn().click();
        registerPage.elements.errorMessage().contains('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Validate invalid password', () => {
        registerPage.elements.nameField().type(randomName);
        registerPage.elements.emailField().type(randomEmail);
        registerPage.elements.passwordField().type('1');
        registerPage.elements.registerBtn().click();
        registerPage.elements.errorMessage().contains('O campo senha deve ter pelo menos 6 dígitos');
    })

    it('User registered successfully', () => {
        const name = faker.person.fullName();
        registerPage.elements.nameField().type(name);
        registerPage.elements.emailField().type(randomEmail);
        registerPage.elements.passwordField().type('123456');
        registerPage.elements.registerBtn().click();
        registerPage.elements.registeredUserModal().should('be.visible');
        registerPage.elements.okBtn().click();

    });
});
// });