import {TeamTypes, Heros, Teams} from '../../types';

export enum ActionTypes{
    SwitchHero = "SWITCH_HERO",
    SwitchTeam = "SWITCH_TEAM",
    SetPercentage = "SET_PERCENTAGE",
    SetIsAlive = "SET_IS_ALIVE",
    SetUsername = "SET_USERNAME",
    SetHealth = "SET_HEALTH",
}

export interface Payload{
    type?:TeamTypes;
    column?:number;
    hero?: Heros;
    team?: Teams;
    percentage?: number;
    isAlive?: boolean;
    username?: string;
    health?: number;
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

export const setIsAlive = (type: TeamTypes, column:number, isAlive:boolean):Action =>{
    return {
        type: ActionTypes.SetIsAlive,
        payload:{
            type,
            column,
            isAlive
        }
    }
}

export const setUsername = (type: TeamTypes, column:number, username:string):Action=>{
    return{
        type: ActionTypes.SetUsername,
        payload:{
            type,
            column,
            username
        }
    }
}

export const setHealth = (type: TeamTypes, column:number, health:number):Action=>{
    return{
        type: ActionTypes.SetHealth,
        payload:{
            type,
            column,
            health
        }
    }
}