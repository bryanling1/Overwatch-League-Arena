import React from 'react';
import styled from 'styled-components';

const Winner = () =>{
    return(
        <WinnerWrapper>
            <FirstIn/>
        </WinnerWrapper>
    )
}

export default Winner; 

const WinnerWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9;
    pointer-events: none;
`

const FirstIn = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: red;
    transition: width 0.3s ease;
`