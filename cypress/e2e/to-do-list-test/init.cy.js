describe('attempt to localhost', () => { 

   beforeEach(() => {
    cy.visit("http://localhost:5173/")
   });
   
   it('should retrun a tittle of todo list', () => {
        cy.get(".todo__array>h1").should(`be.visible`)
    });  
   it('should retrun the input to insert task', () => {
    cy.get("input").type('hello world').should('be.visible')
    });  
    
   });