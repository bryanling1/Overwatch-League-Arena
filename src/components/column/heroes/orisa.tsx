import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Orisa = (props:StateProps) =>{
    const {team} = props;
    return(
        <OrisaWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyOrisa}.mp4`} type="video/mp4"/>}
        </OrisaWrapper>
    )
}

export default Orisa;

const OrisaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(1.9);
        top: 30vh;
        left: 4vw;
    }
`
