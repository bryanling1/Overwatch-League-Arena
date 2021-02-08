import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Bastion = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
        {team === Teams.dynasty && <BastionWrapper src={`videos/${HeroSkins.dynastyBastion}.mp4`}/>}
{team === Teams.reign && <BastionWrapper src={`videos/${HeroSkins.reignBastion}.mp4`}/>}
{team === Teams.uprising && <BastionWrapper src={`videos/${HeroSkins.uprisingBastion}.mp4`}/>}
{team === Teams.hunters && <BastionWrapper src={`videos/${HeroSkins.huntersBastion}.mp4`}/>}
{team === Teams.fuel && <BastionWrapper src={`videos/${HeroSkins.fuelBastion}.mp4`}/>}
{team === Teams.mayhem && <BastionWrapper src={`videos/${HeroSkins.mayhemBastion}.mp4`}/>}
{team === Teams.charge && <BastionWrapper src={`videos/${HeroSkins.chargeBastion}.mp4`}/>}
{team === Teams.spark && <BastionWrapper src={`videos/${HeroSkins.sparkBastion}.mp4`}/>}
{team === Teams.outlaws && <BastionWrapper src={`videos/${HeroSkins.outlawsBastion}.mp4`}/>}
{team === Teams.spitfire && <BastionWrapper src={`videos/${HeroSkins.spitfireBastion}.mp4`}/>}
{team === Teams.gladiators && <BastionWrapper src={`videos/${HeroSkins.gladiatorsBastion}.mp4`}/>}
{team === Teams.valiant && <BastionWrapper src={`videos/${HeroSkins.valiantBastion}.mp4`}/>}
{team === Teams.excelsior && <BastionWrapper src={`videos/${HeroSkins.excelsiorBastion}.mp4`}/>}
{team === Teams.eternal && <BastionWrapper src={`videos/${HeroSkins.eternalBastion}.mp4`}/>}
{team === Teams.fusion && <BastionWrapper src={`videos/${HeroSkins.fusionBastion}.mp4`}/>}
{team === Teams.shock && <BastionWrapper src={`videos/${HeroSkins.shockBastion}.mp4`}/>}
{team === Teams.dragons && <BastionWrapper src={`videos/${HeroSkins.dragonsBastion}.mp4`}/>}
{team === Teams.defiant && <BastionWrapper src={`videos/${HeroSkins.defiantBastion}.mp4`}/>}
{team === Teams.titans && <BastionWrapper src={`videos/${HeroSkins.titansBastion}.mp4`}/>}
{team === Teams.justice && <BastionWrapper src={`videos/${HeroSkins.justiceBastion}.mp4`}/>}
        </div>
    )
}

export default Bastion;

const BastionWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.3);
        top: 43vh;
        left: -5vw;
    }
`
