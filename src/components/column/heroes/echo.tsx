import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Echo = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <EchoWrapper src={`videos/${HeroSkins.dynastyEcho}.mp4`}/>}
        </div>
    )
}

export default Echo;

const EchoWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3.1);
        top: 70vh;
        left: -8vw;
    }
`
