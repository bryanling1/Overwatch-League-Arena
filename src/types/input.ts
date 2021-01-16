import {Heros} from './heros';
import {Teams} from './teams';

export interface Column{
    hero: Heros,
    ultCharge: number;
    isAlive: boolean;
    health: number;
    username:string;
}

export enum TeamTypes{
    home = "HOME",
    away = "AWAY",
}

export type Winner= TeamTypes | undefined;

export interface Input{
    winner: Winner;
    away: {
        team: Teams;
        players: [Column, Column, Column, Column, Column, Column];
    }
    home: {
        team: Teams;
        players: [Column, Column, Column, Column, Column, Column];
    }
}