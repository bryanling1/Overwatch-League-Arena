import React from 'react';
import {Teams, HeroSkins} from '../../../types';
import styled from 'styled-components';
import VideoWrapper from '../video-wrapper';

interface StateProps{
    team: Teams
}

const Cassidy = (props:StateProps) =>{
    const {team} = props;
    return(
        <div>
       {team === Teams.dynasty && <CassidyWrapper src={`videos/${HeroSkins.dynastyCassidy}.mp4`}/>}
{team === Teams.reign && <CassidyWrapper src={`videos/${HeroSkins.reignCassidy}.mp4`}/>}
{team === Teams.uprising && <CassidyWrapper src={`videos/${HeroSkins.uprisingCassidy}.mp4`}/>}
{team === Teams.hunters && <CassidyWrapper src={`videos/${HeroSkins.huntersCassidy}.mp4`}/>}
{team === Teams.fuel && <CassidyWrapper src={`videos/${HeroSkins.fuelCassidy}.mp4`}/>}
{team === Teams.mayhem && <CassidyWrapper src={`videos/${HeroSkins.mayhemCassidy}.mp4`}/>}
{team === Teams.charge && <CassidyWrapper src={`videos/${HeroSkins.chargeCassidy}.mp4`}/>}
{team === Teams.spark && <CassidyWrapper src={`videos/${HeroSkins.sparkCassidy}.mp4`}/>}
{team === Teams.outlaws && <CassidyWrapper src={`videos/${HeroSkins.outlawsCassidy}.mp4`}/>}
{team === Teams.spitfire && <CassidyWrapper src={`videos/${HeroSkins.spitfireCassidy}.mp4`}/>}
{team === Teams.gladiators && <CassidyWrapper src={`videos/${HeroSkins.gladiatorsCassidy}.mp4`}/>}
{team === Teams.valiant && <CassidyWrapper src={`videos/${HeroSkins.valiantCassidy}.mp4`}/>}
{team === Teams.excelsior && <CassidyWrapper src={`videos/${HeroSkins.excelsiorCassidy}.mp4`}/>}
{team === Teams.eternal && <CassidyWrapper src={`videos/${HeroSkins.eternalCassidy}.mp4`}/>}
{team === Teams.fusion && <CassidyWrapper src={`videos/${HeroSkins.fusionCassidy}.mp4`}/>}
{team === Teams.shock && <CassidyWrapper src={`videos/${HeroSkins.shockCassidy}.mp4`}/>}
{team === Teams.dragons && <CassidyWrapper src={`videos/${HeroSkins.dragonsCassidy}.mp4`}/>}
{team === Teams.defiant && <CassidyWrapper src={`videos/${HeroSkins.defiantCassidy}.mp4`}/>}
{team === Teams.titans && <CassidyWrapper src={`videos/${HeroSkins.titansCassidy}.mp4`}/>}
{team === Teams.justice && <CassidyWrapper src={`videos/${HeroSkins.justiceCassidy}.mp4`}/>}
        </div>
    )
}

export default Cassidy;

const CassidyWrapper = styled(VideoWrapper)`
    & {
        transform: scale(2.5);
        top: 57vh;
        left: -6vw;
    }
`
