import {TeamTypes, Heros, Teams} from '../../types';

export enum ActionTypes{
    SwitchHero = "SWITCH_HERO",
    SwitchTeam = "SWITCH_TEAM",
    SetPercentage = "SET_PERCENTAGE",
}

export interface Payload{
    type?:TeamTypes;
    column?:number;
    hero?: Heros;
    team?: Teams;
    percentage?: number;
}

export interface Action{
    type: ActionTypes,
    payload: Payload
}

export const switchHero = (type:TeamTypes, column:number, hero:Heros):Action => {
    return {
        type: ActionTypes.SwitchHero,
        payload: { type, column, hero}
    }
}

export const switchTeam = (type:TeamTypes, team:Teams):Action =>{
    return {
        type: ActionTypes.SwitchTeam,
        payload: {type, team}
    }
}

export const setPercentage = (type:TeamTypes, column:number, percentage:number):Action =>{
    return {
        type: ActionTypes.SetPercentage,
        payload: {
            type, 
            column,
            percentage
        }
    }
}