import React, {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import "./styles.css";
import { Heros, getHeroHealth } from '../../../types';

interface HealthProps{
    health: number;
    isAlive: boolean;
    column: number;
    hero: Heros;
}

const renderRedBars = (column: number) =>{

    return Array.apply(null, Array(20)).map((x , i)=>{
        return <RedBar key={i} className={`red-bar-${column} red-bar`}/>
    })
}
const Health = (props: HealthProps) =>{
    const {column, health} = props;
    const [showRed, setShowRed] = useState<boolean>(false);
    
    const timeline = useMemo(()=>gsap.timeline({paused: true, defaults:{ease:"none"}}), []);
    useEffect(()=>{
        timeline
        .staggerFromTo(`.red-bar-${column}`, 0.1, {scaleY: 2}, {scaleY: 1}, 0.2)
        .staggerFromTo(`.red-bar-${column}`, 0.02, {opacity: 0}, {opacity: 1}, 0.2, "-=3.9")
        timeline.reverse(0);
        timeline.pause();

    }, [timeline, column])

    useEffect(()=>{
        const start = timeline.time();
        const end = Math.floor(health/100 * 16) / 4 + 0.1;
        const duration = Math.min((start-end) * 0.5, 0.4);
        
        if(start-end>0){
            setShowRed(true);
            timeline.tweenFromTo(start, end, {duration, onComplete:()=>{
                setShowRed(false);
            }})
        }else{
            timeline.seek(end);
        }
    }, [health, timeline, column])

    return(
        <MainWrapper style={{ opacity: props.isAlive ? 1 : 0}}>
            <RedBarWrapper style={{opacity: showRed ? 1 : 0}}>
            {renderRedBars(column)}
            </RedBarWrapper>
            <HealthBar style={{width: `${props.health}%`}}>
                <HeroHealthImage style={{backgroundImage: `url('images/hero-health/${getHeroHealth(props.hero)}')`}}/>
            </HealthBar>
        </MainWrapper>
    )
}

export default Health;

const HealthBar = styled.div`
    width: 80%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    transition: ease width 0.3s;
    overflow: hidden;
`
const RedBar = styled.div`
    display: inline-block;
    height: 100%;
    width: 5%;
    background-color: red;
    transform-origin: left center;
`
const MainWrapper = styled.div`
    width: 260px;
    height: 30px;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.7);
    position: relative;
    border: 3px solid rgba(0, 0, 0, 0.7);
    transition: opacity 0.1s ease;
`

const RedBarWrapper = styled.div`
    width: 100%;
    height: 100%;
    transition: opacity 0.4s ease;
`
const HeroHealthImage = styled.div`
    width: 260px;
    height: 30px;
    background-size: cover;
    background-repeat: none;
`