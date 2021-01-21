import React from 'react';
import styled from 'styled-components';
import Gradient from './gradient';
import UltMeter from './ult-meter';
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
    const {hero, ultCharge} = player;
    // const {hero, ultCharge, isAlive, health, username} = player;
    return(
        <ColumnWrapper>
            <HiddenWrapper>
                <Gradient color={TeamGradients.dynasty}/>
                <HeroSkin team={team} hero={hero}/>
            </HiddenWrapper>
            <UltChargeWrapper>
                <UltMeter percentage={ultCharge}/>
            </UltChargeWrapper>    
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
        background-color: white;
    }
`

const HiddenWrapper = styled.div`
    & {
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
`

const UltChargeWrapper = styled.div`
    & {
        height: 100%;
        width: 100%;

    }
`



