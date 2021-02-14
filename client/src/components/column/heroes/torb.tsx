import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Torb = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <TorbWrapper src={`videos/${HeroSkins.dynastyTorb}.mp4`}/>}
{team === Teams.reign && <TorbWrapper src={`videos/${HeroSkins.reignTorb}.mp4`}/>}
{team === Teams.uprising && <TorbWrapper src={`videos/${HeroSkins.uprisingTorb}.mp4`}/>}
{team === Teams.hunters && <TorbWrapper src={`videos/${HeroSkins.huntersTorb}.mp4`}/>}
{team === Teams.fuel && <TorbWrapper src={`videos/${HeroSkins.fuelTorb}.mp4`}/>}
{team === Teams.mayhem && <TorbWrapper src={`videos/${HeroSkins.mayhemTorb}.mp4`}/>}
{team === Teams.charge && <TorbWrapper src={`videos/${HeroSkins.chargeTorb}.mp4`}/>}
{team === Teams.spark && <TorbWrapper src={`videos/${HeroSkins.sparkTorb}.mp4`}/>}
{team === Teams.outlaws && <TorbWrapper src={`videos/${HeroSkins.outlawsTorb}.mp4`}/>}
{team === Teams.spitfire && <TorbWrapper src={`videos/${HeroSkins.spitfireTorb}.mp4`}/>}
{team === Teams.gladiators && <TorbWrapper src={`videos/${HeroSkins.gladiatorsTorb}.mp4`}/>}
{team === Teams.valiant && <TorbWrapper src={`videos/${HeroSkins.valiantTorb}.mp4`}/>}
{team === Teams.excelsior && <TorbWrapper src={`videos/${HeroSkins.excelsiorTorb}.mp4`}/>}
{team === Teams.eternal && <TorbWrapper src={`videos/${HeroSkins.eternalTorb}.mp4`}/>}
{team === Teams.fusion && <TorbWrapper src={`videos/${HeroSkins.fusionTorb}.mp4`}/>}
{team === Teams.shock && <TorbWrapper src={`videos/${HeroSkins.shockTorb}.mp4`}/>}
{team === Teams.dragons && <TorbWrapper src={`videos/${HeroSkins.dragonsTorb}.mp4`}/>}
{team === Teams.defiant && <TorbWrapper src={`videos/${HeroSkins.defiantTorb}.mp4`}/>}
{team === Teams.titans && <TorbWrapper src={`videos/${HeroSkins.titansTorb}.mp4`}/>}
{team === Teams.justice && <TorbWrapper src={`videos/${HeroSkins.justiceTorb}.mp4`}/>}
        </div>
    )
}

export default Torb;

const TorbWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 7vh;
        left: -3vw;
    }
`
