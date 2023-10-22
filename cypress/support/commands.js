// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('interceptQuery', (fixtureName, opName, alias) => {
    cy.fixture(fixtureName).then((fixture) => {

        cy.intercept('POST', 'https://gearup-be-2305-079e2d2dfead.herokuapp.com/graphql', (req) => {
          if (req.body.operationName === opName) {
            req.reply({
              data: fixture
            });
          }
        }).as(alias)
      });
})