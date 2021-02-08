import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Doomfist = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <DoomfistWrapper src={`videos/${HeroSkins.dynastyDoomfist}.mp4`}/>}
{team === Teams.reign && <DoomfistWrapper src={`videos/${HeroSkins.reignDoomfist}.mp4`}/>}
{team === Teams.uprising && <DoomfistWrapper src={`videos/${HeroSkins.uprisingDoomfist}.mp4`}/>}
{team === Teams.hunters && <DoomfistWrapper src={`videos/${HeroSkins.huntersDoomfist}.mp4`}/>}
{team === Teams.fuel && <DoomfistWrapper src={`videos/${HeroSkins.fuelDoomfist}.mp4`}/>}
{team === Teams.mayhem && <DoomfistWrapper src={`videos/${HeroSkins.mayhemDoomfist}.mp4`}/>}
{team === Teams.charge && <DoomfistWrapper src={`videos/${HeroSkins.chargeDoomfist}.mp4`}/>}
{team === Teams.spark && <DoomfistWrapper src={`videos/${HeroSkins.sparkDoomfist}.mp4`}/>}
{team === Teams.outlaws && <DoomfistWrapper src={`videos/${HeroSkins.outlawsDoomfist}.mp4`}/>}
{team === Teams.spitfire && <DoomfistWrapper src={`videos/${HeroSkins.spitfireDoomfist}.mp4`}/>}
{team === Teams.gladiators && <DoomfistWrapper src={`videos/${HeroSkins.gladiatorsDoomfist}.mp4`}/>}
{team === Teams.valiant && <DoomfistWrapper src={`videos/${HeroSkins.valiantDoomfist}.mp4`}/>}
{team === Teams.excelsior && <DoomfistWrapper src={`videos/${HeroSkins.excelsiorDoomfist}.mp4`}/>}
{team === Teams.eternal && <DoomfistWrapper src={`videos/${HeroSkins.eternalDoomfist}.mp4`}/>}
{team === Teams.fusion && <DoomfistWrapper src={`videos/${HeroSkins.fusionDoomfist}.mp4`}/>}
{team === Teams.shock && <DoomfistWrapper src={`videos/${HeroSkins.shockDoomfist}.mp4`}/>}
{team === Teams.dragons && <DoomfistWrapper src={`videos/${HeroSkins.dragonsDoomfist}.mp4`}/>}
{team === Teams.defiant && <DoomfistWrapper src={`videos/${HeroSkins.defiantDoomfist}.mp4`}/>}
{team === Teams.titans && <DoomfistWrapper src={`videos/${HeroSkins.titansDoomfist}.mp4`}/>}
{team === Teams.justice && <DoomfistWrapper src={`videos/${HeroSkins.justiceDoomfist}.mp4`}/>}
        </div>
    )
}

export default Doomfist;

const DoomfistWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3);
        top: 65vh;
        left: -3vw;
    }
`
