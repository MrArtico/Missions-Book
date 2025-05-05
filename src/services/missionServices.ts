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
    const id = missions.reduce((acc, mission) => Math.max(acc, mission.id), 0) + 1;
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

export function getMissions(): Missions[] {
    return missions;
}

export function getMissionById(id: number): Missions | undefined {
    const missionA = missions.find((m) => m.id === id);
    return missionA;
}

export function updatedStatus(id: number, status: string): boolean {
    let actualMission = getMissionById(id);
    const statusType = Object.values(MissionStats) as string[];
    if (!actualMission) {
        return false;
    }
    if(!statusType.includes(status) || !status){
        return false;
    }

    const newStatus: MissionStats = status as MissionStats;
    actualMission.status = newStatus;

    return true;
}

export function deleteMission(id: number): boolean {
    const mission = getMissionById(id);
    const index = missions.indexOf(mission as Missions);
    if(index != -1) {
        missions.splice(index, 1);
        return true;
    }
    return false;
}
