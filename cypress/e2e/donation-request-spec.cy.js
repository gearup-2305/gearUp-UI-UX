describe('Test Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/donation-request')
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
  
    it('Should contain hero image with GearUp Request Donation description', () => {
      cy.get('.hero-container')
      cy.get('.description-container')
      cy.get('h2')
        .should('contain', 'Start Gearing Up')
      cy.get('p')
        .should('contain', 'Get What You Need For Your Art. Connect with a thriving community of donors eager to fund your art projects.')
    })

    it('Should contain request donation form', () => {
      cy.get('.request-form-container')
      cy.get('h2')
        .should('contain', 'Tell Us About Your Project')
     cy.get('.request-form')
     cy.get('input[name="Project Title"]')
     cy.get('input[name="Project Description"]')
     cy.get('input[name="Project Image"]')
     cy.get('input[name="Dollar Amount Requested"]')

     cy.get('button')
       .contains('Submit Donation Request')

    })


})