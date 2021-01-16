import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Brigitte = (props:StateProps) =>{
    const {team} = props;
    return(
        <BrigitteWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyBrigitte}.mp4`} type="video/mp4"/>}
        </BrigitteWrapper>
    )
}

export default Brigitte;

const BrigitteWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 43vh;
        left: -5vw;
    }
`
