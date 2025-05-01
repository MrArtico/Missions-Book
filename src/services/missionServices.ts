import { MissionDifficult } from "../models/Missions/MissionDifficult";
import { Missions } from "../models/Missions/Missions";
import { MissionStats } from "../models/Missions/MissionStats";

// Falso banco de dados
const missions: Missions[] = [{
    id: 1,
    titulo: "Mate o Rei Demônio",
    descricao: "Derrote o lorde do mau.",
    dificuldade: MissionDifficult.HARD,
    prazo: new Date(),
    recompensaXP: 10000,
    status: MissionStats.PENDENTE
}]

export function createMission(
    titulo: string,
    descricao: string,
    dificuldade: string,
    prazo: string,
    recompensaXP: number
): Missions | undefined {
    const id = missions.reduce((acc, mission) => Math.max(acc, mission.id), 0)+1; 
    const difficultType = Object.values(MissionDifficult) as string[];
    if (!difficultType.includes(dificuldade)) {
        throw new Error("Dificuldade inválida.")
    }

    const difficult = dificuldade as MissionDifficult;
    const expiredDate = new Date(prazo);

    const newMission: Missions = {
        id,
        titulo,
        descricao,
        dificuldade: difficult,
        prazo: expiredDate,
        recompensaXP,
        status: MissionStats.PENDENTE
    };
    missions.push(newMission);
    return newMission;
}

export function getMission(): Missions[] {
    return missions;
}