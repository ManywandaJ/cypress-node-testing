describe('Andela app test',() =>{
    it('should open a Andela webapp page',() =>{

    cy.visit('https://qa.my.andela.com')
    })

    it('should login and input passowrd' ,() =>{
        cy.get('#okta-signin-username').type('test-engineer@andela.com')
        cy.get('#okta-signin-password').type('Wonder_123')
        cy.get('#okta-signin-submit').click()

        
    })

    it('should click on the button,skill and proficiency',() =>{
        cy.wait(1500)
        cy.get(':nth-child(2) > .btn').click()
        cy.get('.add-skills__title').contains('Add Skill')
        cy.get('.add-skills__form-field__input').type('java')
        cy.wait(1500)
       
        cy.contains(/Java 8/i).eq(0).click()
        cy.get('.mat-form-field-flex').click()
        cy.get('.mat-option-text').contains('Beginner').click()
        cy.get('#years-label').type('2')
        cy.wait(1000)
        cy.get('.add-skills__footer__actions__cta-button--add').contains('Add Skill').click()
    
    })

}) 

   