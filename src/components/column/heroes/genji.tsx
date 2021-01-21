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
        <div>
        {team === Teams.dynasty && <GenjiWrapper src={`videos/${HeroSkins.dynastyGenji}.mp4`}/>}
        </div>
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
