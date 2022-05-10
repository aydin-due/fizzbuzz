const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernamesInMission;
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const numExplorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return numExplorersInMission;
    }

    static validateFizzBuzzTrick(number){
        const trick = FizzbuzzService.applyValidationInNumber(number);
        return trick;
    }
}

module.exports = ExplorerController;