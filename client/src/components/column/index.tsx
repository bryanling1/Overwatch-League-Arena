import React from 'react';
import styled from 'styled-components';
import Gradient from './gradient';
import UltMeter from './ult-meter';
import {
    Column as ColumnType, 
    Teams, 
} from '../../types';
import HeroSkin from './hero-skin';
import DeathTimer from './death-timer';
import Username from './username';
import Health from './health';

interface StateProps{
    player: ColumnType;
    team: Teams;
    column: number;
};

const Column = (props:StateProps) =>{
    const { player, team, column} = props;
    const {hero, ultCharge, isAlive, username, health} = player;
    return(
        <ColumnWrapper>
            <HiddenWrapper>
                <DeathTimer isAlive={isAlive} column={column}/>
                <Gradient team={team}/>
                <HeroSkin team={team} hero={hero} isAlive={isAlive}/>
            </HiddenWrapper>
            <UltChargeWrapper>
                <UltMeter percentage={ultCharge} column={column} player={player} team={team}/>
                <Username username={username} isAlive={isAlive}/>
                <Health health={health} isAlive={isAlive} column={column} hero={hero}/>
            </UltChargeWrapper>    
        </ColumnWrapper>
    )
}

export default Column;

const ColumnWrapper = styled.div`
    & {
        height: 100vh;
        min-height: 100vh;
        width: ${100/6 - 0.4}%;
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
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const UltChargeWrapper = styled.div`
    & {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        bottom: 50px;
        left:0;
        flex-direction: column;
    }
`



