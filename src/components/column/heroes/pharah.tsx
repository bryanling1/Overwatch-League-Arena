import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Pharah = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <PharahWrapper src={`videos/${HeroSkins.dynastyPharah}.mp4`}/>}
        </div>
    )
}

export default Pharah;

const PharahWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.7);
        top: 60vh;
        left: -4vw;
    }
`
