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
        <TracerWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyTracer}.mp4`} type="video/mp4"/>}
        </TracerWrapper>
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
