const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("1. Filtrar explorers por misión", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
        expect(explorersInNode[0].name).toBe("Woopa1");
        expect(explorersInNode[0].score).toBe(1);
        expect(explorersInNode[9].name).toBe("Woopa15");
        expect(explorersInNode[9].score).toBe(15);
    }),
    test("2. Cantidad de explorers en misión", () => {
        const numexplorersInNode = ExplorerController.getExplorersAmountByMission("node");
        expect(numexplorersInNode).toBe(10);
    }),
    test("3. Username de explorers en misión", () => {
        const usernamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesInNode.length).toBe(10);
        expect(usernamesInNode[0]).toBe("ajolonauta1");
        expect(usernamesInNode[9]).toBe("ajolonauta15");
    }),
    test("4. Validar FizzBuzzTrick de un número", () => {
        const trick3 = ExplorerController.validateFizzBuzzTrick(3);
        expect(trick3).toBe("FIZZ");
        const trick5 = ExplorerController.validateFizzBuzzTrick(5);
        expect(trick5).toBe("BUZZ");
        const trick15 = ExplorerController.validateFizzBuzzTrick(15);
        expect(trick15).toBe("FIZZBUZZ");
        const trick1 = ExplorerController.validateFizzBuzzTrick(1);
        expect(trick1).toBe(1);
    });
});