/// <reference types="cypress" />

export default {
    acessRegisterPage (){
    cy.visit('/');
    cy.get('.header-logo');
    cy.get('.fa-lock').click();
    cy.get('#user').should('be.visible');

    }
}