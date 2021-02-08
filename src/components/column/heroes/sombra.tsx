import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Sombra = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <SombraWrapper src={`videos/${HeroSkins.dynastySombra}.mp4`}/>}
{team === Teams.reign && <SombraWrapper src={`videos/${HeroSkins.reignSombra}.mp4`}/>}
{team === Teams.uprising && <SombraWrapper src={`videos/${HeroSkins.uprisingSombra}.mp4`}/>}
{team === Teams.hunters && <SombraWrapper src={`videos/${HeroSkins.huntersSombra}.mp4`}/>}
{team === Teams.fuel && <SombraWrapper src={`videos/${HeroSkins.fuelSombra}.mp4`}/>}
{team === Teams.mayhem && <SombraWrapper src={`videos/${HeroSkins.mayhemSombra}.mp4`}/>}
{team === Teams.charge && <SombraWrapper src={`videos/${HeroSkins.chargeSombra}.mp4`}/>}
{team === Teams.spark && <SombraWrapper src={`videos/${HeroSkins.sparkSombra}.mp4`}/>}
{team === Teams.outlaws && <SombraWrapper src={`videos/${HeroSkins.outlawsSombra}.mp4`}/>}
{team === Teams.spitfire && <SombraWrapper src={`videos/${HeroSkins.spitfireSombra}.mp4`}/>}
{team === Teams.gladiators && <SombraWrapper src={`videos/${HeroSkins.gladiatorsSombra}.mp4`}/>}
{team === Teams.valiant && <SombraWrapper src={`videos/${HeroSkins.valiantSombra}.mp4`}/>}
{team === Teams.excelsior && <SombraWrapper src={`videos/${HeroSkins.excelsiorSombra}.mp4`}/>}
{team === Teams.eternal && <SombraWrapper src={`videos/${HeroSkins.eternalSombra}.mp4`}/>}
{team === Teams.fusion && <SombraWrapper src={`videos/${HeroSkins.fusionSombra}.mp4`}/>}
{team === Teams.shock && <SombraWrapper src={`videos/${HeroSkins.shockSombra}.mp4`}/>}
{team === Teams.dragons && <SombraWrapper src={`videos/${HeroSkins.dragonsSombra}.mp4`}/>}
{team === Teams.defiant && <SombraWrapper src={`videos/${HeroSkins.defiantSombra}.mp4`}/>}
{team === Teams.titans && <SombraWrapper src={`videos/${HeroSkins.titansSombra}.mp4`}/>}
{team === Teams.justice && <SombraWrapper src={`videos/${HeroSkins.justiceSombra}.mp4`}/>}
        </div>
    )
}

export default Sombra;

const SombraWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.8);
        top: 60vh;
        left: -5vw;
    }
`
