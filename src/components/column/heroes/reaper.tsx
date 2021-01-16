import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Reaper = (props:StateProps) =>{
    const {team} = props;
    return(
        <ReaperWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyReaper}.mp4`} type="video/mp4"/>}
        </ReaperWrapper>
    )
}

export default Reaper;

const ReaperWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.7);
        top: 63vh;
        left: -5vw;
    }
`
