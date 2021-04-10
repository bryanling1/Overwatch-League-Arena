import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Sigma = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <SigmaWrapper src={`videos/${HeroSkins.dynastySigma}.mp4`}/>}
{team === Teams.reign && <SigmaWrapper src={`videos/${HeroSkins.reignSigma}.mp4`}/>}
{team === Teams.uprising && <SigmaWrapper src={`videos/${HeroSkins.uprisingSigma}.mp4`}/>}
{team === Teams.hunters && <SigmaWrapper src={`videos/${HeroSkins.huntersSigma}.mp4`}/>}
{team === Teams.fuel && <SigmaWrapper src={`videos/${HeroSkins.fuelSigma}.mp4`}/>}
{team === Teams.mayhem && <SigmaWrapper src={`videos/${HeroSkins.mayhemSigma}.mp4`}/>}
{team === Teams.charge && <SigmaWrapper src={`videos/${HeroSkins.chargeSigma}.mp4`}/>}
{team === Teams.spark && <SigmaWrapper src={`videos/${HeroSkins.sparkSigma}.mp4`}/>}
{team === Teams.outlaws && <SigmaWrapper src={`videos/${HeroSkins.outlawsSigma}.mp4`}/>}
{team === Teams.spitfire && <SigmaWrapper src={`videos/${HeroSkins.spitfireSigma}.mp4`}/>}
{team === Teams.gladiators && <SigmaWrapper src={`videos/${HeroSkins.gladiatorsSigma}.mp4`}/>}
{team === Teams.valiant && <SigmaWrapper src={`videos/${HeroSkins.valiantSigma}.mp4`}/>}
{team === Teams.excelsior && <SigmaWrapper src={`videos/${HeroSkins.excelsiorSigma}.mp4`}/>}
{team === Teams.eternal && <SigmaWrapper src={`videos/${HeroSkins.eternalSigma}.mp4`}/>}
{team === Teams.fusion && <SigmaWrapper src={`videos/${HeroSkins.fusionSigma}.mp4`}/>}
{team === Teams.shock && <SigmaWrapper src={`videos/${HeroSkins.shockSigma}.mp4`}/>}
{team === Teams.dragons && <SigmaWrapper src={`videos/${HeroSkins.dragonsSigma}.mp4`}/>}
{team === Teams.defiant && <SigmaWrapper src={`videos/${HeroSkins.defiantSigma}.mp4`}/>}
{team === Teams.titans && <SigmaWrapper src={`videos/${HeroSkins.titansSigma}.mp4`}/>}
{team === Teams.justice && <SigmaWrapper src={`videos/${HeroSkins.justiceSigma}.mp4`}/>}
        </div>
    )
}

export default Sigma;

const SigmaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(3);
        top: 69vh;
        left: -6vw;
    }
`
