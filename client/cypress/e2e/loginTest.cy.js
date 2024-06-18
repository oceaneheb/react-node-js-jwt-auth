describe('Login Test', () => {
  // before(() => {
  //   // Script pour ajouter un utilisateur de test
  //   cy.request('POST', 'http://localhost:8081/register', {
  //     email: 'testuser@gmail.com',
  //     password: 'password123'
  //   });
  // });

  it('should successfully log in with valid credentials', () => {
    cy.visit('http://127.0.0.1:5173/login');
    // cy.get(".img-login").eq(0).should("be.visible");

    // cy.get('input[name="email"]').type('testuser@gmail.com');
    // cy.get('input[name="password"]').type('password123');
    // cy.get('button[type="submit"]').click();

    // cy.url().should('include', '/home');
    // cy.contains('Bonjour, testuser !').should('be.visible');
  });

  // after(() => {
  //   // Script pour nettoyer les données de test
  //   cy.request('POST', 'http://localhost:8081/delete-test-user', {
  //     email: 'testuser@gmail.com'
  //   });
  // });
});