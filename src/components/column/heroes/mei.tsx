import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Mei = (props:StateProps) =>{
    const {team} = props;
    return(
        <MeiWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyMei}.mp4`} type="video/mp4"/>}
        </MeiWrapper>
    )
}

export default Mei;

const MeiWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 45vh;
        left: -6.5vw;
    }
`
