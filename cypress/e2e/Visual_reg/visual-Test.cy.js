describe('Login', () => {
  it('should be publicly accessible', () => {
    cy.visit('https://amalitech-website-web.vercel.app/testing-space');

    // snapshot name will be the test title
    //cy.matchImageSnapshot();

    // snapshot name will be the name passed in
    //cy.matchImageSnapshot('googleLandPage');
    // snapshot will be created inside `some/dir`
    //cy.matchImageSnapshot('C:\Users\HusseinAmadu\Desktop\Cypress TiT\cypress\e2e\Visual_reg')
    // options object passed in
    // cy.matchImageSnapshot({
    //   failureThreshold: 0.4
    //   blur: 10
    // });
    // match element snapshot
    cy.get('body > header').matchImageSnapshot('Header');
    //cy.get('.bg-primary-alt').matchImageSnapshot('Image Slider');
    cy.get('main > :nth-child(2)').matchImageSnapshot('Big statement')
    cy.get('.w-full.text-white').matchImageSnapshot('Block Quote')
    cy.get('main > :nth-child(5)').matchImageSnapshot('Info card')
    cy.get('main > :nth-child(6)').matchImageSnapshot('Info card with Icon')
    cy.get('.bg-neutral').matchImageSnapshot('footer')
  });
});