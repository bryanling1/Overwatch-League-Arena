import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Zarya = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <ZaryaWrapper src={`videos/${HeroSkins.dynastyZarya}.mp4`}/>}
{team === Teams.reign && <ZaryaWrapper src={`videos/${HeroSkins.reignZarya}.mp4`}/>}
{team === Teams.uprising && <ZaryaWrapper src={`videos/${HeroSkins.uprisingZarya}.mp4`}/>}
{team === Teams.hunters && <ZaryaWrapper src={`videos/${HeroSkins.huntersZarya}.mp4`}/>}
{team === Teams.fuel && <ZaryaWrapper src={`videos/${HeroSkins.fuelZarya}.mp4`}/>}
{team === Teams.mayhem && <ZaryaWrapper src={`videos/${HeroSkins.mayhemZarya}.mp4`}/>}
{team === Teams.charge && <ZaryaWrapper src={`videos/${HeroSkins.chargeZarya}.mp4`}/>}
{team === Teams.spark && <ZaryaWrapper src={`videos/${HeroSkins.sparkZarya}.mp4`}/>}
{team === Teams.outlaws && <ZaryaWrapper src={`videos/${HeroSkins.outlawsZarya}.mp4`}/>}
{team === Teams.spitfire && <ZaryaWrapper src={`videos/${HeroSkins.spitfireZarya}.mp4`}/>}
{team === Teams.gladiators && <ZaryaWrapper src={`videos/${HeroSkins.gladiatorsZarya}.mp4`}/>}
{team === Teams.valiant && <ZaryaWrapper src={`videos/${HeroSkins.valiantZarya}.mp4`}/>}
{team === Teams.excelsior && <ZaryaWrapper src={`videos/${HeroSkins.excelsiorZarya}.mp4`}/>}
{team === Teams.eternal && <ZaryaWrapper src={`videos/${HeroSkins.eternalZarya}.mp4`}/>}
{team === Teams.fusion && <ZaryaWrapper src={`videos/${HeroSkins.fusionZarya}.mp4`}/>}
{team === Teams.shock && <ZaryaWrapper src={`videos/${HeroSkins.shockZarya}.mp4`}/>}
{team === Teams.dragons && <ZaryaWrapper src={`videos/${HeroSkins.dragonsZarya}.mp4`}/>}
{team === Teams.defiant && <ZaryaWrapper src={`videos/${HeroSkins.defiantZarya}.mp4`}/>}
{team === Teams.titans && <ZaryaWrapper src={`videos/${HeroSkins.titansZarya}.mp4`}/>}
{team === Teams.justice && <ZaryaWrapper src={`videos/${HeroSkins.justiceZarya}.mp4`}/>}
        </div>
    )
}

export default Zarya;

const ZaryaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 50vh;
        left: -5vw;
    }
`
