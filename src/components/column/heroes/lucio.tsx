import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Lucio = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <LucioWrapper src={`videos/${HeroSkins.dynastyLucio}.mp4`}/>}
{team === Teams.reign && <LucioWrapper src={`videos/${HeroSkins.reignLucio}.mp4`}/>}
{team === Teams.uprising && <LucioWrapper src={`videos/${HeroSkins.uprisingLucio}.mp4`}/>}
{team === Teams.hunters && <LucioWrapper src={`videos/${HeroSkins.huntersLucio}.mp4`}/>}
{team === Teams.fuel && <LucioWrapper src={`videos/${HeroSkins.fuelLucio}.mp4`}/>}
{team === Teams.mayhem && <LucioWrapper src={`videos/${HeroSkins.mayhemLucio}.mp4`}/>}
{team === Teams.charge && <LucioWrapper src={`videos/${HeroSkins.chargeLucio}.mp4`}/>}
{team === Teams.spark && <LucioWrapper src={`videos/${HeroSkins.sparkLucio}.mp4`}/>}
{team === Teams.outlaws && <LucioWrapper src={`videos/${HeroSkins.outlawsLucio}.mp4`}/>}
{team === Teams.spitfire && <LucioWrapper src={`videos/${HeroSkins.spitfireLucio}.mp4`}/>}
{team === Teams.gladiators && <LucioWrapper src={`videos/${HeroSkins.gladiatorsLucio}.mp4`}/>}
{team === Teams.valiant && <LucioWrapper src={`videos/${HeroSkins.valiantLucio}.mp4`}/>}
{team === Teams.excelsior && <LucioWrapper src={`videos/${HeroSkins.excelsiorLucio}.mp4`}/>}
{team === Teams.eternal && <LucioWrapper src={`videos/${HeroSkins.eternalLucio}.mp4`}/>}
{team === Teams.fusion && <LucioWrapper src={`videos/${HeroSkins.fusionLucio}.mp4`}/>}
{team === Teams.shock && <LucioWrapper src={`videos/${HeroSkins.shockLucio}.mp4`}/>}
{team === Teams.dragons && <LucioWrapper src={`videos/${HeroSkins.dragonsLucio}.mp4`}/>}
{team === Teams.defiant && <LucioWrapper src={`videos/${HeroSkins.defiantLucio}.mp4`}/>}
{team === Teams.titans && <LucioWrapper src={`videos/${HeroSkins.titansLucio}.mp4`}/>}
{team === Teams.justice && <LucioWrapper src={`videos/${HeroSkins.justiceLucio}.mp4`}/>}
        </div>
    )
}

export default Lucio;

const LucioWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 50vh;
        left: -6vw;
    }
`
