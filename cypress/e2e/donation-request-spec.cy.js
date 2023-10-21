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
      cy.get('.request-donation-description-container')
      cy.get('h2')
        .should('contain', 'Start Gearing Up')
        cy.get('h3')
        .should('contain', 'Get What You Need For Your Art.')
      cy.get('p')
        .should('contain', 'Connect with a thriving community of donors eager to fund your art projects.')
    })

    it('Should contain request donation form', () => {
      cy.get('.request-form-container')
      cy.get('h2')
        .should('contain', 'Tell Us About Your Project')
     cy.get('.request-form')
     cy.get('input[name="Project Title"]')
     cy.get('input[name="Project Description"]')
     cy.get('input[name="Dollar Amount Requested"]')

     cy.get('button')
       .contains('Submit Donation Request')

      it('Form value should update when user enters information', () => {
      //title
      cy.get('input[name="Project Title"]').type('Project Title Sample')
      cy.get('input[name="Project Title"]').should('have.attr', 'value', 'Project Title Sample')
      //description
      cy.get('input[name="Project Description"]').type('Project Description Sample')
      cy.get('input[name="Project Description"]').should('have.attr', 'value', 'Project Description Sample')
      //amount requested
      cy.get('input[name="Dollar Amount Requested"]').type(100)
      cy.get('input[name="Dollar Amount Requested"]').should('have.attr', 'value', '$100')
    })

    })


})
