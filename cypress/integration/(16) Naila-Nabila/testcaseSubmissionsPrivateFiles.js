Cypress.config({experimentalSessionSupport:true})

context('Cypress LMS Testing - Submissions Private Files', () => {
    it('Skenario Test Upload Gambar JPG', () => {
        cy.session('Login', () => {
            cy.visit('http://lms.polinema.ac.id/login/index.php')
            cy.get('.card-block').should('be.visible')
            cy.get('#username').type('1941720130')
            cy.get('#password').type('nelsay12345')
            cy.get('#loginbtn').click()

            cy.visit('http://lms.polinema.ac.id/user/files.php');
            const filepath = 'images/tugas.jpg'
            cy.get('.fp-btn-add > .btn').click()
            cy.get('input[type="file"]').attachFile(filepath)
            cy.get('.fp-upload-btn').click()
            cy.get('#id_submitbutton').click()

            cy.get('.fp-reficons2').click()
            cy.get('.fp-file-delete').click() 
            cy.get('.fp-dlg-butconfirm').click() 
            cy.get('#id_submitbutton').click()
        })
    })
})

context('Cypress LMS Testing - Submissions Private Files', () => {
    it('Skenario Test Upload Dokumen berupa Word', () => {
        cy.session('Login', () => {
            cy.visit('http://lms.polinema.ac.id/login/index.php')
            cy.get('.card-block').should('be.visible')
            cy.get('#username').type('1941720130')
            cy.get('#password').type('nelsay12345')
            cy.get('#loginbtn').click()

            cy.visit('http://lms.polinema.ac.id/user/files.php');
            const filepath = 'doc/ProposalLombaIntercomp.docx'
            cy.get('.fp-btn-add > .btn').click()
            cy.get('input[type="file"]').attachFile(filepath)
            cy.get('.fp-upload-btn').click()
            cy.get('#id_submitbutton').click()

            cy.get('.fp-reficons2').click()
            cy.get('.fp-file-delete').click() 
            cy.get('.fp-dlg-butconfirm').click() 
            cy.get('#id_submitbutton').click()
        })
    })
})

context('Cypress LMS Testing - Submissions Private Files', () => {
    it('Skenario Test Upload Dokumen berupa PDF', () => {
        cy.session('Login', () => {
            cy.visit('http://lms.polinema.ac.id/login/index.php')
            cy.get('.card-block').should('be.visible')
            cy.get('#username').type('1941720130')
            cy.get('#password').type('nelsay12345')
            cy.get('#loginbtn').click()

            cy.visit('http://lms.polinema.ac.id/user/files.php');
            const filepath = 'doc/ProposalLombaIntercomp.pdf'
            cy.get('.fp-btn-add > .btn').click()
            cy.get('input[type="file"]').attachFile(filepath)
            cy.get('.fp-upload-btn').click()
            cy.get('#id_submitbutton').click()

            cy.get('.fp-reficons2').click()
            cy.get('.fp-file-delete').click() 
            cy.get('.fp-dlg-butconfirm').click() 
            cy.get('#id_submitbutton').click()
        })
    })
})

context('Cypress LMS Testing - Submissions Private Files', () => {
    it('Skenario Test Upload Dokumen berupa Excel', () => {
        cy.session('Login', () => {
            cy.visit('http://lms.polinema.ac.id/login/index.php')
            cy.get('.card-block').should('be.visible')
            cy.get('#username').type('1941720130')
            cy.get('#password').type('nelsay12345')
            cy.get('#loginbtn').click()
            
            cy.visit('http://lms.polinema.ac.id/user/files.php');
            const filepath = 'doc/Naila_Nabila_TI-3F.xlsx'
            cy.get('.fp-btn-add > .btn').click()
            cy.get('input[type="file"]').attachFile(filepath)
            cy.get('.fp-upload-btn').click()
            cy.get('#id_submitbutton').click()

            cy.get('.fp-reficons2').click()
            cy.get('.fp-file-delete').click() 
            cy.get('.fp-dlg-butconfirm').click() 
            cy.get('#id_submitbutton').click()
        })
    })
})

context('Cypress LMS Testing - Submissions Courses', () => {
    it('Skenario Test Upload Dokumen berupa ZIP', () => {
        cy.session('Login', () => {
            cy.visit('http://lms.polinema.ac.id/login/index.php')
            cy.get('.card-block').should('be.visible')
            cy.get('#username').type('1941720130')
            cy.get('#password').type('nelsay12345')
            cy.get('#loginbtn').click()
            
            cy.visit('http://lms.polinema.ac.id/user/files.php');
            const filepath = 'file/uas_restfulAPI.zip'
            cy.get('.fp-btn-add > .btn').click()
            cy.get('input[type="file"]').attachFile(filepath)
            cy.get('.fp-upload-btn').click()
            cy.get('#id_submitbutton').click()

            cy.get('.fp-reficons2').click()
            cy.get('.fp-file-delete').click() 
            cy.get('.fp-dlg-butconfirm').click() 
            cy.get('#id_submitbutton').click()
        })
    })
})