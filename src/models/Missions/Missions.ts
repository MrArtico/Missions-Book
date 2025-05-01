import { MissionDifficult } from "./MissionDifficult";
import { MissionStats } from "./MissionStats";

export interface Missions {
    id: number;
    titulo: string;
    descricao: string;
    dificuldade: MissionDifficult;
    prazo: Date;
    recompensaXP: number;
    status: MissionStats;
}