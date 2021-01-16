import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Genji = (props:StateProps) =>{
    const {team} = props;
    return(
        <GenjiWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyGenji}.mp4`} type="video/mp4"/>}
        </GenjiWrapper>
    )
}

export default Genji;

const GenjiWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 43vh;
        left: -3vw;
    }
`
