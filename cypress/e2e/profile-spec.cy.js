describe('template spec', () => {
  beforeEach(() => {
    cy.interceptQuery('queryArtist.json', 'artist', 'login')
    cy.visit('http://localhost:3000/login-form')
    cy.get('.login-button').click().wait('@login')
    // cy.get('.login-nav').click()
  });

  it('Should display user info information', () => {
    cy.url().should('contain', 'http://localhost:3000/profile')
    cy.get('.artist-welcome').should('contain', 'Welcome, Artist 1')
    cy.get('.profile-pic').should('exist')
    cy.get('.profile-details-container > :nth-child(2)').should('contain', 'City 1, State 1')
    cy.get('.profile-details-container > :nth-child(3)').should('contain', '12345')
    cy.get('.profile-details-container > :nth-child(4)').should('contain', 'Email')
    cy.get('.profile-details-container > :nth-child(5)').should('contain', 'Your Preferred Medium: Painting')
    cy.get('.projects-heading').should('contain', 'All Projects:')
  });

  it('Should display users donation requests', () => {
    cy.get('.single-project-container').first().then((card) => {
      cy.wrap(card).find('.single-project h3').should('contain', '🎨 Project: Painting 1')
      cy.wrap(card).find('p').eq(0).should('contain', 'Details: A beautiful painting')
      cy.wrap(card).find('p').eq(1).should('contain', 'Requested Amount: $1000')
      cy.wrap(card).find('p').eq(2).should('contain', 'Amount Raised: $750')
    })

    cy.get('.single-project-container').last().then((card) => {
      cy.wrap(card).find('.single-project h3').should('contain', '🎨 Project: Painting 2')
      cy.wrap(card).find('p').eq(3).should('contain', 'Details: Another beautiful painting')
      cy.wrap(card).find('p').eq(4).should('contain', 'Requested Amount: $1200')
      cy.wrap(card).find('p').eq(5).should('contain', 'Amount Raised: $1200')
    })
  });

  it('Should be able to log out', () => {
    cy.interceptQuery('queryPosts.json', 'Posts', 'previewContent')
    cy.url().should('contain', 'http://localhost:3000/profile')
    cy.get('.login-link').click().wait('@previewContent')
    cy.url().should('contain', 'http://localhost:3000/')
    cy.get('.nav-wrapper > [href="/login-form"]').should('exist')
  });

})