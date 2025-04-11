
Cypress.Commands.add('VisitSauceDemo',()=>{
  cy.visit('https://www.saucedemo.com/');
  cy.viewport('macbook-16');
})

Cypress.Commands.add('LoginSauceDemo',(Username,Password)=>{
  cy.get('#user-name').type(Username);
  cy.get('#password').type(Password);
  cy.get('#login-button').click();
})

Cypress.Commands.add('loginWithGitHub', () => {
  cy.origin('https://github.com', () => {
    cy.get('#login_field').type(Cypress.env('GitHub_Username'))
    cy.get('#password').type(Cypress.env('GitHub_Password'))
    cy.get('input[name="commit"]').click()
    cy.get('#login > div.Box.color-bg-subtle.width-auto > div.Box-body > form > button').click() // This selector is more stable
    
  });
  cy.wait(5000);
  cy.visit('https://chemalit-web-dev.sanity.studio/structure/defaultPageType;b61abb72-a01f-4206-81dc-0dab2b52c6c3')
});