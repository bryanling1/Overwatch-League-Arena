import {Input, Teams, Heros, TeamTypes} from '../../types';
import { ActionTypes, Action } from '../actions';

const dummyData:Input = {
    winner: undefined,
    home:{
        team: Teams.dynasty,
        players:[
            {
                hero: Heros.symmetra,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 1",
            },
            {
                hero: Heros.torb,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 2",
            },
            {
                hero: Heros.tracer,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 3",
            },
            {
                hero: Heros.widowmaker,
                ultCharge: 50,
                isAlive: false,
                health: 100,
                username:"player 4",
            },
            {
                hero: Heros.winston,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 5",
            },
            {
                hero: Heros.zarya,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 6",
            },
        ]
    },
    away:{
        team: Teams.dynasty,
        players:[
            {
                hero: Heros.zenyatta,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 1",
            },
            {
                hero: Heros.zarya,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 2",
            },
            {
                hero: Heros.reaper,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 3",
            },
            {
                hero: Heros.reinhardt,
                ultCharge: 50,
                isAlive: false,
                health: 100,
                username:"player 4",
            },
            {
                hero: Heros.ana,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 5",
            },
            {
                hero: Heros.mccree,
                ultCharge: 50,
                isAlive: true,
                health: 100,
                username:"player 6",
            },
        ]
    }
}

const inputReducer = (state:Input=dummyData, action:Action) =>{
    switch(action.type){
        case ActionTypes.SwitchHero:
            if( action.payload.column && 
                action.payload.type && 
                action.payload.hero &&
                action.payload.column >= 1 &&
                action.payload.column <= 6 
            ){
                if(action.payload.type === TeamTypes.home){
                    state.home.players[action.payload.column - 1].hero = action.payload.hero;
                    return state;
                }else{
                    state.away.players[action.payload.column - 1].hero = action.payload.hero;
                    return state;
                }
            }
            return state;
        default:
            return state;
    }
}

export default inputReducer;