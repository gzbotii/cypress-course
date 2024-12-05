describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples');
    });

    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click();
        cy.location('pathname').should('equal', '/');

        cy.getDataTest('nav-overview').click();
        cy.location('pathname').should('equal', '/overview');
    })
    it.only('intercepts', () => {
        cy.intercept("POST", 'http://localhost:3000/examples', {
            body: {
                message: 'successfully intercepted'
            }
        })
    })
});