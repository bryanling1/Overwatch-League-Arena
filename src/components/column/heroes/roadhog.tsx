import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Roadhog = (props:StateProps) =>{
    const {team} = props;
    return(
        <RoadhogWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyRoadhog}.mp4`} type="video/mp4"/>}
        </RoadhogWrapper>
    )
}

export default Roadhog;

const RoadhogWrapper = styled(VideoWrapper)`
    & {
        transform: scale(1.8);
        top: 30vh;
        left: -3vw;
    }
`
