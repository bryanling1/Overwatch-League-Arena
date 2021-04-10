import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Baptiste = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <BaptisteWrapper src={`videos/${HeroSkins.dynastyBaptiste}.mp4`}/>}
{team === Teams.reign && <BaptisteWrapper src={`videos/${HeroSkins.reignBaptiste}.mp4`}/>}
{team === Teams.uprising && <BaptisteWrapper src={`videos/${HeroSkins.uprisingBaptiste}.mp4`}/>}
{team === Teams.hunters && <BaptisteWrapper src={`videos/${HeroSkins.huntersBaptiste}.mp4`}/>}
{team === Teams.fuel && <BaptisteWrapper src={`videos/${HeroSkins.fuelBaptiste}.mp4`}/>}
{team === Teams.mayhem && <BaptisteWrapper src={`videos/${HeroSkins.mayhemBaptiste}.mp4`}/>}
{team === Teams.charge && <BaptisteWrapper src={`videos/${HeroSkins.chargeBaptiste}.mp4`}/>}
{team === Teams.spark && <BaptisteWrapper src={`videos/${HeroSkins.sparkBaptiste}.mp4`}/>}
{team === Teams.outlaws && <BaptisteWrapper src={`videos/${HeroSkins.outlawsBaptiste}.mp4`}/>}
{team === Teams.spitfire && <BaptisteWrapper src={`videos/${HeroSkins.spitfireBaptiste}.mp4`}/>}
{team === Teams.gladiators && <BaptisteWrapper src={`videos/${HeroSkins.gladiatorsBaptiste}.mp4`}/>}
{team === Teams.valiant && <BaptisteWrapper src={`videos/${HeroSkins.valiantBaptiste}.mp4`}/>}
{team === Teams.excelsior && <BaptisteWrapper src={`videos/${HeroSkins.excelsiorBaptiste}.mp4`}/>}
{team === Teams.eternal && <BaptisteWrapper src={`videos/${HeroSkins.eternalBaptiste}.mp4`}/>}
{team === Teams.fusion && <BaptisteWrapper src={`videos/${HeroSkins.fusionBaptiste}.mp4`}/>}
{team === Teams.shock && <BaptisteWrapper src={`videos/${HeroSkins.shockBaptiste}.mp4`}/>}
{team === Teams.dragons && <BaptisteWrapper src={`videos/${HeroSkins.dragonsBaptiste}.mp4`}/>}
{team === Teams.defiant && <BaptisteWrapper src={`videos/${HeroSkins.defiantBaptiste}.mp4`}/>}
{team === Teams.titans && <BaptisteWrapper src={`videos/${HeroSkins.titansBaptiste}.mp4`}/>}
{team === Teams.justice && <BaptisteWrapper src={`videos/${HeroSkins.justiceBaptiste}.mp4`}/>}
        </div>
    )
}

export default Baptiste;

const BaptisteWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.7);
        top: 56vh;
        left: -2.5vw;
    }
`
