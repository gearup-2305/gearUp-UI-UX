describe('Test Donation Offer Page', () => {
  beforeEach(() => {
    cy.interceptQuery('queryArtist.json', 'artist', 'login')
    cy.interceptQuery('queryArtists.json', 'artists', 'commBoard')
    cy.visit('http://localhost:3000/login-form')
    cy.get('.login-button').click().wait('@login')
    cy.get('[href="/community-board"]').click().wait('@commBoard')
  });

  it('Should display hero image with description', () => {
    cy.get(
      ':nth-child(1) > .donation-card > .profile-button-container > .profile-container > .donate-button-container > .donation-offer'
    ).click()
    cy.url().should('eq', 'http://localhost:3000/203')
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
    cy.url().should('eq', 'http://localhost:3000/203')
    cy.get('.request-review-container')
    cy.get('h2').should('contain', 'Review the Request:')
    cy.get('h3').should('contain', '🎨 Project: Sculpture 3')
    cy.get('p').should(
      'contain',
      'Details: Another amazing sculpture without donations'
    )
  })

  it('Should contain offer donation form', () => {
    cy.get(
      ':nth-child(1) > .donation-card > .profile-button-container > .profile-container > .donate-button-container > .donation-offer'
    ).click()
    cy.url().should('eq', 'http://localhost:3000/203')
    cy.get('.offer-form-container')
    cy.get('h2').should('contain', 'Make Your Donation:')
    cy.get('.offer-form')
    cy.get('input[name="Name"]')
    cy.get('input[name="Email"]')
    cy.get('input[name="Amount"]')
  })

  it('Form value should update when user enters information', () => {
    cy.get(
      ':nth-child(1) > .donation-card > .profile-button-container > .profile-container > .donate-button-container > .donation-offer'
    ).click()
    cy.url().should('eq', 'http://localhost:3000/203')

    cy.get('input[name="Name"]').type('Judy')
    cy.get('input[name="Name"]').should('have.attr', 'value', 'Judy')

    cy.get('input[name="Email"]').type('judy@judy.com')
    cy.get('input[name="Email"]').should('have.attr', 'value', 'judy@judy.com')

    cy.get('input[name="Amount"]').type(1000)
    cy.get('input[name="Amount"]').should('have.attr', 'value', '1000')
    cy.get('.confirmation-button')
    .contains('Submit Your Donation').click()

    cy.visit('http://localhost:3000/community-board')
    cy.get(
        ':nth-child(1) > .donation-card > .profile-button-container > .profile-container > .donate-button-container > .donation-offer'
      )

      cy.get(':nth-child(1) > .donation-card')
      cy.get('.single-project-card')
    //   cy.get('p').should('contain', 'Amount Raised: $10025.09')

  })
})
