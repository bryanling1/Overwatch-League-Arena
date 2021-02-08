import React, {Fragment} from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Zenyatta = (props:StateProps) =>{
    const {team} = props;
    return(
        <Fragment>
       {team === Teams.dynasty && <ZenyattaWrapper src={`videos/${HeroSkins.dynastyZenyatta}.mp4`}/>}
{team === Teams.reign && <ZenyattaWrapper src={`videos/${HeroSkins.reignZenyatta}.mp4`}/>}
{team === Teams.uprising && <ZenyattaWrapper src={`videos/${HeroSkins.uprisingZenyatta}.mp4`}/>}
{team === Teams.hunters && <ZenyattaWrapper src={`videos/${HeroSkins.huntersZenyatta}.mp4`}/>}
{team === Teams.fuel && <ZenyattaWrapper src={`videos/${HeroSkins.fuelZenyatta}.mp4`}/>}
{team === Teams.mayhem && <ZenyattaWrapper src={`videos/${HeroSkins.mayhemZenyatta}.mp4`}/>}
{team === Teams.charge && <ZenyattaWrapper src={`videos/${HeroSkins.chargeZenyatta}.mp4`}/>}
{team === Teams.spark && <ZenyattaWrapper src={`videos/${HeroSkins.sparkZenyatta}.mp4`}/>}
{team === Teams.outlaws && <ZenyattaWrapper src={`videos/${HeroSkins.outlawsZenyatta}.mp4`}/>}
{team === Teams.spitfire && <ZenyattaWrapper src={`videos/${HeroSkins.spitfireZenyatta}.mp4`}/>}
{team === Teams.gladiators && <ZenyattaWrapper src={`videos/${HeroSkins.gladiatorsZenyatta}.mp4`}/>}
{team === Teams.valiant && <ZenyattaWrapper src={`videos/${HeroSkins.valiantZenyatta}.mp4`}/>}
{team === Teams.excelsior && <ZenyattaWrapper src={`videos/${HeroSkins.excelsiorZenyatta}.mp4`}/>}
{team === Teams.eternal && <ZenyattaWrapper src={`videos/${HeroSkins.eternalZenyatta}.mp4`}/>}
{team === Teams.fusion && <ZenyattaWrapper src={`videos/${HeroSkins.fusionZenyatta}.mp4`}/>}
{team === Teams.shock && <ZenyattaWrapper src={`videos/${HeroSkins.shockZenyatta}.mp4`}/>}
{team === Teams.dragons && <ZenyattaWrapper src={`videos/${HeroSkins.dragonsZenyatta}.mp4`}/>}
{team === Teams.defiant && <ZenyattaWrapper src={`videos/${HeroSkins.defiantZenyatta}.mp4`}/>}
{team === Teams.titans && <ZenyattaWrapper src={`videos/${HeroSkins.titansZenyatta}.mp4`}/>}
{team === Teams.justice && <ZenyattaWrapper src={`videos/${HeroSkins.justiceZenyatta}.mp4`}/>}
        </Fragment>
    )
}

export default Zenyatta;

const ZenyattaWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2);
        top: 25vh;
        left: -3vw;
    }
`

