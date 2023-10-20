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
      cy.url().should('eq', 'http://localhost:3000/')
      cy.get('.home-container')
      cy.get('.description-container')
      cy.get('h2')
        .should('contain', 'Start Gearing Up')
      cy.get('h3')
        .should('contain', 'Get What You Need For Your Art.')
      cy.get('p')
        .should('contain', 'Connect with a thriving community of donors eager to fund your art projects.')
  
    })

})
