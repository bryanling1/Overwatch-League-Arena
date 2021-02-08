import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Pharah = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <PharahWrapper src={`videos/${HeroSkins.dynastyPharah}.mp4`}/>}
{team === Teams.reign && <PharahWrapper src={`videos/${HeroSkins.reignPharah}.mp4`}/>}
{team === Teams.uprising && <PharahWrapper src={`videos/${HeroSkins.uprisingPharah}.mp4`}/>}
{team === Teams.hunters && <PharahWrapper src={`videos/${HeroSkins.huntersPharah}.mp4`}/>}
{team === Teams.fuel && <PharahWrapper src={`videos/${HeroSkins.fuelPharah}.mp4`}/>}
{team === Teams.mayhem && <PharahWrapper src={`videos/${HeroSkins.mayhemPharah}.mp4`}/>}
{team === Teams.charge && <PharahWrapper src={`videos/${HeroSkins.chargePharah}.mp4`}/>}
{team === Teams.spark && <PharahWrapper src={`videos/${HeroSkins.sparkPharah}.mp4`}/>}
{team === Teams.outlaws && <PharahWrapper src={`videos/${HeroSkins.outlawsPharah}.mp4`}/>}
{team === Teams.spitfire && <PharahWrapper src={`videos/${HeroSkins.spitfirePharah}.mp4`}/>}
{team === Teams.gladiators && <PharahWrapper src={`videos/${HeroSkins.gladiatorsPharah}.mp4`}/>}
{team === Teams.valiant && <PharahWrapper src={`videos/${HeroSkins.valiantPharah}.mp4`}/>}
{team === Teams.excelsior && <PharahWrapper src={`videos/${HeroSkins.excelsiorPharah}.mp4`}/>}
{team === Teams.eternal && <PharahWrapper src={`videos/${HeroSkins.eternalPharah}.mp4`}/>}
{team === Teams.fusion && <PharahWrapper src={`videos/${HeroSkins.fusionPharah}.mp4`}/>}
{team === Teams.shock && <PharahWrapper src={`videos/${HeroSkins.shockPharah}.mp4`}/>}
{team === Teams.dragons && <PharahWrapper src={`videos/${HeroSkins.dragonsPharah}.mp4`}/>}
{team === Teams.defiant && <PharahWrapper src={`videos/${HeroSkins.defiantPharah}.mp4`}/>}
{team === Teams.titans && <PharahWrapper src={`videos/${HeroSkins.titansPharah}.mp4`}/>}
{team === Teams.justice && <PharahWrapper src={`videos/${HeroSkins.justicePharah}.mp4`}/>}
        </div>
    )
}

export default Pharah;

const PharahWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.7);
        top: 60vh;
        left: -4vw;
    }
`
