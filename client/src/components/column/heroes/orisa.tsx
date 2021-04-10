import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Orisa = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
{team === Teams.dynasty && <OrisaWrapper src={`videos/${HeroSkins.dynastyOrisa}.mp4`}/>}
{team === Teams.reign && <OrisaWrapper src={`videos/${HeroSkins.reignOrisa}.mp4`}/>}
{team === Teams.uprising && <OrisaWrapper src={`videos/${HeroSkins.uprisingOrisa}.mp4`}/>}
{team === Teams.hunters && <OrisaWrapper src={`videos/${HeroSkins.huntersOrisa}.mp4`}/>}
{team === Teams.fuel && <OrisaWrapper src={`videos/${HeroSkins.fuelOrisa}.mp4`}/>}
{team === Teams.mayhem && <OrisaWrapper src={`videos/${HeroSkins.mayhemOrisa}.mp4`}/>}
{team === Teams.charge && <OrisaWrapper src={`videos/${HeroSkins.chargeOrisa}.mp4`}/>}
{team === Teams.spark && <OrisaWrapper src={`videos/${HeroSkins.sparkOrisa}.mp4`}/>}
{team === Teams.outlaws && <OrisaWrapper src={`videos/${HeroSkins.outlawsOrisa}.mp4`}/>}
{team === Teams.spitfire && <OrisaWrapper src={`videos/${HeroSkins.spitfireOrisa}.mp4`}/>}
{team === Teams.gladiators && <OrisaWrapper src={`videos/${HeroSkins.gladiatorsOrisa}.mp4`}/>}
{team === Teams.valiant && <OrisaWrapper src={`videos/${HeroSkins.valiantOrisa}.mp4`}/>}
{team === Teams.excelsior && <OrisaWrapper src={`videos/${HeroSkins.excelsiorOrisa}.mp4`}/>}
{team === Teams.eternal && <OrisaWrapper src={`videos/${HeroSkins.eternalOrisa}.mp4`}/>}
{team === Teams.fusion && <OrisaWrapper src={`videos/${HeroSkins.fusionOrisa}.mp4`}/>}
{team === Teams.shock && <OrisaWrapper src={`videos/${HeroSkins.shockOrisa}.mp4`}/>}
{team === Teams.dragons && <OrisaWrapper src={`videos/${HeroSkins.dragonsOrisa}.mp4`}/>}
{team === Teams.defiant && <OrisaWrapper src={`videos/${HeroSkins.defiantOrisa}.mp4`}/>}
{team === Teams.titans && <OrisaWrapper src={`videos/${HeroSkins.titansOrisa}.mp4`}/>}
{team === Teams.justice && <OrisaWrapper src={`videos/${HeroSkins.justiceOrisa}.mp4`}/>}
        </div>
    )
}

export default Orisa;

const OrisaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(1.9);
        top: 30vh;
        left: 2vw;
    }
`
