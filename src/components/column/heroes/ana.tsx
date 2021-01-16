import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Ana = (props:StateProps) =>{
    const {team} = props;
    return(
        <AnaWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyAna}.mp4`} type="video/mp4"/>}
        </AnaWrapper>
    )
}

export default Ana;

const AnaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 57vh;
        left: -5.5vw;
    }
`
