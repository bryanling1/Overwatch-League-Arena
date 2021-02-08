import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Ball = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <BallWrapper src={`videos/${HeroSkins.dynastyBall}.mp4`}/>}
{team === Teams.reign && <BallWrapper src={`videos/${HeroSkins.reignBall}.mp4`}/>}
{team === Teams.uprising && <BallWrapper src={`videos/${HeroSkins.uprisingBall}.mp4`}/>}
{team === Teams.hunters && <BallWrapper src={`videos/${HeroSkins.huntersBall}.mp4`}/>}
{team === Teams.fuel && <BallWrapper src={`videos/${HeroSkins.fuelBall}.mp4`}/>}
{team === Teams.mayhem && <BallWrapper src={`videos/${HeroSkins.mayhemBall}.mp4`}/>}
{team === Teams.charge && <BallWrapper src={`videos/${HeroSkins.chargeBall}.mp4`}/>}
{team === Teams.spark && <BallWrapper src={`videos/${HeroSkins.sparkBall}.mp4`}/>}
{team === Teams.outlaws && <BallWrapper src={`videos/${HeroSkins.outlawsBall}.mp4`}/>}
{team === Teams.spitfire && <BallWrapper src={`videos/${HeroSkins.spitfireBall}.mp4`}/>}
{team === Teams.gladiators && <BallWrapper src={`videos/${HeroSkins.gladiatorsBall}.mp4`}/>}
{team === Teams.valiant && <BallWrapper src={`videos/${HeroSkins.valiantBall}.mp4`}/>}
{team === Teams.excelsior && <BallWrapper src={`videos/${HeroSkins.excelsiorBall}.mp4`}/>}
{team === Teams.eternal && <BallWrapper src={`videos/${HeroSkins.eternalBall}.mp4`}/>}
{team === Teams.fusion && <BallWrapper src={`videos/${HeroSkins.fusionBall}.mp4`}/>}
{team === Teams.shock && <BallWrapper src={`videos/${HeroSkins.shockBall}.mp4`}/>}
{team === Teams.dragons && <BallWrapper src={`videos/${HeroSkins.dragonsBall}.mp4`}/>}
{team === Teams.defiant && <BallWrapper src={`videos/${HeroSkins.defiantBall}.mp4`}/>}
{team === Teams.titans && <BallWrapper src={`videos/${HeroSkins.titansBall}.mp4`}/>}
{team === Teams.justice && <BallWrapper src={`videos/${HeroSkins.justiceBall}.mp4`}/>}
        </div>
    )
}

export default Ball;

const BallWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 53vh;
        left: -7vw;
    }
`
