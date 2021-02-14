import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Mercy = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <MercyWrapper src={`videos/${HeroSkins.dynastyMercy}.mp4`}/>}
{team === Teams.reign && <MercyWrapper src={`videos/${HeroSkins.reignMercy}.mp4`}/>}
{team === Teams.uprising && <MercyWrapper src={`videos/${HeroSkins.uprisingMercy}.mp4`}/>}
{team === Teams.hunters && <MercyWrapper src={`videos/${HeroSkins.huntersMercy}.mp4`}/>}
{team === Teams.fuel && <MercyWrapper src={`videos/${HeroSkins.fuelMercy}.mp4`}/>}
{team === Teams.mayhem && <MercyWrapper src={`videos/${HeroSkins.mayhemMercy}.mp4`}/>}
{team === Teams.charge && <MercyWrapper src={`videos/${HeroSkins.chargeMercy}.mp4`}/>}
{team === Teams.spark && <MercyWrapper src={`videos/${HeroSkins.sparkMercy}.mp4`}/>}
{team === Teams.outlaws && <MercyWrapper src={`videos/${HeroSkins.outlawsMercy}.mp4`}/>}
{team === Teams.spitfire && <MercyWrapper src={`videos/${HeroSkins.spitfireMercy}.mp4`}/>}
{team === Teams.gladiators && <MercyWrapper src={`videos/${HeroSkins.gladiatorsMercy}.mp4`}/>}
{team === Teams.valiant && <MercyWrapper src={`videos/${HeroSkins.valiantMercy}.mp4`}/>}
{team === Teams.excelsior && <MercyWrapper src={`videos/${HeroSkins.excelsiorMercy}.mp4`}/>}
{team === Teams.eternal && <MercyWrapper src={`videos/${HeroSkins.eternalMercy}.mp4`}/>}
{team === Teams.fusion && <MercyWrapper src={`videos/${HeroSkins.fusionMercy}.mp4`}/>}
{team === Teams.shock && <MercyWrapper src={`videos/${HeroSkins.shockMercy}.mp4`}/>}
{team === Teams.dragons && <MercyWrapper src={`videos/${HeroSkins.dragonsMercy}.mp4`}/>}
{team === Teams.defiant && <MercyWrapper src={`videos/${HeroSkins.defiantMercy}.mp4`}/>}
{team === Teams.titans && <MercyWrapper src={`videos/${HeroSkins.titansMercy}.mp4`}/>}
{team === Teams.justice && <MercyWrapper src={`videos/${HeroSkins.justiceMercy}.mp4`}/>}
        </div>
    )
}

export default Mercy;

const MercyWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3);
        top: 68vh;
        left: -6.5vw;
    }
`
