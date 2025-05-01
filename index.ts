import express from 'express';
import cors from 'cors';
import { getMissionController, postMissionController } from './src/controllers/missionController';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/missions", postMissionController);
app.get("/missions", getMissionController)

app.listen(port, () => {
    console.log("Servidor iniciado");
})