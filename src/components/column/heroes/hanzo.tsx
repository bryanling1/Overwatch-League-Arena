import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Hanzo = (props:StateProps) =>{
    const {team} = props;
    return(
        <HanzoWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyHanzo}.mp4`} type="video/mp4"/>}
        </HanzoWrapper>
    )
}

export default Hanzo;

const HanzoWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 56vh;
        left: -4vw;
    }
`
