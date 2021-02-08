import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Symmetra = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <SymmetraWrapper src={`videos/${HeroSkins.dynastySymmetra}.mp4`}/>}
{team === Teams.reign && <SymmetraWrapper src={`videos/${HeroSkins.reignSymmetra}.mp4`}/>}
{team === Teams.uprising && <SymmetraWrapper src={`videos/${HeroSkins.uprisingSymmetra}.mp4`}/>}
{team === Teams.hunters && <SymmetraWrapper src={`videos/${HeroSkins.huntersSymmetra}.mp4`}/>}
{team === Teams.fuel && <SymmetraWrapper src={`videos/${HeroSkins.fuelSymmetra}.mp4`}/>}
{team === Teams.mayhem && <SymmetraWrapper src={`videos/${HeroSkins.mayhemSymmetra}.mp4`}/>}
{team === Teams.charge && <SymmetraWrapper src={`videos/${HeroSkins.chargeSymmetra}.mp4`}/>}
{team === Teams.spark && <SymmetraWrapper src={`videos/${HeroSkins.sparkSymmetra}.mp4`}/>}
{team === Teams.outlaws && <SymmetraWrapper src={`videos/${HeroSkins.outlawsSymmetra}.mp4`}/>}
{team === Teams.spitfire && <SymmetraWrapper src={`videos/${HeroSkins.spitfireSymmetra}.mp4`}/>}
{team === Teams.gladiators && <SymmetraWrapper src={`videos/${HeroSkins.gladiatorsSymmetra}.mp4`}/>}
{team === Teams.valiant && <SymmetraWrapper src={`videos/${HeroSkins.valiantSymmetra}.mp4`}/>}
{team === Teams.excelsior && <SymmetraWrapper src={`videos/${HeroSkins.excelsiorSymmetra}.mp4`}/>}
{team === Teams.eternal && <SymmetraWrapper src={`videos/${HeroSkins.eternalSymmetra}.mp4`}/>}
{team === Teams.fusion && <SymmetraWrapper src={`videos/${HeroSkins.fusionSymmetra}.mp4`}/>}
{team === Teams.shock && <SymmetraWrapper src={`videos/${HeroSkins.shockSymmetra}.mp4`}/>}
{team === Teams.dragons && <SymmetraWrapper src={`videos/${HeroSkins.dragonsSymmetra}.mp4`}/>}
{team === Teams.defiant && <SymmetraWrapper src={`videos/${HeroSkins.defiantSymmetra}.mp4`}/>}
{team === Teams.titans && <SymmetraWrapper src={`videos/${HeroSkins.titansSymmetra}.mp4`}/>}
{team === Teams.justice && <SymmetraWrapper src={`videos/${HeroSkins.justiceSymmetra}.mp4`}/>}
        </div>
    )
}

export default Symmetra;

const SymmetraWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.8);
        top: 58vh;
        left: -6vw;
    }
`
