/// <reference types="cypress" />

class register_page{

    elements = {
    nameField: () => cy.get('#user'),
    emailField: () => cy.get('#email'),
    passwordField: () => cy.get('#password'),
    registerBtn: () => cy.get('#btnRegister'),
    errorMessage: () => cy.get('#errorMessageFirstName'),
    registeredUserModal: () => cy.get('.swal2-popup'),
    okBtn: () => cy.get('.swal2-confirm'),
}


}
export default register_page
