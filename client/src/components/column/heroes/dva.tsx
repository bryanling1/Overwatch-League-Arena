import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Dva = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <DvaWrapper src={`videos/${HeroSkins.dynastyDva}.mp4`}/>}
        {team === Teams.reign && <DvaWrapper src={`videos/${HeroSkins.reignDva}.mp4`}/>}
        {team === Teams.uprising && <DvaWrapper src={`videos/${HeroSkins.uprisingDva}.mp4`}/>}
        {team === Teams.hunters && <DvaWrapper src={`videos/${HeroSkins.huntersDva}.mp4`}/>}
        {team === Teams.fuel && <DvaWrapper src={`videos/${HeroSkins.fuelDva}.mp4`}/>}
        {team === Teams.mayhem && <DvaWrapper src={`videos/${HeroSkins.mayhemDva}.mp4`}/>}
        {team === Teams.charge && <DvaWrapper src={`videos/${HeroSkins.chargeDva}.mp4`}/>}
        {team === Teams.spark && <DvaWrapper src={`videos/${HeroSkins.sparkDva}.mp4`}/>}
        {team === Teams.outlaws && <DvaWrapper src={`videos/${HeroSkins.outlawsDva}.mp4`}/>}
        {team === Teams.spitfire && <DvaWrapper src={`videos/${HeroSkins.spitfireDva}.mp4`}/>}
        {team === Teams.gladiators && <DvaWrapper src={`videos/${HeroSkins.gladiatorsDva}.mp4`}/>}
        {team === Teams.valiant && <DvaWrapper src={`videos/${HeroSkins.valiantDva}.mp4`}/>}
        {team === Teams.excelsior && <DvaWrapper src={`videos/${HeroSkins.excelsiorDva}.mp4`}/>}
        {team === Teams.eternal && <DvaWrapper src={`videos/${HeroSkins.eternalDva}.mp4`}/>}
        {team === Teams.fusion && <DvaWrapper src={`videos/${HeroSkins.fusionDva}.mp4`}/>}
        {team === Teams.shock && <DvaWrapper src={`videos/${HeroSkins.shockDva}.mp4`}/>}
        {team === Teams.dragons && <DvaWrapper src={`videos/${HeroSkins.dragonsDva}.mp4`}/>}
        {team === Teams.defiant && <DvaWrapper src={`videos/${HeroSkins.defiantDva}.mp4`}/>}
        {team === Teams.titans && <DvaWrapper src={`videos/${HeroSkins.titansDva}.mp4`}/>}
        {team === Teams.justice && <DvaWrapper src={`videos/${HeroSkins.justiceDva}.mp4`}/>}
        </div>
    )
}

export default Dva;

const DvaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3.3);
        top: 7vh;
        left: 17vw;
    }
`
