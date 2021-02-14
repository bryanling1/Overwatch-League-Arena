import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Roadhog = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <RoadhogWrapper src={`videos/${HeroSkins.dynastyRoadhog}.mp4`}/>}
{team === Teams.reign && <RoadhogWrapper src={`videos/${HeroSkins.reignRoadhog}.mp4`}/>}
{team === Teams.uprising && <RoadhogWrapper src={`videos/${HeroSkins.uprisingRoadhog}.mp4`}/>}
{team === Teams.hunters && <RoadhogWrapper src={`videos/${HeroSkins.huntersRoadhog}.mp4`}/>}
{team === Teams.fuel && <RoadhogWrapper src={`videos/${HeroSkins.fuelRoadhog}.mp4`}/>}
{team === Teams.mayhem && <RoadhogWrapper src={`videos/${HeroSkins.mayhemRoadhog}.mp4`}/>}
{team === Teams.charge && <RoadhogWrapper src={`videos/${HeroSkins.chargeRoadhog}.mp4`}/>}
{team === Teams.spark && <RoadhogWrapper src={`videos/${HeroSkins.sparkRoadhog}.mp4`}/>}
{team === Teams.outlaws && <RoadhogWrapper src={`videos/${HeroSkins.outlawsRoadhog}.mp4`}/>}
{team === Teams.spitfire && <RoadhogWrapper src={`videos/${HeroSkins.spitfireRoadhog}.mp4`}/>}
{team === Teams.gladiators && <RoadhogWrapper src={`videos/${HeroSkins.gladiatorsRoadhog}.mp4`}/>}
{team === Teams.valiant && <RoadhogWrapper src={`videos/${HeroSkins.valiantRoadhog}.mp4`}/>}
{team === Teams.excelsior && <RoadhogWrapper src={`videos/${HeroSkins.excelsiorRoadhog}.mp4`}/>}
{team === Teams.eternal && <RoadhogWrapper src={`videos/${HeroSkins.eternalRoadhog}.mp4`}/>}
{team === Teams.fusion && <RoadhogWrapper src={`videos/${HeroSkins.fusionRoadhog}.mp4`}/>}
{team === Teams.shock && <RoadhogWrapper src={`videos/${HeroSkins.shockRoadhog}.mp4`}/>}
{team === Teams.dragons && <RoadhogWrapper src={`videos/${HeroSkins.dragonsRoadhog}.mp4`}/>}
{team === Teams.defiant && <RoadhogWrapper src={`videos/${HeroSkins.defiantRoadhog}.mp4`}/>}
{team === Teams.titans && <RoadhogWrapper src={`videos/${HeroSkins.titansRoadhog}.mp4`}/>}
{team === Teams.justice && <RoadhogWrapper src={`videos/${HeroSkins.justiceRoadhog}.mp4`}/>}
        </div>
    )
}

export default Roadhog;

const RoadhogWrapper = styled(VideoWrapper)`
    & {
        transform: scale(1.8);
        top: 30vh;
        left: -3vw;
    }
`
