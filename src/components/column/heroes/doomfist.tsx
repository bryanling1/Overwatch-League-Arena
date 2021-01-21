import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Doomfist = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <DoomfistWrapper src={`videos/${HeroSkins.dynastyDoomfist}.mp4`}/>}
        </div>
    )
}

export default Doomfist;

const DoomfistWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3);
        top: 65vh;
        left: -3vw;
    }
`
