describe('calculatrice', () => {
  it('should add two values', () => {
    cy.visit('http://localhost:1337/calculatrice')
    cy.contains("button", '7').click()
    cy.contains("button", '*').click()
    cy.contains("button", '3').click()
    cy.contains("button", '=').click()
    cy.get('input:disabled').should('have.value', 21);
  })
})