import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Dva = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <DvaWrapper src={`videos/${HeroSkins.dynastyDva}.mp4`}/>}
        </div>
    )
}

export default Dva;

const DvaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3.3);
        top: 7vh;
        left: 17vw;
    }
`
