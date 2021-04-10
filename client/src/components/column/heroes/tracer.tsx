import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Tracer = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <TracerWrapper src={`videos/${HeroSkins.dynastyTracer}.mp4`}/>}
{team === Teams.reign && <TracerWrapper src={`videos/${HeroSkins.reignTracer}.mp4`}/>}
{team === Teams.uprising && <TracerWrapper src={`videos/${HeroSkins.uprisingTracer}.mp4`}/>}
{team === Teams.hunters && <TracerWrapper src={`videos/${HeroSkins.huntersTracer}.mp4`}/>}
{team === Teams.fuel && <TracerWrapper src={`videos/${HeroSkins.fuelTracer}.mp4`}/>}
{team === Teams.mayhem && <TracerWrapper src={`videos/${HeroSkins.mayhemTracer}.mp4`}/>}
{team === Teams.charge && <TracerWrapper src={`videos/${HeroSkins.chargeTracer}.mp4`}/>}
{team === Teams.spark && <TracerWrapper src={`videos/${HeroSkins.sparkTracer}.mp4`}/>}
{team === Teams.outlaws && <TracerWrapper src={`videos/${HeroSkins.outlawsTracer}.mp4`}/>}
{team === Teams.spitfire && <TracerWrapper src={`videos/${HeroSkins.spitfireTracer}.mp4`}/>}
{team === Teams.gladiators && <TracerWrapper src={`videos/${HeroSkins.gladiatorsTracer}.mp4`}/>}
{team === Teams.valiant && <TracerWrapper src={`videos/${HeroSkins.valiantTracer}.mp4`}/>}
{team === Teams.excelsior && <TracerWrapper src={`videos/${HeroSkins.excelsiorTracer}.mp4`}/>}
{team === Teams.eternal && <TracerWrapper src={`videos/${HeroSkins.eternalTracer}.mp4`}/>}
{team === Teams.fusion && <TracerWrapper src={`videos/${HeroSkins.fusionTracer}.mp4`}/>}
{team === Teams.shock && <TracerWrapper src={`videos/${HeroSkins.shockTracer}.mp4`}/>}
{team === Teams.dragons && <TracerWrapper src={`videos/${HeroSkins.dragonsTracer}.mp4`}/>}
{team === Teams.defiant && <TracerWrapper src={`videos/${HeroSkins.defiantTracer}.mp4`}/>}
{team === Teams.titans && <TracerWrapper src={`videos/${HeroSkins.titansTracer}.mp4`}/>}
{team === Teams.justice && <TracerWrapper src={`videos/${HeroSkins.justiceTracer}.mp4`}/>}
        </div>
    )
}

export default Tracer;

const TracerWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 46vh;
        left: -5vw;
    }
`
