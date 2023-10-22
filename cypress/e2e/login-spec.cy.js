describe('Test Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('should display header', () => {
      cy.get('.header')
      cy.get('.title-wrapper')
      cy.get('h1').should('contain', 'GearUp')
    })
  
    it('should display nav bar', () => {
      cy.get('.nav-wrapper')
      cy.get('[href="/donation-request"]')
      cy.get('[href="/"]')
    })
  
    it('Visit donation request age from navigation', () => {
      cy.get('.nav-wrapper')
      cy.get('[href="/donation-request"]').click()
      cy.visit('http://localhost:3000/donation-request')
    })
    
  
  })