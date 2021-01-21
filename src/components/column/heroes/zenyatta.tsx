import React, {Fragment} from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Zenyatta = (props:StateProps) =>{
    const {team} = props;
    return(
        <Fragment>
        {team === Teams.dynasty && <ZenWrapper src={`videos/${HeroSkins.dynastyZenyatta}.mp4`}/>}
        </Fragment>
    )
}

export default Zenyatta;

const ZenWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2);
        top: 25vh;
        left: -3vw;
    }
`

