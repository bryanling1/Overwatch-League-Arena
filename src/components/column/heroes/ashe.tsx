import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Ashe = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <AsheWrapper src={`videos/${HeroSkins.dynastyAshe}.mp4`}/>}
        </div>
    )
}

export default Ashe;

const AsheWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3.3);
        top: 35vh;
        left: -18vw;
    }
`
