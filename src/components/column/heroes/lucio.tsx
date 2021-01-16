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
        <LucioWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyLucio}.mp4`} type="video/mp4"/>}
        </LucioWrapper>
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
