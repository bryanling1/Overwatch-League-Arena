import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Ana = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <AnaWrapper src={`videos/${HeroSkins.dynastyAna}.mp4`}/>}
{team === Teams.reign && <AnaWrapper src={`videos/${HeroSkins.reignAna}.mp4`}/>}
{team === Teams.uprising && <AnaWrapper src={`videos/${HeroSkins.uprisingAna}.mp4`}/>}
{team === Teams.hunters && <AnaWrapper src={`videos/${HeroSkins.huntersAna}.mp4`}/>}
{team === Teams.fuel && <AnaWrapper src={`videos/${HeroSkins.fuelAna}.mp4`}/>}
{team === Teams.mayhem && <AnaWrapper src={`videos/${HeroSkins.mayhemAna}.mp4`}/>}
{team === Teams.charge && <AnaWrapper src={`videos/${HeroSkins.chargeAna}.mp4`}/>}
{team === Teams.spark && <AnaWrapper src={`videos/${HeroSkins.sparkAna}.mp4`}/>}
{team === Teams.outlaws && <AnaWrapper src={`videos/${HeroSkins.outlawsAna}.mp4`}/>}
{team === Teams.spitfire && <AnaWrapper src={`videos/${HeroSkins.spitfireAna}.mp4`}/>}
{team === Teams.gladiators && <AnaWrapper src={`videos/${HeroSkins.gladiatorsAna}.mp4`}/>}
{team === Teams.valiant && <AnaWrapper src={`videos/${HeroSkins.valiantAna}.mp4`}/>}
{team === Teams.excelsior && <AnaWrapper src={`videos/${HeroSkins.excelsiorAna}.mp4`}/>}
{team === Teams.eternal && <AnaWrapper src={`videos/${HeroSkins.eternalAna}.mp4`}/>}
{team === Teams.fusion && <AnaWrapper src={`videos/${HeroSkins.fusionAna}.mp4`}/>}
{team === Teams.shock && <AnaWrapper src={`videos/${HeroSkins.shockAna}.mp4`}/>}
{team === Teams.dragons && <AnaWrapper src={`videos/${HeroSkins.dragonsAna}.mp4`}/>}
{team === Teams.defiant && <AnaWrapper src={`videos/${HeroSkins.defiantAna}.mp4`}/>}
{team === Teams.titans && <AnaWrapper src={`videos/${HeroSkins.titansAna}.mp4`}/>}
{team === Teams.justice && <AnaWrapper src={`videos/${HeroSkins.justiceAna}.mp4`}/>}
        </div>
    )
}

export default Ana;

const AnaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 57vh;
        left: -5.5vw;
    }
`
