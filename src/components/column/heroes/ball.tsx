import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Ball = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <BallWrapper src={`videos/${HeroSkins.dynastyBall}.mp4`}/>}
        </div>
    )
}

export default Ball;

const BallWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 53vh;
        left: -7vw;
    }
`
