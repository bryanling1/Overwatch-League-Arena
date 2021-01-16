import React from 'react';
import styled from 'styled-components';
import Gradient from './gradient';
import {
    TeamGradients, 
    Column as ColumnType, 
    Teams, 
} from '../../types';
import HeroSkin from './hero-skin';

interface StateProps{
    player: ColumnType;
    team: Teams;
};

const Column = (props:StateProps) =>{
    const { player, team } = props;
    const {hero} = player;
    // const {hero, ultCharge, isAlive, health, username} = player;
    return(
        <ColumnWrapper>
            <Gradient color={TeamGradients.dynasty}/>
            <HeroSkin team={team} hero={hero}/>
        </ColumnWrapper>
    )
}

export default Column;

const ColumnWrapper = styled.div`
    & {
        height: 100vh;
        min-height: 100vh;
        width: ${100/6}%;
        background-size: cover;
        position: relative;
        overflow: hidden;
        background-color: black;
    }
`



