import React from 'react';
import styled from 'styled-components';
import Column from './column';
import {Input, TeamTypes} from '../types';

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
            <Column player={players[0]} team={team}/>
            <Column player={players[1]} team={team}/>
            <Column player={players[2]} team={team}/>
            <Column player={players[3]} team={team}/>
            <Column player={players[4]} team={team}/>
            <Column player={players[5]} team={team}/>
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