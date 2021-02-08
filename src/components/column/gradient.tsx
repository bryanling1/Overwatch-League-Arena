import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { 
    Teams, 
    getGradientColor
} from '../../types';

interface StateProps{
    team:Teams;
}
const Gradient = (props:StateProps) =>{
    const {team} = props;
    const [color, setColor] = useState('black')

    useEffect(()=>{
        setColor(getGradientColor(team))
    }, [team])
    
    return <GradientWrapper color={color}/>
}

export default Gradient;

const GradientWrapper = styled.div`
    & {
        height: 100%;
        width: 100%;
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,1) -9000%, rgba(9,9,121,0) 40%, ${props=>props.color} 72%, black 95%);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        opacity: 0.95;
    }
`