describe('Test Home Page', () => {
  beforeEach(() => {

cy.fixture('queryPosts.json').then((fixture) => {

  cy.intercept('POST', 'https://gearup-be-2305-079e2d2dfead.herokuapp.com/graphql', (req) => {
    if (req.body.operationName === 'Posts') {
      req.reply({
        data: fixture
      });
    }
  }).as('previewContent')
});

    cy.visit('http://localhost:3000/').wait('@previewContent')
  });

    it('should display header', () => {
      cy.get('.header')
         cy.get('.title-wrapper')
      cy.get('h1')
        .should('contain', 'GearUp')
    });
  
    it('should display nav bar', () => {
      cy.get('.nav-wrapper')
      cy.get('[href="/donation-request"]')
      cy.get('[href="/"]')
    });
  
    it('Visit donation request age from home page', () => {
      cy.get('.nav-wrapper')
      cy.get('[href="/donation-request"]').click()
      cy.visit('http://localhost:3000/donation-request')
    });
  
    it('Visit login page from home page', () => {
      cy.url().should('eq', 'http://localhost:3000/')
      cy.get('.login-link').click()
      cy.visit('http://localhost:3000/login-form')
  
  });
  
    it('Should contain hero image with GearUp description', () => {
      cy.url().should('eq', 'http://localhost:3000/')
      cy.get('.home-container')
      cy.get('.description-container')
      cy.get('h2')
        .should('contain', 'Help Artists Create Art')
      cy.get('p')
        .should('contain', 'GearUp connects a widespread community of donors with thriving artists who are eager to bring their artistic vision to life.')
  
    })

})
