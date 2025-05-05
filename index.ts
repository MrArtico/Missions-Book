import express from 'express';
import cors from 'cors';
import { deleteMissionController, getMissionController, patchMissionStatusController, postMissionController } from './src/controllers/missionController';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({origin: "http://26.46.142.72:3000"}));

app.post("/missions", postMissionController);
app.get("/missions", getMissionController);
app.patch("/missions/:id", patchMissionStatusController);
app.delete("/missions/:id", deleteMissionController);

app.listen(port, () => {
    console.log("Servidor iniciado");
})