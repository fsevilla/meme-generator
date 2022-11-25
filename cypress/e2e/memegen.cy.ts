describe('validate memegen', () => {
    it('should add meme details', () => {
        cy.visit('/meme');
        cy.get('#upper').type('el texto de arriba');
        cy.get('#lower').type('el texto de abajo')
        cy.get('#create').click();
        cy.contains('Se creo correctamente')
    });
});