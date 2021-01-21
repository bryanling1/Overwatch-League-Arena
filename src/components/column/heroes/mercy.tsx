import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Mercy = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <MercyWrapper src={`videos/${HeroSkins.dynastyMercy}.mp4`}/>}
        </div>
    )
}

export default Mercy;

const MercyWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3);
        top: 68vh;
        left: -6.5vw;
    }
`
