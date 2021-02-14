import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Winston = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <WinstonWrapper src={`videos/${HeroSkins.dynastyWinston}.mp4`}/>}
{team === Teams.reign && <WinstonWrapper src={`videos/${HeroSkins.reignWinston}.mp4`}/>}
{team === Teams.uprising && <WinstonWrapper src={`videos/${HeroSkins.uprisingWinston}.mp4`}/>}
{team === Teams.hunters && <WinstonWrapper src={`videos/${HeroSkins.huntersWinston}.mp4`}/>}
{team === Teams.fuel && <WinstonWrapper src={`videos/${HeroSkins.fuelWinston}.mp4`}/>}
{team === Teams.mayhem && <WinstonWrapper src={`videos/${HeroSkins.mayhemWinston}.mp4`}/>}
{team === Teams.charge && <WinstonWrapper src={`videos/${HeroSkins.chargeWinston}.mp4`}/>}
{team === Teams.spark && <WinstonWrapper src={`videos/${HeroSkins.sparkWinston}.mp4`}/>}
{team === Teams.outlaws && <WinstonWrapper src={`videos/${HeroSkins.outlawsWinston}.mp4`}/>}
{team === Teams.spitfire && <WinstonWrapper src={`videos/${HeroSkins.spitfireWinston}.mp4`}/>}
{team === Teams.gladiators && <WinstonWrapper src={`videos/${HeroSkins.gladiatorsWinston}.mp4`}/>}
{team === Teams.valiant && <WinstonWrapper src={`videos/${HeroSkins.valiantWinston}.mp4`}/>}
{team === Teams.excelsior && <WinstonWrapper src={`videos/${HeroSkins.excelsiorWinston}.mp4`}/>}
{team === Teams.eternal && <WinstonWrapper src={`videos/${HeroSkins.eternalWinston}.mp4`}/>}
{team === Teams.fusion && <WinstonWrapper src={`videos/${HeroSkins.fusionWinston}.mp4`}/>}
{team === Teams.shock && <WinstonWrapper src={`videos/${HeroSkins.shockWinston}.mp4`}/>}
{team === Teams.dragons && <WinstonWrapper src={`videos/${HeroSkins.dragonsWinston}.mp4`}/>}
{team === Teams.defiant && <WinstonWrapper src={`videos/${HeroSkins.defiantWinston}.mp4`}/>}
{team === Teams.titans && <WinstonWrapper src={`videos/${HeroSkins.titansWinston}.mp4`}/>}
{team === Teams.justice && <WinstonWrapper src={`videos/${HeroSkins.justiceWinston}.mp4`}/>}
        </div>
    )
}

export default Winston;

const WinstonWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 26vh;
        left: 8vw;
    }
`
