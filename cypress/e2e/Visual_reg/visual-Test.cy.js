describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://amalitech-website-web.vercel.app/testing-space');
    cy.viewport(1250, 732);
    cy.wait(3000); // Match your snapshot size
  });

  it('header', () => {
    cy.get('body > header').should('be.visible').matchImageSnapshot('Header');
  });
  it('Image Slider',()=>{
    cy.get('.bg-primary-alt.w-full').should('be.visible').matchImageSnapshot('Image Slider');
  });
  it('Big Statement',()=>{
    cy.get('main > :nth-child(2)').should('be.visible').matchImageSnapshot('Big statement')
  });
  it('Block Quote',()=>{
    cy.get('.w-full.text-white').should('be.visible').matchImageSnapshot('Block Quote')
  });
  it('Info Card',()=>{
    cy.get('body > main > main > section:nth-child(5)').should('be.visible').matchImageSnapshot('Info card')
  });
  it('Info Card With Icon',()=>{
    cy.wait(2000);
    cy.get('body > main > main > section:nth-child(6) > div > div.grid.grid-cols-6.gap-sm.w-full.h-full > div:nth-child(1) > div > div.small > figure > div > img').should('be.visible')
    cy.get('body > main > main > section:nth-child(6) > div').should('be.visible').matchImageSnapshot('Info card with Icon')
  });
  it('Footer',()=>{
    cy.get('.bg-neutral').should('be.visible').matchImageSnapshot('footer')
  });
});