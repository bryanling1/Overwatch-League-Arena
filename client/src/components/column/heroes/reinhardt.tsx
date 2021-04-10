import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Reinhardt = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <ReinhardtWrapper src={`videos/${HeroSkins.dynastyReinhardt}.mp4`}/>}
{team === Teams.reign && <ReinhardtWrapper src={`videos/${HeroSkins.reignReinhardt}.mp4`}/>}
{team === Teams.uprising && <ReinhardtWrapper src={`videos/${HeroSkins.uprisingReinhardt}.mp4`}/>}
{team === Teams.hunters && <ReinhardtWrapper src={`videos/${HeroSkins.huntersReinhardt}.mp4`}/>}
{team === Teams.fuel && <ReinhardtWrapper src={`videos/${HeroSkins.fuelReinhardt}.mp4`}/>}
{team === Teams.mayhem && <ReinhardtWrapper src={`videos/${HeroSkins.mayhemReinhardt}.mp4`}/>}
{team === Teams.charge && <ReinhardtWrapper src={`videos/${HeroSkins.chargeReinhardt}.mp4`}/>}
{team === Teams.spark && <ReinhardtWrapper src={`videos/${HeroSkins.sparkReinhardt}.mp4`}/>}
{team === Teams.outlaws && <ReinhardtWrapper src={`videos/${HeroSkins.outlawsReinhardt}.mp4`}/>}
{team === Teams.spitfire && <ReinhardtWrapper src={`videos/${HeroSkins.spitfireReinhardt}.mp4`}/>}
{team === Teams.gladiators && <ReinhardtWrapper src={`videos/${HeroSkins.gladiatorsReinhardt}.mp4`}/>}
{team === Teams.valiant && <ReinhardtWrapper src={`videos/${HeroSkins.valiantReinhardt}.mp4`}/>}
{team === Teams.excelsior && <ReinhardtWrapper src={`videos/${HeroSkins.excelsiorReinhardt}.mp4`}/>}
{team === Teams.eternal && <ReinhardtWrapper src={`videos/${HeroSkins.eternalReinhardt}.mp4`}/>}
{team === Teams.fusion && <ReinhardtWrapper src={`videos/${HeroSkins.fusionReinhardt}.mp4`}/>}
{team === Teams.shock && <ReinhardtWrapper src={`videos/${HeroSkins.shockReinhardt}.mp4`}/>}
{team === Teams.dragons && <ReinhardtWrapper src={`videos/${HeroSkins.dragonsReinhardt}.mp4`}/>}
{team === Teams.defiant && <ReinhardtWrapper src={`videos/${HeroSkins.defiantReinhardt}.mp4`}/>}
{team === Teams.titans && <ReinhardtWrapper src={`videos/${HeroSkins.titansReinhardt}.mp4`}/>}
{team === Teams.justice && <ReinhardtWrapper src={`videos/${HeroSkins.justiceReinhardt}.mp4`}/>}
        </div>
    )
}

export default Reinhardt;

const ReinhardtWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.7);
        top: 67vh;
        left: -1.5vw;
    }
`
