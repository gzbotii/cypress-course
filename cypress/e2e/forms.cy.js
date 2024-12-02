describe('Forms test', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('boti@test.com')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed:/i).should('exist')
    })
})