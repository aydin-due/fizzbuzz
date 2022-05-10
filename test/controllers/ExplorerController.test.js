const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("Requerimiento 1: Filtrar explorers por misión", () => {
        const explorers = [{mission: "node"}, {mission: "java"}];
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
        expect(explorersInNode[0].name).toBe("Woopa1")
        expect(explorersInNode[0].score).toBe(1)
        expect(explorersInNode[9].name).toBe("Woopa15")
        expect(explorersInNode[9].score).toBe(15)
    }),
    test("Requerimiento 2: Cantidad de explorers en misión", () => {
        const explorers = [{mission: "node"}, {mission: "java"}];
        const numexplorersInNode = ExplorerController.getExplorersAmountByMission("node");
        expect(numexplorersInNode).toBe(10);
    }),
    test("Requerimiento 3: Username de explorers en misión", () => {
        const explorers = [{githubUsername: "user1", mission: "node"}, {githubUsername: "user2", mission: "java"}];
        const usernamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesInNode.length).toBe(10);
        expect(usernamesInNode[0]).toBe("ajolonauta1")
        expect(usernamesInNode[9]).toBe("ajolonauta15")
    });
});