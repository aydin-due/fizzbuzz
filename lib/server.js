const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz API welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, respone) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    respone.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, respone) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    respone.json({mission: mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, respone) => {
    const mission = request.params.mission;
    const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    respone.json(explorersUsernamesInMission);
});

app.get("/v1/explorers/fizzbuzz/:score", (request, respone) => {
    const score = request.params.score;
    const trick = ExplorerController.validateFizzBuzzTrick(score);
    respone.json({score: score, trick: trick});
});