import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Winston = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <WinstonWrapper src={`videos/${HeroSkins.dynastyWinston}.mp4`}/>}
        </div>
    )
}

export default Winston;

const WinstonWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 26vh;
        left: 8vw;
    }
`
