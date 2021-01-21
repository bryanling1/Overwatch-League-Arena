import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Reinhardt = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <ReinhardtWrapper src={`videos/${HeroSkins.dynastyReinhardt}.mp4`}/>}
        </div>
    )
}

export default Reinhardt;

const ReinhardtWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.7);
        top: 67vh;
        left: 0vw;
    }
`
