const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Filtrar explorers por misión", () => {
        const explorers = [{mission: "node"}, {mission: "java"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).toStrictEqual([{mission: "node"}]);
    }),
    test("Requerimiento 2: Cantidad de explorers en misión", () => {
        const explorers = [{mission: "node"}, {mission: "java"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1);
    }),
    test("Requerimiento 3: Username de explorers en misión", () => {
        const explorers = [{githubUsername: "user1", mission: "node"}, {githubUsername: "user2", mission: "java"}];
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode).toStrictEqual(["user1"]);
    });
});