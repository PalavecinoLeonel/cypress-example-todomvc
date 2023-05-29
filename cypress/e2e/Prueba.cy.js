beforeEach("Visitar la pagina", function() {
    cy.visit("https://automationexercise.com/")
})


describe("La primera solo", function(){
    it("un click", function() {

        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
    })

    it("otro click", function() {

        cy.get(':nth-child(2) > .panel-heading > .panel-title').click();
    })
})
