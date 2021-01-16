import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Bastion = (props:StateProps) =>{
    const {team} = props;
    return(
        <BastionWrapper >
            {team === Teams.dynasty &&  <source src={`videos/${HeroSkins.dynastyBastion}.mp4`} type="video/mp4"/>}
        </BastionWrapper>
    )
}

export default Bastion;

const BastionWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 43vh;
        left: -5vw;
    }
`
