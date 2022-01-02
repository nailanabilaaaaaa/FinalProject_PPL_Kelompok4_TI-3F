// cypress test case //

describe('Edit Profile 2 (Sri Kynanti)', () => {
    beforeEach(() => {
        // Login
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        // tes skenario 1
        cy.get('#username').type('1941720063')
        cy.get('#password').type('1941720063')
        cy.get('#loginbtn').click()
        cy.visit('http://lms.polinema.ac.id/user/preferences.php')
        cy.get(':nth-child(1) > .card > .card-block > .card-text > :nth-child(1) > a').click()
       })

    // tes skenario 
    it('1. Masukkan Akun Skype ', () => {
        cy.get('#id_skype').type('srikynantiskype',{force: true})
        cy.get('#id_submitbutton').click().should('be.visible')
    })
    it('2. Masukkan ID Yahoo ', () => {
        cy.get('#id_yahoo').type('srikynanti@yahoo.co.id',{force: true})
        cy.get('#id_submitbutton').click().should('be.visible')
    })
    it('3. Masukkan No. KTP ', () => {
        cy.get('#id_idnumber').type('3057184004010001',{force: true})
        cy.get('#id_submitbutton').click().should('be.visible')
    })
    it('4. Masukkan Telepon ', () => {
        cy.get('#id_phone1').type('085785270775',{force: true})
        cy.get('#id_submitbutton').click().should('be.visible')
    })
    it('5. Masukkan Alamat ', () => {
        cy.get('#id_address').type('Malang-Asrikaton',{force: true})
        cy.get('#id_submitbutton').click().should('be.visible')
    }) 
})