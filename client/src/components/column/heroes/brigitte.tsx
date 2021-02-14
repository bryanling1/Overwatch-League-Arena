import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Brigitte = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <BrigitteWrapper src={`videos/${HeroSkins.dynastyBrigitte}.mp4`}/>}
{team === Teams.reign && <BrigitteWrapper src={`videos/${HeroSkins.reignBrigitte}.mp4`}/>}
{team === Teams.uprising && <BrigitteWrapper src={`videos/${HeroSkins.uprisingBrigitte}.mp4`}/>}
{team === Teams.hunters && <BrigitteWrapper src={`videos/${HeroSkins.huntersBrigitte}.mp4`}/>}
{team === Teams.fuel && <BrigitteWrapper src={`videos/${HeroSkins.fuelBrigitte}.mp4`}/>}
{team === Teams.mayhem && <BrigitteWrapper src={`videos/${HeroSkins.mayhemBrigitte}.mp4`}/>}
{team === Teams.charge && <BrigitteWrapper src={`videos/${HeroSkins.chargeBrigitte}.mp4`}/>}
{team === Teams.spark && <BrigitteWrapper src={`videos/${HeroSkins.sparkBrigitte}.mp4`}/>}
{team === Teams.outlaws && <BrigitteWrapper src={`videos/${HeroSkins.outlawsBrigitte}.mp4`}/>}
{team === Teams.spitfire && <BrigitteWrapper src={`videos/${HeroSkins.spitfireBrigitte}.mp4`}/>}
{team === Teams.gladiators && <BrigitteWrapper src={`videos/${HeroSkins.gladiatorsBrigitte}.mp4`}/>}
{team === Teams.valiant && <BrigitteWrapper src={`videos/${HeroSkins.valiantBrigitte}.mp4`}/>}
{team === Teams.excelsior && <BrigitteWrapper src={`videos/${HeroSkins.excelsiorBrigitte}.mp4`}/>}
{team === Teams.eternal && <BrigitteWrapper src={`videos/${HeroSkins.eternalBrigitte}.mp4`}/>}
{team === Teams.fusion && <BrigitteWrapper src={`videos/${HeroSkins.fusionBrigitte}.mp4`}/>}
{team === Teams.shock && <BrigitteWrapper src={`videos/${HeroSkins.shockBrigitte}.mp4`}/>}
{team === Teams.dragons && <BrigitteWrapper src={`videos/${HeroSkins.dragonsBrigitte}.mp4`}/>}
{team === Teams.defiant && <BrigitteWrapper src={`videos/${HeroSkins.defiantBrigitte}.mp4`}/>}
{team === Teams.titans && <BrigitteWrapper src={`videos/${HeroSkins.titansBrigitte}.mp4`}/>}
{team === Teams.justice && <BrigitteWrapper src={`videos/${HeroSkins.justiceBrigitte}.mp4`}/>}
        </div>
    )
}

export default Brigitte;

const BrigitteWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 43vh;
        left: -5vw;
    }
`
