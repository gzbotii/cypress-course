describe('Forms test', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test sucessfull subscribe', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('boti@test.com')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed:/i).should('exist')
    })
    it('Test fail subscribe', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('boti@test')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed:/i).should('not.exist')
        cy.contains(/Invalid email:/i).should('exist')
    })
})