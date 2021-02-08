import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Mei = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <MeiWrapper src={`videos/${HeroSkins.dynastyMei}.mp4`}/>}
{team === Teams.reign && <MeiWrapper src={`videos/${HeroSkins.reignMei}.mp4`}/>}
{team === Teams.uprising && <MeiWrapper src={`videos/${HeroSkins.uprisingMei}.mp4`}/>}
{team === Teams.hunters && <MeiWrapper src={`videos/${HeroSkins.huntersMei}.mp4`}/>}
{team === Teams.fuel && <MeiWrapper src={`videos/${HeroSkins.fuelMei}.mp4`}/>}
{team === Teams.mayhem && <MeiWrapper src={`videos/${HeroSkins.mayhemMei}.mp4`}/>}
{team === Teams.charge && <MeiWrapper src={`videos/${HeroSkins.chargeMei}.mp4`}/>}
{team === Teams.spark && <MeiWrapper src={`videos/${HeroSkins.sparkMei}.mp4`}/>}
{team === Teams.outlaws && <MeiWrapper src={`videos/${HeroSkins.outlawsMei}.mp4`}/>}
{team === Teams.spitfire && <MeiWrapper src={`videos/${HeroSkins.spitfireMei}.mp4`}/>}
{team === Teams.gladiators && <MeiWrapper src={`videos/${HeroSkins.gladiatorsMei}.mp4`}/>}
{team === Teams.valiant && <MeiWrapper src={`videos/${HeroSkins.valiantMei}.mp4`}/>}
{team === Teams.excelsior && <MeiWrapper src={`videos/${HeroSkins.excelsiorMei}.mp4`}/>}
{team === Teams.eternal && <MeiWrapper src={`videos/${HeroSkins.eternalMei}.mp4`}/>}
{team === Teams.fusion && <MeiWrapper src={`videos/${HeroSkins.fusionMei}.mp4`}/>}
{team === Teams.shock && <MeiWrapper src={`videos/${HeroSkins.shockMei}.mp4`}/>}
{team === Teams.dragons && <MeiWrapper src={`videos/${HeroSkins.dragonsMei}.mp4`}/>}
{team === Teams.defiant && <MeiWrapper src={`videos/${HeroSkins.defiantMei}.mp4`}/>}
{team === Teams.titans && <MeiWrapper src={`videos/${HeroSkins.titansMei}.mp4`}/>}
{team === Teams.justice && <MeiWrapper src={`videos/${HeroSkins.justiceMei}.mp4`}/>}
        </div>
    )
}

export default Mei;

const MeiWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 45vh;
        left: -6.5vw;
    }
`
