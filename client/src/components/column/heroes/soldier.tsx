import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Soldier = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <SoldierWrapper src={`videos/${HeroSkins.dynastySoldier}.mp4`}/>}
{team === Teams.reign && <SoldierWrapper src={`videos/${HeroSkins.reignSoldier}.mp4`}/>}
{team === Teams.uprising && <SoldierWrapper src={`videos/${HeroSkins.uprisingSoldier}.mp4`}/>}
{team === Teams.hunters && <SoldierWrapper src={`videos/${HeroSkins.huntersSoldier}.mp4`}/>}
{team === Teams.fuel && <SoldierWrapper src={`videos/${HeroSkins.fuelSoldier}.mp4`}/>}
{team === Teams.mayhem && <SoldierWrapper src={`videos/${HeroSkins.mayhemSoldier}.mp4`}/>}
{team === Teams.charge && <SoldierWrapper src={`videos/${HeroSkins.chargeSoldier}.mp4`}/>}
{team === Teams.spark && <SoldierWrapper src={`videos/${HeroSkins.sparkSoldier}.mp4`}/>}
{team === Teams.outlaws && <SoldierWrapper src={`videos/${HeroSkins.outlawsSoldier}.mp4`}/>}
{team === Teams.spitfire && <SoldierWrapper src={`videos/${HeroSkins.spitfireSoldier}.mp4`}/>}
{team === Teams.gladiators && <SoldierWrapper src={`videos/${HeroSkins.gladiatorsSoldier}.mp4`}/>}
{team === Teams.valiant && <SoldierWrapper src={`videos/${HeroSkins.valiantSoldier}.mp4`}/>}
{team === Teams.excelsior && <SoldierWrapper src={`videos/${HeroSkins.excelsiorSoldier}.mp4`}/>}
{team === Teams.eternal && <SoldierWrapper src={`videos/${HeroSkins.eternalSoldier}.mp4`}/>}
{team === Teams.fusion && <SoldierWrapper src={`videos/${HeroSkins.fusionSoldier}.mp4`}/>}
{team === Teams.shock && <SoldierWrapper src={`videos/${HeroSkins.shockSoldier}.mp4`}/>}
{team === Teams.dragons && <SoldierWrapper src={`videos/${HeroSkins.dragonsSoldier}.mp4`}/>}
{team === Teams.defiant && <SoldierWrapper src={`videos/${HeroSkins.defiantSoldier}.mp4`}/>}
{team === Teams.titans && <SoldierWrapper src={`videos/${HeroSkins.titansSoldier}.mp4`}/>}
{team === Teams.justice && <SoldierWrapper src={`videos/${HeroSkins.justiceSoldier}.mp4`}/>}
        </div>
    )
}

export default Soldier;

const SoldierWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.6);
        top: 55vh;
        left: -6vw;
    }
`
