describe('Login Form', () => {
    it('should successfully log in with valid credentials', () => {
      cy.visit('http://localhost:5173/login');
  
      cy.get('input[name="username"]').type('guest');
      cy.get('input[name="password"]').type('12345678');
  
      cy.get('button[type="submit"]').click();
  
      cy.url({ timeout: 10000 }).should('eq', 'http://localhost:5173/');
    });
  
    it('should display error messages for invalid credentials', () => {
      cy.visit('http://localhost:5173/login');
  
      cy.get('button[type="submit"]').click();
  
      cy.get('.red-error-message').should('have.length', 2);
    });
  
  });
  