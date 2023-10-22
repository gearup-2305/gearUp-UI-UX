describe('Test Login Page', () => {
  beforeEach(() => {
    cy.interceptQuery('queryArtist.json', 'artist', 'login')
    cy.visit('http://localhost:3000/')
  });
  
    it('Should bring user to login page from login link', () => {
      cy.url().should('eq', 'http://localhost:3000/')
      cy.get('.login-link').click()
      cy.visit('http://localhost:3000/login-form')

    })

    it('Should display hardcoded username and password and redirect user to profile on login click', () => {
      cy.url().should('eq', 'http://localhost:3000/')
      cy.get('.login-link').click()
      cy.visit('http://localhost:3000/login-form')
      cy.get('.login-form')
      cy.get('[for="Username"]')
      cy.get('[placeholder="Password"]')
      cy.get('.login-link').click()
      cy.url().should('eq', 'http://localhost:3000/profile')

    })
  
  })