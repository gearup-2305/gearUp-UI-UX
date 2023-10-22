describe('Test Donation Request Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/community-board')
  })

  it('Should display hero image with description', () => {
    cy.get(
      ':nth-child(1) > .donation-card > .profile-button-container > .profile-container > .donate-button-container > .donation-offer'
    ).click()
    cy.url().should('eq', 'http://localhost:3000/2')
    cy.get('.donation-offer-hero-container')
    cy.get('h2').should('contain', 'Your Support Makes an Impact')
    cy.get('p').should(
      'contain',
      "The most trusted site for artists to get support bringing their vision to life. As an artist-founded organization, we're trusted by artists, donors, and communities across the country."
    )
  })

  it('Should display section with review the request section', () => {
    cy.get(
      ':nth-child(1) > .donation-card > .profile-button-container > .profile-container > .donate-button-container > .donation-offer'
    ).click()
    cy.url().should('eq', 'http://localhost:3000/2')
    cy.get('.request-review-container')
    cy.get('h2').should('contain', 'Review the Request:')
    cy.get('h3').should('contain', '🎨 Project: I need a paint brush')
    cy.get('p').should(
      'contain',
      "Details: Don't worry, I'm not painting your house"
    )
    cy.get('p').should('contain', 'Requested Amount: $333444')
    cy.get('p').should('contain', 'Amount Raised: $25.09')
  })

  it('Should display section with review the request section', () => {
    cy.get(
      ':nth-child(1) > .donation-card > .profile-button-container > .profile-container > .donate-button-container > .donation-offer'
    ).click()
    cy.url().should('eq', 'http://localhost:3000/2')
    cy.get('.request-review-container')
    cy.get('h2').should('contain', 'Review the Request:')
    cy.get('h3').should('contain', '🎨 Project: I need a paint brush')
    cy.get('p').should(
      'contain',
      "Details: Don't worry, I'm not painting your house"
    )
    cy.get('p').should('contain', 'Requested Amount: $333444')
    cy.get('p').should('contain', 'Amount Raised: $25.09')
  })
})
