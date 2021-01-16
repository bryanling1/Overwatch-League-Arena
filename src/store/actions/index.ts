import {TeamTypes, Heros} from '../../types';

export enum ActionTypes{
    SwitchHero = "SWITCH_HERO",
}

export interface Payload{
    type?:TeamTypes;
    column?:number;
    hero?: Heros;
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