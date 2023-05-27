//Hooks -> Mocha

/* --
1. before() -> se ejecuta UNA VEZ, al principio
2. beforeEach() -> antes de cada test
3. TEST EXECUTION
4. afterEach() -> despues de cada test
5. beforeEach()
6. TEST EXECUTION
7. afterEach()
8. after() -> UNA VEZ, al final
*/

//Skip - only

describe("Demo de hooks", function(){

    before(function(){
        cy.log("Before");
    })

    beforeEach(function(){
        cy.log("Before Each");
    })

    it("should be test #1", function(){
        console.log("test #1")
    })
    it.only("should be test #2", function(){
        console.log("test #2")
    })
    it("should be test #3", function(){
        console.log("test #3")
    })

    afterEach(function(){
        cy.log("After Each");
    })

    after(function(){
        cy.log("After");
    })
})