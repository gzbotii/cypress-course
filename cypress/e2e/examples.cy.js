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
    it('intercepts', () => {
        cy.intercept("POST", 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
    })
    it.only('grudges', () => {
        const grudges = ['grudge 1', 'grudge 2', 'grudge 3'];
        cy.contains(/Add Some Grudges/i)
        grudges.forEach((grudge) => {
            cy.getDataTest('grudge-input')
                .find('input')
                .type(grudge)
            cy.getDataTest('add-grudge').click();
        })
        grudges.forEach((grudge) => {
            cy.contains(new RegExp(grudge, 'i'));
        });
        cy.getDataTest('clear-grudge').click();
    })
});