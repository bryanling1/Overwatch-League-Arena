import React from 'react';
import Team from '../team';
import {Input, Teams, Heros, TeamTypes} from '../../types';

interface PropState{
    type: TeamTypes
}

const Display = (props:PropState) =>{
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
    return(<Team input={dummyData} type={props.type}/>)
}

export default Display;