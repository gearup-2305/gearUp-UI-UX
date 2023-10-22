describe('Community Board', () => {

  beforeEach(() => {
    cy.interceptQuery('queryArtists.json', 'artists', 'commBoard')
    cy.visit('http://localhost:3000/community-board').wait('@commBoard')
  });
  
  it('Should show all donation requests that arent fully funded', () => {
    cy.get('.donation-card').first().then((card) => {
      cy.wrap(card).find('.profile-image-card').should('have.attr', 'src', 'https://example.com/artist2.jpg');
      cy.wrap(card).find('.personal-details-container h3').should('contain', 'Artist 2');
      cy.wrap(card).find('.personal-details-container p').should('contain', 'City 2');
      cy.wrap(card).find('.project-details-card h3').should('contain', 'Sculpture 3');
      cy.wrap(card).find('.single-project-card p').should('contain', 'Details: Another amazing sculpture without donations');
      cy.wrap(card).find('.donation-amounts :nth-child(1)').should('contain', 'Requested Amount: $900');
      cy.wrap(card).find('.donation-amounts :nth-child(2)').should('contain', 'Amount Raised: $0');
      cy.wrap(card).find('.donate-button-container .donation-offer').should('exist');
    })

    cy.get('.donation-card').first().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist2.jpg', 'Artist 2', 'City 2', 'Sculpture 3', 'Details: Another amazing sculpture without donations', 'Requested Amount: $900', 'Amount Raised: $0')
    })

  })
})