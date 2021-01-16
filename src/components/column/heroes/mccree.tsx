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
        <MccreeWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyMccree}.mp4`} type="video/mp4"/>}
        </MccreeWrapper>
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
