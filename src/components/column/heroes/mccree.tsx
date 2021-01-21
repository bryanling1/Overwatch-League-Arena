import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Mccree = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <MccreeWrapper src={`videos/${HeroSkins.dynastyMccree}.mp4`}/>}
        </div>
    )
}

export default Mccree;

const MccreeWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 57vh;
        left: -4vw;
    }
`
