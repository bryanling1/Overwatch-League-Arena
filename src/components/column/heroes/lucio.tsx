import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Lucio = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <LucioWrapper src={`videos/${HeroSkins.dynastyLucio}.mp4`}/>}
        </div>
    )
}

export default Lucio;

const LucioWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 50vh;
        left: -6vw;
    }
`
