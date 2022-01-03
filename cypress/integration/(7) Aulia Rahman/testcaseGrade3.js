describe('Testing Grade Assignment', function (){
    beforeEach(() => {        
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        //halaman Login
        cy.get('#username').type('1941720209')
        //input Username
        cy.get('#password').type('nooname12')
        //input Password
        cy.get('[class="btn btn-primary btn-block m-t-1"]').should('be.visible').click()
        //button Login
    })
    it('Grade per assignment', () =>{
        cy.visit('http://lms.polinema.ac.id/course/view.php?id=715')
        //halaman Algoritma Struktur data
        cy.visit('http://lms.polinema.ac.id/mod/quiz/view.php?id=8251')
        //halaman Nilai assignment
    })
})