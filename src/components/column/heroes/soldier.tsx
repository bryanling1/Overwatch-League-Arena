import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Soldier = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <SoldierWrapper src={`videos/${HeroSkins.dynastySoldier}.mp4`}/>}
        </div>
    )
}

export default Soldier;

const SoldierWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.6);
        top: 55vh;
        left: -5vw;
    }
`
