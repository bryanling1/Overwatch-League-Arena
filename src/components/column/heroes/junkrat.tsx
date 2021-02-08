import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Junkrat = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <JunkratWrapper src={`videos/${HeroSkins.dynastyJunkrat}.mp4`}/>}
{team === Teams.reign && <JunkratWrapper src={`videos/${HeroSkins.reignJunkrat}.mp4`}/>}
{team === Teams.uprising && <JunkratWrapper src={`videos/${HeroSkins.uprisingJunkrat}.mp4`}/>}
{team === Teams.hunters && <JunkratWrapper src={`videos/${HeroSkins.huntersJunkrat}.mp4`}/>}
{team === Teams.fuel && <JunkratWrapper src={`videos/${HeroSkins.fuelJunkrat}.mp4`}/>}
{team === Teams.mayhem && <JunkratWrapper src={`videos/${HeroSkins.mayhemJunkrat}.mp4`}/>}
{team === Teams.charge && <JunkratWrapper src={`videos/${HeroSkins.chargeJunkrat}.mp4`}/>}
{team === Teams.spark && <JunkratWrapper src={`videos/${HeroSkins.sparkJunkrat}.mp4`}/>}
{team === Teams.outlaws && <JunkratWrapper src={`videos/${HeroSkins.outlawsJunkrat}.mp4`}/>}
{team === Teams.spitfire && <JunkratWrapper src={`videos/${HeroSkins.spitfireJunkrat}.mp4`}/>}
{team === Teams.gladiators && <JunkratWrapper src={`videos/${HeroSkins.gladiatorsJunkrat}.mp4`}/>}
{team === Teams.valiant && <JunkratWrapper src={`videos/${HeroSkins.valiantJunkrat}.mp4`}/>}
{team === Teams.excelsior && <JunkratWrapper src={`videos/${HeroSkins.excelsiorJunkrat}.mp4`}/>}
{team === Teams.eternal && <JunkratWrapper src={`videos/${HeroSkins.eternalJunkrat}.mp4`}/>}
{team === Teams.fusion && <JunkratWrapper src={`videos/${HeroSkins.fusionJunkrat}.mp4`}/>}
{team === Teams.shock && <JunkratWrapper src={`videos/${HeroSkins.shockJunkrat}.mp4`}/>}
{team === Teams.dragons && <JunkratWrapper src={`videos/${HeroSkins.dragonsJunkrat}.mp4`}/>}
{team === Teams.defiant && <JunkratWrapper src={`videos/${HeroSkins.defiantJunkrat}.mp4`}/>}
{team === Teams.titans && <JunkratWrapper src={`videos/${HeroSkins.titansJunkrat}.mp4`}/>}
{team === Teams.justice && <JunkratWrapper src={`videos/${HeroSkins.justiceJunkrat}.mp4`}/>}
        </div>
    )
}

export default Junkrat;

const JunkratWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.2);
        top: 36vh;
        left: -1vw;
    }
`
