import {connect, ConnectedProps} from 'react-redux';
import {getWinnerColors, getTeamLogo} from '../types';
import {StoreState} from '../store/reducers';
import React from 'react';
import styled from 'styled-components';

function mapStateToProps(state:StoreState){
    return {
        input:state.inputReducer
    }
}
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const Winner = (props:Props) =>{
    return(
        <WinnerWrapper>
            <FirstIn 
                width={props.input.winner === '' ? 0 : 100}
                color={props.input.winner ? getWinnerColors(props.input[props.input.winner.toLowerCase()].team)[0] : getWinnerColors(undefined)[0]}
            />
            <SecondIn 
                width={props.input.winner === '' ? 0 : 100}
                backgroundPosition={props.input.winner === '' ? 500 : 760}
                color={props.input.winner ? getWinnerColors(props.input[props.input.winner.toLowerCase()].team)[1] : getWinnerColors(undefined)[1]}
                backgroundImage={props.input.winner && getTeamLogo(props.input[props.input.winner.toLowerCase()].team)}
            />
        </WinnerWrapper>
    )
}

export default connector(Winner); 

const WinnerWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9;
`

interface InType{
    width: number;
    color: string;
    backgroundPosition?: number;
    backgroundImage?: string;
}
const FirstIn = styled.div`
    position: absolute;
    width: ${(props:InType)=>props.width}%;
    height: 100%;
    background-color: ${(props:InType)=>props.color};
    transition: width 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SecondIn = styled.div`
    position: absolute;
    width: ${(props:InType)=>props.width}%;
    height: 100%;
    background-color: ${(props:InType)=>props.color};
    transition: width 0.3s ease 0.2s, background-position 0.4s ease 0.2s;
    background-image: url( ${(props:InType)=>props.backgroundImage});
    background-position: ${(props:InType)=>props.backgroundPosition}px;
    background-repeat: no-repeat;
    background-size: 600px;
`
