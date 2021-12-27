Cypress.config({experimentalSessionSupport:true})

context('Cypress LMS Testing',() => {
    it('Login', () => {
    cy.session('Login', () => {
    cy.visit('http://lms.polinema.ac.id/login/index.php')
    cy.get('.card-block').should('be.visible')
    cy.get('#username').type('1941720130')
    cy.get('#password').type('nelsay12345')
    cy.get('#loginbtn').click()
    cy.url().should('contain', '/')

    cy.get('#dropdown-1').click()
        cy.get('#dropdown-1').click()
        cy.get('#actionmenuaction-2').click()
        cy.get('.editprofile > span > a').click()

        cy.get('#id_firstname').clear().type('Naila')
        cy.get('#id_lastname').clear().type('Nabila')
        cy.get('#id_city').clear().type('Malang')
        cy.get('#id_submitbutton').click()

        cy.url('http://lms.polinema.ac.id/my/')
        })
    })
})