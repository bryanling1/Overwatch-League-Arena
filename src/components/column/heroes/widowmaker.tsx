import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Widowmaker = (props:StateProps) =>{
    const {team} = props;
    return(
        <WidowmakerWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyWidowmaker}.mp4`} type="video/mp4"/>}
        </WidowmakerWrapper>
    )
}

export default Widowmaker;

const WidowmakerWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 50vh;
        left: -6vw;
    }
`
