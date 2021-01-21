import React from 'react';
import styled from 'styled-components';
import Column from './column';
import {Input, TeamTypes} from '../types';
import UltMeter from './ult-meter';

interface PropState{
    input: Input;
    type: TeamTypes;
}
const Team = (props:PropState) =>{
    const {input, type} = props;
    const players = type === TeamTypes.home ? input.home.players : input.away.players;
    const team = type === TeamTypes.home ? input.home.team : input.away.team;
    return(
        <TeamWrapper>
            {
                players.map((player, i)=>{
                    return <UltMeter percentage={player.ultCharge} i={i}/>
                })
            }
            {
                players.map(player=>{
                    return <Column player={player} team={team}/>
                })
            }
        </TeamWrapper>
    )
};

export default Team;

const TeamWrapper = styled.div`
    & {
        min-width: 100%;
        min-height; 100vh;
        height: 100vh;
        display: flex;
    }
`