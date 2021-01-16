import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Zenyatta = (props:StateProps) =>{
    const {team} = props;
    return(
        <ZenWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyZenyatta}.mp4`} type="video/mp4"/>}
        </ZenWrapper>
    )
}

export default Zenyatta;

const ZenWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2);
        top: 25vh;
        left: -3vw;
    }
`

