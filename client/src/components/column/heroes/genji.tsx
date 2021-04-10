import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Genji = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <GenjiWrapper src={`videos/${HeroSkins.dynastyGenji}.mp4`}/>}
{team === Teams.reign && <GenjiWrapper src={`videos/${HeroSkins.reignGenji}.mp4`}/>}
{team === Teams.uprising && <GenjiWrapper src={`videos/${HeroSkins.uprisingGenji}.mp4`}/>}
{team === Teams.hunters && <GenjiWrapper src={`videos/${HeroSkins.huntersGenji}.mp4`}/>}
{team === Teams.fuel && <GenjiWrapper src={`videos/${HeroSkins.fuelGenji}.mp4`}/>}
{team === Teams.mayhem && <GenjiWrapper src={`videos/${HeroSkins.mayhemGenji}.mp4`}/>}
{team === Teams.charge && <GenjiWrapper src={`videos/${HeroSkins.chargeGenji}.mp4`}/>}
{team === Teams.spark && <GenjiWrapper src={`videos/${HeroSkins.sparkGenji}.mp4`}/>}
{team === Teams.outlaws && <GenjiWrapper src={`videos/${HeroSkins.outlawsGenji}.mp4`}/>}
{team === Teams.spitfire && <GenjiWrapper src={`videos/${HeroSkins.spitfireGenji}.mp4`}/>}
{team === Teams.gladiators && <GenjiWrapper src={`videos/${HeroSkins.gladiatorsGenji}.mp4`}/>}
{team === Teams.valiant && <GenjiWrapper src={`videos/${HeroSkins.valiantGenji}.mp4`}/>}
{team === Teams.excelsior && <GenjiWrapper src={`videos/${HeroSkins.excelsiorGenji}.mp4`}/>}
{team === Teams.eternal && <GenjiWrapper src={`videos/${HeroSkins.eternalGenji}.mp4`}/>}
{team === Teams.fusion && <GenjiWrapper src={`videos/${HeroSkins.fusionGenji}.mp4`}/>}
{team === Teams.shock && <GenjiWrapper src={`videos/${HeroSkins.shockGenji}.mp4`}/>}
{team === Teams.dragons && <GenjiWrapper src={`videos/${HeroSkins.dragonsGenji}.mp4`}/>}
{team === Teams.defiant && <GenjiWrapper src={`videos/${HeroSkins.defiantGenji}.mp4`}/>}
{team === Teams.titans && <GenjiWrapper src={`videos/${HeroSkins.titansGenji}.mp4`}/>}
{team === Teams.justice && <GenjiWrapper src={`videos/${HeroSkins.justiceGenji}.mp4`}/>}
        </div>
    )
}

export default Genji;

const GenjiWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 43vh;
        left: -5vw;
    }
`
