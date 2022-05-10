const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers)

const explorersInNode = ExplorerService.filterByMission(explorers, "node");
console.log(explorersInNode);
const numExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
console.log(numExplorersInNode);
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(usernamesInNode);
const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
console.log(explorersInNodeAndFizzBuzzTrick);