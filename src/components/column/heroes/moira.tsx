import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Moira = (props:StateProps) =>{
    const {team} = props;
    return(
        <MoiraWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyMoira}.mp4`} type="video/mp4"/>}
        </MoiraWrapper>
    )
}

export default Moira;

const MoiraWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.8);
        top: 70vh;
        left: -7.5vw;
    }
`
