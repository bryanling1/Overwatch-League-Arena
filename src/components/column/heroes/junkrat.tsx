import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Junkrat = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <JunkratWrapper src={`videos/${HeroSkins.dynastyJunkrat}.mp4`}/>}
        </div>
    )
}

export default Junkrat;

const JunkratWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.2);
        top: 36vh;
        left: -1vw;
    }
`
