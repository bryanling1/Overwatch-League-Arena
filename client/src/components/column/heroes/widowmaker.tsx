import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Widowmaker = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <WidowmakerWrapper src={`videos/${HeroSkins.dynastyWidowmaker}.mp4`}/>}
{team === Teams.reign && <WidowmakerWrapper src={`videos/${HeroSkins.reignWidowmaker}.mp4`}/>}
{team === Teams.uprising && <WidowmakerWrapper src={`videos/${HeroSkins.uprisingWidowmaker}.mp4`}/>}
{team === Teams.hunters && <WidowmakerWrapper src={`videos/${HeroSkins.huntersWidowmaker}.mp4`}/>}
{team === Teams.fuel && <WidowmakerWrapper src={`videos/${HeroSkins.fuelWidowmaker}.mp4`}/>}
{team === Teams.mayhem && <WidowmakerWrapper src={`videos/${HeroSkins.mayhemWidowmaker}.mp4`}/>}
{team === Teams.charge && <WidowmakerWrapper src={`videos/${HeroSkins.chargeWidowmaker}.mp4`}/>}
{team === Teams.spark && <WidowmakerWrapper src={`videos/${HeroSkins.sparkWidowmaker}.mp4`}/>}
{team === Teams.outlaws && <WidowmakerWrapper src={`videos/${HeroSkins.outlawsWidowmaker}.mp4`}/>}
{team === Teams.spitfire && <WidowmakerWrapper src={`videos/${HeroSkins.spitfireWidowmaker}.mp4`}/>}
{team === Teams.gladiators && <WidowmakerWrapper src={`videos/${HeroSkins.gladiatorsWidowmaker}.mp4`}/>}        
{team === Teams.valiant && <WidowmakerWrapper src={`videos/${HeroSkins.valiantWidowmaker}.mp4`}/>}
{team === Teams.excelsior && <WidowmakerWrapper src={`videos/${HeroSkins.excelsiorWidowmaker}.mp4`}/>}
{team === Teams.eternal && <WidowmakerWrapper src={`videos/${HeroSkins.eternalWidowmaker}.mp4`}/>}
{team === Teams.fusion && <WidowmakerWrapper src={`videos/${HeroSkins.fusionWidowmaker}.mp4`}/>}
{team === Teams.shock && <WidowmakerWrapper src={`videos/${HeroSkins.shockWidowmaker}.mp4`}/>}
{team === Teams.dragons && <WidowmakerWrapper src={`videos/${HeroSkins.dragonsWidowmaker}.mp4`}/>}
{team === Teams.defiant && <WidowmakerWrapper src={`videos/${HeroSkins.defiantWidowmaker}.mp4`}/>}
{team === Teams.titans && <WidowmakerWrapper src={`videos/${HeroSkins.titansWidowmaker}.mp4`}/>}
{team === Teams.justice && <WidowmakerWrapper src={`videos/${HeroSkins.justiceWidowmaker}.mp4`}/>}
        </div>
    )
}

export default Widowmaker;

const WidowmakerWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 50vh;
        left: -6.6vw;
    }
`
