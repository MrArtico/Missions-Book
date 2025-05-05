import express from 'express';
import cors from 'cors';
import { deleteMissionController, getMissionController, patchMissionStatusController, postMissionController } from './controllers/missionController';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/missions", postMissionController);
app.get("/missions", getMissionController);
app.patch("/missions/:id", patchMissionStatusController);
app.delete("/missions/:id", deleteMissionController);

app.listen(port, () => {
    console.log("Servidor iniciado");
})