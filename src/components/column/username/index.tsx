import React from 'react';
import styled from 'styled-components';
import './styles.css';

interface UsernameProps{
    username: string;
    isAlive: boolean;
}
const Username = (props:UsernameProps) =>{
    return(
        <MainWrapper className="username">
            <DeathBlock style={{opacity:props.isAlive ? 0 : 1}}/>
            {props.username}
        </MainWrapper>
    );
};

export default Username;

const MainWrapper = styled.div`
    color: white;
    position: relative;
    z-index: 5;
    width: 70%;
    text-align: center;
    margin-bottom: 5px;
    min-height: 35.5px;
    max-height: 35.5px;
    overflow: hidden;
`

const DeathBlock = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    transition: opacity 0.3s ease;
`