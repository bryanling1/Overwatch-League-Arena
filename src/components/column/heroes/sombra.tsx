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
        <div>
        {team === Teams.dynasty && <SombraWrapper src={`videos/${HeroSkins.dynastySombra}.mp4`}/>}
        </div>
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
