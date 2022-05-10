class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const numExplorersInMission = ExplorerService.filterByMission(explorers, mission);
        return numExplorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const usernamesInMission = explorersByMission.map((explorer) => explorer.githubUsername);
        return usernamesInMission;
    }
}

module.exports = ExplorerService;