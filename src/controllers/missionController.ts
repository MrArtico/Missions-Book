import { Request, Response } from "express";
import { createMission, getMission } from "../services/missionServices";


export function postMissionController(req: Request, res: Response): void {
    const { titulo, descricao, dificuldade, prazo, recompensaXP } = req.body;
    console.log(titulo, descricao, dificuldade, prazo, recompensaXP)
    if (!titulo || !descricao || !dificuldade || !prazo || !recompensaXP) {
        res.status(400).json({ error: "Faltam campos a serem preenchidos" });
        return;
    }
    const incomingMission = createMission(titulo, descricao, dificuldade, prazo, parseInt(recompensaXP));
    res.status(200).json(incomingMission);
}

export function getMissionController(req: Request, res: Response): void {
    res.status(200).json(getMission());
}