import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Moira = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <MoiraWrapper src={`videos/${HeroSkins.dynastyMoira}.mp4`}/>}
{team === Teams.reign && <MoiraWrapper src={`videos/${HeroSkins.reignMoira}.mp4`}/>}
{team === Teams.uprising && <MoiraWrapper src={`videos/${HeroSkins.uprisingMoira}.mp4`}/>}
{team === Teams.hunters && <MoiraWrapper src={`videos/${HeroSkins.huntersMoira}.mp4`}/>}
{team === Teams.fuel && <MoiraWrapper src={`videos/${HeroSkins.fuelMoira}.mp4`}/>}
{team === Teams.mayhem && <MoiraWrapper src={`videos/${HeroSkins.mayhemMoira}.mp4`}/>}
{team === Teams.charge && <MoiraWrapper src={`videos/${HeroSkins.chargeMoira}.mp4`}/>}
{team === Teams.spark && <MoiraWrapper src={`videos/${HeroSkins.sparkMoira}.mp4`}/>}
{team === Teams.outlaws && <MoiraWrapper src={`videos/${HeroSkins.outlawsMoira}.mp4`}/>}
{team === Teams.spitfire && <MoiraWrapper src={`videos/${HeroSkins.spitfireMoira}.mp4`}/>}
{team === Teams.gladiators && <MoiraWrapper src={`videos/${HeroSkins.gladiatorsMoira}.mp4`}/>}
{team === Teams.valiant && <MoiraWrapper src={`videos/${HeroSkins.valiantMoira}.mp4`}/>}
{team === Teams.excelsior && <MoiraWrapper src={`videos/${HeroSkins.excelsiorMoira}.mp4`}/>}
{team === Teams.eternal && <MoiraWrapper src={`videos/${HeroSkins.eternalMoira}.mp4`}/>}
{team === Teams.fusion && <MoiraWrapper src={`videos/${HeroSkins.fusionMoira}.mp4`}/>}
{team === Teams.shock && <MoiraWrapper src={`videos/${HeroSkins.shockMoira}.mp4`}/>}
{team === Teams.dragons && <MoiraWrapper src={`videos/${HeroSkins.dragonsMoira}.mp4`}/>}
{team === Teams.defiant && <MoiraWrapper src={`videos/${HeroSkins.defiantMoira}.mp4`}/>}
{team === Teams.titans && <MoiraWrapper src={`videos/${HeroSkins.titansMoira}.mp4`}/>}
{team === Teams.justice && <MoiraWrapper src={`videos/${HeroSkins.justiceMoira}.mp4`}/>}
        </div>
    )
}

export default Moira;

const MoiraWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.8);
        top: 70vh;
        left: -7.5vw;
    }
`
