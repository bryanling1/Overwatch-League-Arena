import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Sigma = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <SigmaWrapper src={`videos/${HeroSkins.dynastySigma}.mp4`}/>}
        </div>
    )
}

export default Sigma;

const SigmaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3);
        top: 69vh;
        left: -4vw;
    }
`
