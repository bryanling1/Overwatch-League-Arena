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
                isAlive: true,
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
                    let players = [...state.home.players];
                    players[action.payload.column - 1].hero = action.payload.hero;
                    return {
                        ...state,
                        home:{
                            players:[...players],
                            team: state.home.team
                        }
                    }
                }else{
                    let players = [...state.away.players];
                    players[action.payload.column - 1].hero = action.payload.hero;
                    return {
                        ...state,
                        away:{
                            players:[...players],
                            team: state.away.team
                        }
                    }
                }
            }
            return state;
        case ActionTypes.SwitchTeam:
            if( action.payload.type && 
                action.payload.team
            ){
                if(action.payload.type === TeamTypes.home){
                    return {
                        ...state,
                        home:{
                            team: action.payload.team,
                            players: [...state.home.players]
                        }
                    };
                }else{
                    return {
                        ...state,
                        away:{
                            team: action.payload.team,
                            players: [...state.away.players]
                        }
                    };
                }
            }
            return state;
        case ActionTypes.SetPercentage:
            if(
                action.payload.column && 
                action.payload.percentage && 
                action.payload.type &&
                action.payload.percentage >= 0 &&
                action.payload.percentage <= 100 &&
                action.payload.column >= 1 &&
                action.payload.column <= 6 
            ){
                if(action.payload.type === TeamTypes.home){
                    let players = [...state.home.players];
                    players[action.payload.column - 1].ultCharge = action.payload.percentage;
                    return {
                        ...state,
                        home:{
                            players:[...players],
                            team: state.home.team
                        }
                    }
                }else{
                    let players = [...state.away.players];
                    players[action.payload.column - 1].ultCharge = action.payload.percentage;
                    return {
                        ...state,
                        away:{
                            players:[...players],
                            team: state.away.team
                        }
                    }
                }
            }
            return state;
        case ActionTypes.SetIsAlive:
            if(
                action.payload.column && 
                action.payload.type &&
                action.payload.isAlive !== undefined &&
                action.payload.column >= 1 &&
                action.payload.column <= 6 
            ){
                if(action.payload.type === TeamTypes.home){
                    let players = [...state.home.players];
                    players[action.payload.column - 1].isAlive = action.payload.isAlive;
                    return {
                        ...state,
                        home:{
                            players:[...players],
                            team: state.home.team
                        }
                    }
                }else{
                    let players = [...state.away.players];
                    players[action.payload.column - 1].isAlive = action.payload.isAlive;
                    return {
                        ...state,
                        away:{
                            players:[...players],
                            team: state.away.team
                        }
                    }
                }
            }
            return state
        case ActionTypes.SetUsername:
            if(
                action.payload.column && 
                action.payload.type &&
                action.payload.username !== undefined &&
                action.payload.column >= 1 &&
                action.payload.column <= 6 
            ){
                if(action.payload.type === TeamTypes.home){
                    let players = [...state.home.players];
                    players[action.payload.column - 1].username = action.payload.username;
                    return {
                        ...state,
                        home:{
                            players:[...players],
                            team: state.home.team
                        }
                    }
                }else{
                    let players = [...state.away.players];
                    players[action.payload.column - 1].username = action.payload.username;
                    return {
                        ...state,
                        away:{
                            players:[...players],
                            team: state.away.team
                        }
                    }
                }
            }
            return state
        case ActionTypes.SetHealth:
            if(
                action.payload.column && 
                action.payload.health && 
                action.payload.type &&
                action.payload.health >= 0 &&
                action.payload.health <= 100 &&
                action.payload.column >= 1 &&
                action.payload.column <= 6 
            ){
                if(action.payload.type === TeamTypes.home){
                    let players = [...state.home.players];
                    players[action.payload.column - 1].health = action.payload.health
                    return {
                        ...state,
                        home:{
                            players:[...players],
                            team: state.home.team
                        }
                    }
                }else{
                    let players = [...state.away.players];
                    players[action.payload.column - 1].health = action.payload.health;
                    return {
                        ...state,
                        away:{
                            players:[...players],
                            team: state.away.team
                        }
                    }
                }
            }
            return state;
        default:
            return state;
    }
}

export default inputReducer;