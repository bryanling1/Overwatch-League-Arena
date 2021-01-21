import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Baptiste = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <BaptisteWrapper src={`videos/${HeroSkins.dynastyBaptiste}.mp4`}/>}
        </div>
    )
}

export default Baptiste;

const BaptisteWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.7);
        top: 56vh;
        left: -2vw;
    }
`
