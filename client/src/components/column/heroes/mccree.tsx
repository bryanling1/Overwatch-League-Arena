import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Mccree = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <MccreeWrapper src={`videos/${HeroSkins.dynastyMccree}.mp4`}/>}
{team === Teams.reign && <MccreeWrapper src={`videos/${HeroSkins.reignMccree}.mp4`}/>}
{team === Teams.uprising && <MccreeWrapper src={`videos/${HeroSkins.uprisingMccree}.mp4`}/>}
{team === Teams.hunters && <MccreeWrapper src={`videos/${HeroSkins.huntersMccree}.mp4`}/>}
{team === Teams.fuel && <MccreeWrapper src={`videos/${HeroSkins.fuelMccree}.mp4`}/>}
{team === Teams.mayhem && <MccreeWrapper src={`videos/${HeroSkins.mayhemMccree}.mp4`}/>}
{team === Teams.charge && <MccreeWrapper src={`videos/${HeroSkins.chargeMccree}.mp4`}/>}
{team === Teams.spark && <MccreeWrapper src={`videos/${HeroSkins.sparkMccree}.mp4`}/>}
{team === Teams.outlaws && <MccreeWrapper src={`videos/${HeroSkins.outlawsMccree}.mp4`}/>}
{team === Teams.spitfire && <MccreeWrapper src={`videos/${HeroSkins.spitfireMccree}.mp4`}/>}
{team === Teams.gladiators && <MccreeWrapper src={`videos/${HeroSkins.gladiatorsMccree}.mp4`}/>}
{team === Teams.valiant && <MccreeWrapper src={`videos/${HeroSkins.valiantMccree}.mp4`}/>}
{team === Teams.excelsior && <MccreeWrapper src={`videos/${HeroSkins.excelsiorMccree}.mp4`}/>}
{team === Teams.eternal && <MccreeWrapper src={`videos/${HeroSkins.eternalMccree}.mp4`}/>}
{team === Teams.fusion && <MccreeWrapper src={`videos/${HeroSkins.fusionMccree}.mp4`}/>}
{team === Teams.shock && <MccreeWrapper src={`videos/${HeroSkins.shockMccree}.mp4`}/>}
{team === Teams.dragons && <MccreeWrapper src={`videos/${HeroSkins.dragonsMccree}.mp4`}/>}
{team === Teams.defiant && <MccreeWrapper src={`videos/${HeroSkins.defiantMccree}.mp4`}/>}
{team === Teams.titans && <MccreeWrapper src={`videos/${HeroSkins.titansMccree}.mp4`}/>}
{team === Teams.justice && <MccreeWrapper src={`videos/${HeroSkins.justiceMccree}.mp4`}/>}
        </div>
    )
}

export default Mccree;

const MccreeWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 57vh;
        left: -6vw;
    }
`
