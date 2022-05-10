const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests para FizzbuzzService", () => {
    test("Requerimiento 1: validar FizzBuzzTrick", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1}
        expect(explorer1.trick).toBe(1); 

        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer3.trick).toBe("FIZZ"); 

        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(explorer5.trick).toBe("BUZZ"); 

        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer15.trick).toBe("FIZZBUZZ"); 
    });
});