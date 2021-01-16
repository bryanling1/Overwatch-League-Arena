import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Mercy = (props:StateProps) =>{
    const {team} = props;
    return(
        <MercyWrapper>
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyMercy}.mp4`} type="video/mp4"/>}
        </MercyWrapper>
    )
}

export default Mercy;

const MercyWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3);
        top: 68vh;
        left: -6.5vw;
    }
`
