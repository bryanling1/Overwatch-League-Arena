import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Torb = (props:StateProps) =>{
    const {team} = props;
    return(
        <TorbWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyTorb}.mp4`} type="video/mp4"/>}
        </TorbWrapper>
    )
}

export default Torb;

const TorbWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 7vh;
        left: -3vw;
    }
`
