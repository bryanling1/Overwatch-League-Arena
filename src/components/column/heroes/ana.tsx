import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Ana = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <AnaWrapper src={`videos/${HeroSkins.dynastyAna}.m4v`}/>}
        </div>
    )
}

export default Ana;

const AnaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 57vh;
        left: -5.5vw;
    }
`
