import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Ashe = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <AsheWrapper src={`videos/${HeroSkins.dynastyAshe}.mp4`}/>}
{team === Teams.reign && <AsheWrapper src={`videos/${HeroSkins.reignAshe}.mp4`}/>}
{team === Teams.uprising && <AsheWrapper src={`videos/${HeroSkins.uprisingAshe}.mp4`}/>}
{team === Teams.hunters && <AsheWrapper src={`videos/${HeroSkins.huntersAshe}.mp4`}/>}
{team === Teams.fuel && <AsheWrapper src={`videos/${HeroSkins.fuelAshe}.mp4`}/>}
{team === Teams.mayhem && <AsheWrapper src={`videos/${HeroSkins.mayhemAshe}.mp4`}/>}
{team === Teams.charge && <AsheWrapper src={`videos/${HeroSkins.chargeAshe}.mp4`}/>}
{team === Teams.spark && <AsheWrapper src={`videos/${HeroSkins.sparkAshe}.mp4`}/>}
{team === Teams.outlaws && <AsheWrapper src={`videos/${HeroSkins.outlawsAshe}.mp4`}/>}
{team === Teams.spitfire && <AsheWrapper src={`videos/${HeroSkins.spitfireAshe}.mp4`}/>}
{team === Teams.gladiators && <AsheWrapper src={`videos/${HeroSkins.gladiatorsAshe}.mp4`}/>}
{team === Teams.valiant && <AsheWrapper src={`videos/${HeroSkins.valiantAshe}.mp4`}/>}
{team === Teams.excelsior && <AsheWrapper src={`videos/${HeroSkins.excelsiorAshe}.mp4`}/>}
{team === Teams.eternal && <AsheWrapper src={`videos/${HeroSkins.eternalAshe}.mp4`}/>}
{team === Teams.fusion && <AsheWrapper src={`videos/${HeroSkins.fusionAshe}.mp4`}/>}
{team === Teams.shock && <AsheWrapper src={`videos/${HeroSkins.shockAshe}.mp4`}/>}
{team === Teams.dragons && <AsheWrapper src={`videos/${HeroSkins.dragonsAshe}.mp4`}/>}
{team === Teams.defiant && <AsheWrapper src={`videos/${HeroSkins.defiantAshe}.mp4`}/>}
{team === Teams.titans && <AsheWrapper src={`videos/${HeroSkins.titansAshe}.mp4`}/>}
{team === Teams.justice && <AsheWrapper src={`videos/${HeroSkins.justiceAshe}.mp4`}/>}
        </div>
    )
}

export default Ashe;

const AsheWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3.3);
        top: 35vh;
        left: -19vw;
    }
`
