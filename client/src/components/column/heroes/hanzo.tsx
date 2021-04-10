import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Hanzo = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <HanzoWrapper src={`videos/${HeroSkins.dynastyHanzo}.mp4`}/>}
{team === Teams.reign && <HanzoWrapper src={`videos/${HeroSkins.reignHanzo}.mp4`}/>}
{team === Teams.uprising && <HanzoWrapper src={`videos/${HeroSkins.uprisingHanzo}.mp4`}/>}
{team === Teams.hunters && <HanzoWrapper src={`videos/${HeroSkins.huntersHanzo}.mp4`}/>}
{team === Teams.fuel && <HanzoWrapper src={`videos/${HeroSkins.fuelHanzo}.mp4`}/>}
{team === Teams.mayhem && <HanzoWrapper src={`videos/${HeroSkins.mayhemHanzo}.mp4`}/>}
{team === Teams.charge && <HanzoWrapper src={`videos/${HeroSkins.chargeHanzo}.mp4`}/>}
{team === Teams.spark && <HanzoWrapper src={`videos/${HeroSkins.sparkHanzo}.mp4`}/>}
{team === Teams.outlaws && <HanzoWrapper src={`videos/${HeroSkins.outlawsHanzo}.mp4`}/>}
{team === Teams.spitfire && <HanzoWrapper src={`videos/${HeroSkins.spitfireHanzo}.mp4`}/>}
{team === Teams.gladiators && <HanzoWrapper src={`videos/${HeroSkins.gladiatorsHanzo}.mp4`}/>}
{team === Teams.valiant && <HanzoWrapper src={`videos/${HeroSkins.valiantHanzo}.mp4`}/>}
{team === Teams.excelsior && <HanzoWrapper src={`videos/${HeroSkins.excelsiorHanzo}.mp4`}/>}
{team === Teams.eternal && <HanzoWrapper src={`videos/${HeroSkins.eternalHanzo}.mp4`}/>}
{team === Teams.fusion && <HanzoWrapper src={`videos/${HeroSkins.fusionHanzo}.mp4`}/>}
{team === Teams.shock && <HanzoWrapper src={`videos/${HeroSkins.shockHanzo}.mp4`}/>}
{team === Teams.dragons && <HanzoWrapper src={`videos/${HeroSkins.dragonsHanzo}.mp4`}/>}
{team === Teams.defiant && <HanzoWrapper src={`videos/${HeroSkins.defiantHanzo}.mp4`}/>}
{team === Teams.titans && <HanzoWrapper src={`videos/${HeroSkins.titansHanzo}.mp4`}/>}
{team === Teams.justice && <HanzoWrapper src={`videos/${HeroSkins.justiceHanzo}.mp4`}/>}
        </div>
    )
}

export default Hanzo;

const HanzoWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 56vh;
        left: -6.5vw;
    }
`
