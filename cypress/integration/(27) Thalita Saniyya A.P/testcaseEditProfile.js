// cypress test case //

describe('Edit Profile (Thalita Saniyya Aqilla Putri)', () => {
    beforeEach(() => {
        // Login
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        // tes skenario 1
        cy.get('#username').type('1941720228')
        cy.get('#password').type('1941720228')
        cy.get('#loginbtn').click()
        cy.visit('http://lms.polinema.ac.id/user/preferences.php')
        cy.get(':nth-child(1) > .card > .card-block > .card-text > :nth-child(1) > a').click()
       })

    // tes skenario 
    it('1. Ganti Username ', () => {
        cy.get('#id_firstname').clear().type('THALITA SANIYYA AQILLA PUTRI').should('be.visible')
        cy.get('#id_submitbutton').click().should('be.visible')
    })
    it('2. Ganti Nama Akhir ', () => {
        cy.get('#id_lastname').clear().type('1941720228').should('be.visible')
        cy.get('#id_submitbutton').click().should('be.visible')
    })
    it('3. Masukkan Alamat Email ', () => {
        cy.get('#id_email').clear().type('1941720228@lms.jti.polinema.ac.id').should('be.visible')
        cy.get('#id_submitbutton').click().should('be.visible')
    })
    it('4. Pilih Kota ', () => {
        cy.get('#id_city').type('Tabalong').should('be.visible')
        cy.get('#id_submitbutton').click().should('be.visible')
    })
    it('5. Keterangan ', () => {
        cy.get('#id_description_editoreditable > p').type('Kelas TI-3F').should('be.visible')
        cy.get('#id_submitbutton').click().should('be.visible')
    }) 
})