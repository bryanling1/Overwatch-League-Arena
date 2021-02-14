import React, {useMemo, useEffect} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import './styles.css';

interface StateProps{
    isAlive: boolean;
    column: number;
}
const DeathTimer = (props:StateProps) =>{
    const {isAlive, column} = props;
    const timeline = useMemo(()=>gsap.timeline({delay: 1, paused: true}),[])

    useEffect(()=>{
        timeline.set(`#ring-${column}`, {opacity: 0})
        timeline.fromTo(`#death-progress-${column}`, {strokeDasharray: "0, 100"}, {strokeDasharray: "103, 100", duration: 10, ease:'none'}).addLabel('start')
        timeline.to(`#ring-${column}`, {opacity: 1}, "<start")
        timeline.to(`#ring-${column}`, {opacity: 0})
    }, [timeline, column])

    useEffect(()=>{
        if(!isAlive){
            timeline.seek(0);
            timeline.play();
        }else{
            if(timeline.isActive()){
                timeline.seek(0);
                timeline.pause();
            }
        }
    }, [isAlive, timeline])
    return(
        <MainWrapper>
            
            <div className="death-ring-container" id={`ring-${column}`}>
                <svg className="red-skull" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.74 102.75">
                    <path d="M356.15-72.25a46.5,46.5,0,0,0-13-23.25c-10.75-10.25-36.75-10-36.75-10s-26-.25-36.75,10a46.5,46.5,0,0,0-13,23.25s-4.5,11.25,1.5,18.12,14,15.73,14,15.73L268.4-27.75s7,4.25,18.5,3.75c2.25,4,1.25,11.25,1.25,11.25l18.25,10,18.25-10S323.65-20,325.9-24c11.5,0.5,18.5-3.75,18.5-3.75L340.65-38.4s8-8.85,14-15.73S356.15-72.25,356.15-72.25ZM295.86-48.2c-1.3,1.77-4.28,4.2-10.81,4.2-13.75.25-19.75-21-19.75-21s0-11.25,14,2.25c9.09,8.76,13.75,11.52,15.91,12.38A1.43,1.43,0,0,1,295.86-48.2ZM306.4-23.25s-2.4,0-5.9-4c2-11.15,5.9-12.25,5.9-12.25s3.9,1.1,5.9,12.25C308.8-23.25,306.4-23.25,306.4-23.25ZM327.75-44c-6.53,0-9.5-2.43-10.81-4.2a1.43,1.43,0,0,1,.65-2.17c2.15-.86,6.82-3.61,15.91-12.38,14-13.5,14-2.25,14-2.25S341.5-43.75,327.75-44Z" transform="translate(-255.03 105.5)"/>
                </svg>
                <div className="death-ring">
                <svg viewBox="0 0 32 32">
                    <circle id="back" className="circle r-color ring-color-stroke" r="16" cx="16" cy="16" />
                    <circle id={`death-progress-${column}`} className="circle r-color ring-color-stroke" r="16" cx="16" cy="16" style={{strokeDasharray: "0 100"}}/>
                </svg>
                </div>
            </div>
        </MainWrapper>
    )
}

export default DeathTimer;

const MainWrapper = styled.div`
{
    width: 300px;
    height: 300px;
    position: relative;
    z-index: 5;
    top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`