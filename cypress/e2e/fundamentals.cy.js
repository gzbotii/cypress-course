describe('Fundamentals test', () => {
  it('Contains correct header text', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })
  it('Accordion test', () => {
    cy.visit('/fundamentals')
    cy.contains('Your tests will exist in a describe block.').should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains('Your tests will exist in a describe block.').should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains('Your tests will exist in a describe block.').should('not.be.visible')
  })
})