import { Request, Response } from "express";
import { createMission, deleteMission, getMissions, updatedStatus } from "../services/missionServices";


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
    res.status(200).json(getMissions());
}

export function patchMissionStatusController(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    if (!id) {
        res.status(400).json({ error: "ID inválido!" });
        return;
    }
    if (!status) {
        res.status(400).json({ error: "É necessário um status para definir!" });
        return;
    }
    const updated = updatedStatus(id, status);
    res.status(200).json({ updated });
}

export function deleteMissionController(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (!id) {
        res.status(400).json({error: "ID inválido!"});
        return;
    }
    const deleted = deleteMission(id);
    res.status(200).json({deleted});
}