import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Sombra = (props:StateProps) =>{
    const {team} = props;
    return(
        <SombraWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastySombra}.mp4`} type="video/mp4"/>}
        </SombraWrapper>
    )
}

export default Sombra;

const SombraWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.8);
        top: 60vh;
        left: -5vw;
    }
`
