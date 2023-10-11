describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('contain', 'localhost:3000')
  })
})