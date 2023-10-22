describe('Community Board', () => {

  beforeEach(() => {
    cy.interceptQuery('queryArtists.json', 'artists', 'commBoard')
    cy.visit('http://localhost:3000/community-board').wait('@commBoard')
  });
  
  it('Should show all donation requests that arent fully funded', () => {
    cy.get('.donation-card').first().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist2.jpg', 'Artist 2', 'City 2', 'Sculpture 3', 'Details: Another amazing sculpture without donations', 'Requested Amount: $900', 'Amount Raised: $0')
    })

    cy.get('.donation-card').last().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist1.jpg', 'Artist 1', 'Denver', 'Painting 1', 'Details: A beautiful painting', 'Requested Amount: $1000', 'Amount Raised: $750')
    })
  })

  it('Should filter community board by requests with No Donations', () => {
    cy.get('#no-donations').click({ force: true })
    cy.get('.donation-card').first().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist2.jpg', 'Artist 2', 'City 2', 'Sculpture 3', 'Details: Another amazing sculpture without donations', 'Requested Amount: $900', 'Amount Raised: $0')
    })
})

  it('Should filter community board by first donation request from artists that havent met their requested amount goal', () => {
    cy.get('#first-projects').click({ force: true })
    cy.get('.donation-card').first().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist1.jpg', 'Artist 1', 'Denver', 'Painting 1', 'Details: A beautiful painting', 'Requested Amount: $1000', 'Amount Raised: $750')
    })
  
  })

  it('Should filter community board by state', () => {
    cy.get('#state').select('CO')
    cy.get('.donation-card').first().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist1.jpg', 'Artist 1', 'Denver', 'Painting 2', 'Details: Another beautiful painting', 'Requested Amount: $1200', 'Amount Raised: $1200')
    })

    cy.get('.donation-card').last().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist1.jpg', 'Artist 1', 'Denver', 'Painting 1', 'Details: A beautiful painting', 'Requested Amount: $1000', 'Amount Raised: $750')
    })
    
    })

  it('Should be able to clear form filters', () => {
    cy.get('#state').select('CO')
    cy.get('.donation-card').first().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist1.jpg', 'Artist 1', 'Denver', 'Painting 2', 'Details: Another beautiful painting', 'Requested Amount: $1200', 'Amount Raised: $1200')
    })

    cy.get('button').click()

    cy.get('.donation-card').last().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist1.jpg', 'Artist 1', 'Denver', 'Painting 1', 'Details: A beautiful painting', 'Requested Amount: $1000', 'Amount Raised: $750')
    })

    cy.get('#no-donations').click({ force: true })

    cy.get('.donation-card').first().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist2.jpg', 'Artist 2', 'City 2', 'Sculpture 3', 'Details: Another amazing sculpture without donations', 'Requested Amount: $900', 'Amount Raised: $0')
    })

    cy.get('button').click()

    cy.get('.donation-card').last().then((card) => {
      cy.checkDonationRequestCard(card, 'https://example.com/artist1.jpg', 'Artist 1', 'Denver', 'Painting 1', 'Details: A beautiful painting', 'Requested Amount: $1000', 'Amount Raised: $750')
    })
    })

    // it('Should be able to clear form filters', () => {
    //   cy.get('.donation-card').first().then((card) => {
    //     cy.wrap(card).find('.donation-offer').click()
    //   })
    //   cy.url('should', 'contain', 'http://localhost:3000/203')
  
    // })

    it('Should display message letting user know if filter has no results', () => {
      cy.get('#state').select('TX')
      cy.get('.no-results').should('exist')
      cy.get('.no-results').should('contain', 'Sorry, no results found matching your filter criteria.')
  
    })
})