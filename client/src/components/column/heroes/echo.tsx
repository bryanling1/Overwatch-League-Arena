import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Echo = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <EchoWrapper src={`videos/${HeroSkins.dynastyEcho}.mp4`}/>}
{team === Teams.reign && <EchoWrapper src={`videos/${HeroSkins.reignEcho}.mp4`}/>}
{team === Teams.uprising && <EchoWrapper src={`videos/${HeroSkins.uprisingEcho}.mp4`}/>}
{team === Teams.hunters && <EchoWrapper src={`videos/${HeroSkins.huntersEcho}.mp4`}/>}
{team === Teams.fuel && <EchoWrapper src={`videos/${HeroSkins.fuelEcho}.mp4`}/>}
{team === Teams.mayhem && <EchoWrapper src={`videos/${HeroSkins.mayhemEcho}.mp4`}/>}
{team === Teams.charge && <EchoWrapper src={`videos/${HeroSkins.chargeEcho}.mp4`}/>}
{team === Teams.spark && <EchoWrapper src={`videos/${HeroSkins.sparkEcho}.mp4`}/>}
{team === Teams.outlaws && <EchoWrapper src={`videos/${HeroSkins.outlawsEcho}.mp4`}/>}
{team === Teams.spitfire && <EchoWrapper src={`videos/${HeroSkins.spitfireEcho}.mp4`}/>}
{team === Teams.gladiators && <EchoWrapper src={`videos/${HeroSkins.gladiatorsEcho}.mp4`}/>}
{team === Teams.valiant && <EchoWrapper src={`videos/${HeroSkins.valiantEcho}.mp4`}/>}
{team === Teams.excelsior && <EchoWrapper src={`videos/${HeroSkins.excelsiorEcho}.mp4`}/>}
{team === Teams.eternal && <EchoWrapper src={`videos/${HeroSkins.eternalEcho}.mp4`}/>}
{team === Teams.fusion && <EchoWrapper src={`videos/${HeroSkins.fusionEcho}.mp4`}/>}
{team === Teams.shock && <EchoWrapper src={`videos/${HeroSkins.shockEcho}.mp4`}/>}
{team === Teams.dragons && <EchoWrapper src={`videos/${HeroSkins.dragonsEcho}.mp4`}/>}
{team === Teams.defiant && <EchoWrapper src={`videos/${HeroSkins.defiantEcho}.mp4`}/>}
{team === Teams.titans && <EchoWrapper src={`videos/${HeroSkins.titansEcho}.mp4`}/>}
{team === Teams.justice && <EchoWrapper src={`videos/${HeroSkins.justiceEcho}.mp4`}/>}
        </div>
    )
}

export default Echo;

const EchoWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3.1);
        top: 70vh;
        left: -9vw;
    }
`
