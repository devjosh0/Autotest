// // describe('Automation on Sanity CMS', () => {
// //   it('Login into Sanity CMS with GitHub', () => {
// //     //Viewport
// //     // cy.viewport(1024, 768)

// //     // Step 1: Visit Sanity CMS
// //     // cy.visit(Cypress.env('Sanity_CMS_Url'))
// //     cy.setCookie('sanitySession', 'skzHxpZtWknU6g4B9HkrLTEZDazFgvYazqabcNWRIjncACuqjKWksMntSpAqF8bNoMUiuKdgy19I54cZ');
// //     cy.visit('https://chemalit-web-dev.sanity.studio/structure/defaultPageType')


// //     // Step 2: Click "Sign in with GitHub" & Ensure Redirect
// //     //cy.contains('GitHub').should('be.visible').click()

// //     // Step 3: Wait for GitHub Login Page & Ensure It's on GitHub
// //     //  cy.loginWithGitHub()
// //     //  cy.wait(20000)
// //     // cy.get('.kILIno > [href="/vision"] > .cXBOCe > .StyledFlex-sc-oxesg3-0 > .StyledBox-sc-1hhky9f-0 > .StyledText-sc-11ov82j-0 > :nth-child(1) > .SpanWithTextOverflow-sc-ol2i3b-0').should('be.visible').click()
// //     // cy.wait(6000)
// //     // cy.get('.kILIno > [href="/structure"] > .cXBOCe > .StyledFlex-sc-oxesg3-0 > .StyledBox-sc-1hhky9f-0 > .StyledText-sc-11ov82j-0 > :nth-child(1) > .SpanWithTextOverflow-sc-ol2i3b-0').click()
// //     // cy.wait(3000)
// //     // cy.get('[data-testid="pane-item-Demo Page"] > [data-testid="compact-preview"] > .StyledFlex-sc-oxesg3-0 > [data-testid="compact-preview__header"] > .StyledText-sc-11ov82j-0 > :nth-child(1) > .SpanWithTextOverflow-sc-ol2i3b-0').should('be.visible').click({force: true})
// //     // cy.wait(3000)
// //     // cy.get("#\\:rq\\:-item-0 > [data-testid='pane-item-undefined'] > :nth-child(1) > [data-testid='default-preview'] > .bbyZbq > [data-testid='default-preview__header'] > .StyledText-sc-11ov82j-0 > :nth-child(1) > .SpanWithTextOverflow-sc-ol2i3b-0").should('be.visible').click({force: true})

// //   })
// // })

// describe('Sanity session login test', () => {
//   it('should set cookie and go to dashboard', () => {
//     // Visit the correct domain first so Cypress can set cookies for it
//     cy.visit('https://chemalit-web-dev.sanity.studio/structure', { failOnStatusCode: false });

//     // Set the session cookie
//     cy.setCookie('sanitySession', 'skzHxpZtWknU6g4B9HkrLTEZDazFgvYazqabcNWRIjncACuqjKWksMntSpAqF8bNoMUiuKdgy19I54cZ');

//     // Reload after setting the cookie
//     cy.reload();

//     // Assert dashboard is visible
//     cy.contains('Your projects', { timeout: 10000 }).should('be.visible');
//   });
// });
