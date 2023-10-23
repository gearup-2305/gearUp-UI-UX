describe('Error Handling', () => {

  beforeEach(() => {
    cy.fixture('queryPosts.json').then((queryArtists) => {
      cy.intercept('POST', 'https://gearup-be-2305-079e2d2dfead.herokuapp.com/graphql', (req) => {
        if (req.body.operationName === 'Posts') {
          req.reply({
            statusCode: 404,
            body: queryArtists,
          });
        }
      }).as('404homepage');
    });

    cy.fixture('queryArtists.json').then((queryArtists) => {
      cy.intercept('POST', 'https://gearup-be-2305-079e2d2dfead.herokuapp.com/graphql', (req) => {
        if (req.body.operationName === 'artists') {
          req.reply({
            statusCode: 404,
            body: queryArtists,
          });
        }
      }).as('404commboard');
    });

    cy.fixture('queryArtist.json').then((queryArtists) => {
      cy.intercept('POST', 'https://gearup-be-2305-079e2d2dfead.herokuapp.com/graphql', (req) => {
        if (req.body.operationName === 'artist') {
          req.reply({
            statusCode: 404,
            body: queryArtists,
          });
        }
      }).as('404login');
    });
  })

  it('Should show error message if preview content query is unsuccesful', () => {
    cy.visit('http://localhost:3000/').wait('@404homepage')
    cy.get('#root > :nth-child(4)').should('contain', 'Error: Response not successful: Received status code 404')
  })

  it('Should show error message if community board query is unsuccesful', () => {
    cy.visit('http://localhost:3000/community-board').wait('@404commboard')
    cy.get('.error-message').should('contain', 'Oops! Something went wrong, please try again.')
    cy.get('.center-link').should('have.text', 'Retry').click().wait('@404homepage')
    cy.url().should('contain', 'http://localhost:3000/')
  })

  it('Should show error message if login is unsuccesful', () => {
    cy.visit('http://localhost:3000/login-form')
    cy.get('.login-button').click().wait('@404login')
    cy.get('.error-message').should('contain', 'Oops! Something went wrong, please try again.')
    cy.get('.center-link').should('have.text', 'Retry').click().wait('@404homepage')
    cy.url().should('contain', 'http://localhost:3000/')
  })

})