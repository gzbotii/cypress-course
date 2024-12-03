describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples');
    });

    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click();
        cy.location('pathname').should('equal', '/');

        cy.getDataTest('nav-overview').click();
        cy.location('pathname').should('equal', '/overview');
    });
});