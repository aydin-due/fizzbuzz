class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const cantExplorersInMission = ExplorerService.filterByMission(explorers, mission);
        return cantExplorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const usernamesInMission = explorersByMission.map((explorer) => explorer.githubUsername);
        return usernamesInMission;
    }
}

module.exports = ExplorerService;