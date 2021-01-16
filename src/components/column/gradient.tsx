import React from 'react';
import styled from 'styled-components';
import { TeamGradients } from '../../types';

interface StateProps{
    color: TeamGradients;
}
const Gradient = (props:StateProps) =>{
    const {color} = props;
    return <GradientWrapper color={color}/>
}

export default Gradient;

const GradientWrapper = styled.div`
    & {
        height: 100%;
        width: 100%;
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,1) -9000%, rgba(9,9,121,0) 50%, ${props=>props.color} 88%);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
`