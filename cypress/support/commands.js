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

Cypress.Commands.add('checkDonationRequestCard', (card, profileImage, artistName, artistCity, postTitle, postDetails, requestedAmount, currentAmount) => {
  // cy.get('.profile-image-card').should('have.attr', 'src', profileImage)
  // cy.get('h3').first().should('contain', artistName)
  // cy.get('p').first().should('contain', artistCity)

  cy.wrap(card).find('.profile-image-card').should('have.attr', 'src', profileImage);
  cy.wrap(card).find('.personal-details-container h3').should('contain', artistName);
  cy.wrap(card).find('.personal-details-container p').should('contain', artistCity);
  cy.wrap(card).find('.project-details-card h3').should('contain', postTitle);
  cy.wrap(card).find('.single-project-card p').should('contain', postDetails);
  cy.wrap(card).find('.donation-amounts :nth-child(1)').should('contain', requestedAmount);
  cy.wrap(card).find('.donation-amounts :nth-child(2)').should('contain', currentAmount);
  cy.wrap(card).find('.donate-button-container .donation-offer').should('exist');
})