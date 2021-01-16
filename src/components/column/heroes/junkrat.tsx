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
        <JunkratWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyJunkrat}.mp4`} type="video/mp4"/>}
        </JunkratWrapper>
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
