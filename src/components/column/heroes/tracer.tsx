import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Tracer = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <TracerWrapper src={`videos/${HeroSkins.dynastyTracer}.mp4`}/>}
        </div>
    )
}

export default Tracer;

const TracerWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 46vh;
        left: -4vw;
    }
`
