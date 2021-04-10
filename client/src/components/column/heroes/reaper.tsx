import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Reaper = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <ReaperWrapper src={`videos/${HeroSkins.dynastyReaper}.mp4`}/>}
{team === Teams.reign && <ReaperWrapper src={`videos/${HeroSkins.reignReaper}.mp4`}/>}
{team === Teams.uprising && <ReaperWrapper src={`videos/${HeroSkins.uprisingReaper}.mp4`}/>}
{team === Teams.hunters && <ReaperWrapper src={`videos/${HeroSkins.huntersReaper}.mp4`}/>}
{team === Teams.fuel && <ReaperWrapper src={`videos/${HeroSkins.fuelReaper}.mp4`}/>}
{team === Teams.mayhem && <ReaperWrapper src={`videos/${HeroSkins.mayhemReaper}.mp4`}/>}
{team === Teams.charge && <ReaperWrapper src={`videos/${HeroSkins.chargeReaper}.mp4`}/>}
{team === Teams.spark && <ReaperWrapper src={`videos/${HeroSkins.sparkReaper}.mp4`}/>}
{team === Teams.outlaws && <ReaperWrapper src={`videos/${HeroSkins.outlawsReaper}.mp4`}/>}
{team === Teams.spitfire && <ReaperWrapper src={`videos/${HeroSkins.spitfireReaper}.mp4`}/>}
{team === Teams.gladiators && <ReaperWrapper src={`videos/${HeroSkins.gladiatorsReaper}.mp4`}/>}
{team === Teams.valiant && <ReaperWrapper src={`videos/${HeroSkins.valiantReaper}.mp4`}/>}
{team === Teams.excelsior && <ReaperWrapper src={`videos/${HeroSkins.excelsiorReaper}.mp4`}/>}
{team === Teams.eternal && <ReaperWrapper src={`videos/${HeroSkins.eternalReaper}.mp4`}/>}
{team === Teams.fusion && <ReaperWrapper src={`videos/${HeroSkins.fusionReaper}.mp4`}/>}
{team === Teams.shock && <ReaperWrapper src={`videos/${HeroSkins.shockReaper}.mp4`}/>}
{team === Teams.dragons && <ReaperWrapper src={`videos/${HeroSkins.dragonsReaper}.mp4`}/>}
{team === Teams.defiant && <ReaperWrapper src={`videos/${HeroSkins.defiantReaper}.mp4`}/>}
{team === Teams.titans && <ReaperWrapper src={`videos/${HeroSkins.titansReaper}.mp4`}/>}
{team === Teams.justice && <ReaperWrapper src={`videos/${HeroSkins.justiceReaper}.mp4`}/>}
        </div>
    )
}

export default Reaper;

const ReaperWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.7);
        top: 63vh;
        left: -7vw;
    }
`
