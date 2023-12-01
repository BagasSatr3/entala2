describe('Signup Form', () => {
    it('should successfully sign up with valid credentials', () => {
      cy.visit('http://localhost:5173/signup'); 
  
      cy.get('input[name="username"]').type('newUser3');
      cy.get('input[name="password"]').type('securePassword3');
  
      cy.get('button[type="submit"]').click();
  
      cy.url({ timeout: 10000 }).should('eq', 'http://localhost:5173/login');
    });
  
    it('should display error messages for invalid credentials', () => {
      cy.visit('http://localhost:5173/signup');
  
      cy.get('button[type="submit"]').click();
  
      cy.get('.red-error-message').should('have.length', 2);
    });
  
  });
  