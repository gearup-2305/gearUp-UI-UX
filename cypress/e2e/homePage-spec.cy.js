describe('Test Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
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
      cy.get('.home-container')
      cy.get('.description-container')
      cy.get('h2')
        .should('contain', 'Help Artists Create Art')
      cy.get('p')
        .should('contain', 'GearUp connects a widespread community of donors with thriving artists who are eager to bring their artistic vision to life.')
  
    })

    it('Should contain testimonial section with two images and descriptive alt text', () => {
      cy.get('.testimonial-container')
      cy.get('h2')
        .should('contain', 'Real Life Impact')
      cy.get('p')
        .should('contain', 'GearUp has proven to be a lifeline for artists, offering a unique opportunity to connect with individuals who share a passion for creativity and a deep appreciation for the arts. The impact of support extends far beyond the financial aspect; it is a source of inspiration and affirmation that artists are valued.')
        cy.get('.testimonial-artist-container')
        cy.get('h2')
        .should('contain', 'Creating Art and Community')
        cy.get('#quote').should('have.attr','alt','Text bubble with quote stating: "This platform connected me with a community of generous donors who believed in my artistic vision and made it a reality. Their contribution not only provided me with the necessary resources but also gave me the confidence and motivation to push my boundaries as an artist." quoted from Rashid Johnson, Painter & Sculptor, Long Island, N.Y. ')
  
    })

    it('Should contain testimonial section with two images and descriptive alt text', () => {
      cy.get('.testimonial-container')
      cy.get('h2')
        .should('contain', 'Real Life Impact')
      cy.get('p')
        .should('contain', 'GearUp has proven to be a lifeline for artists, offering a unique opportunity to connect with individuals who share a passion for creativity and a deep appreciation for the arts. The impact of support extends far beyond the financial aspect; it is a source of inspiration and affirmation that artists are valued.')
        cy.get('.testimonial-artist-container')
        cy.get('h2')
        .should('contain', 'Creating Art and Community')
        cy.get('#quote').should('have.attr','alt','Text bubble with quote stating: "This platform connected me with a community of generous donors who believed in my artistic vision and made it a reality. Their contribution not only provided me with the necessary resources but also gave me the confidence and motivation to push my boundaries as an artist." quoted from Rashid Johnson, Painter & Sculptor, Long Island, N.Y. ')
  
    })


})
