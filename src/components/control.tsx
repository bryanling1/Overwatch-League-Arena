import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {Teams, Heros, TeamTypes} from '../types';
import {connect, ConnectedProps} from 'react-redux';
import {StoreState} from '../store/reducers';
import * as actions from '../store/actions';
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

function mapStateToProps(state:StoreState){
    return {
        input:state.inputReducer
    }
}

const connector = connect(mapStateToProps, actions);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface StateProps{
    type: TeamTypes
}

type Props = StateProps & PropsFromRedux;

const Control = (props:Props) =>{
    const {input} = props;

    const handleChangeHomeTeam = (e:ChangeEvent<HTMLSelectElement>) =>{
        props.switchTeam(TeamTypes.home, e.target.value as Teams)
    }

    const handleChangeAwayTeam = (e:ChangeEvent<HTMLSelectElement>) =>{
        props.switchTeam(TeamTypes.away, e.target.value as Teams)
    }

    const handleChangeTeam = (e:ChangeEvent<HTMLSelectElement>) =>{
        props.type === TeamTypes.home ? handleChangeHomeTeam(e) : handleChangeAwayTeam(e);
    }

    const defaultValueTeam = props.type === TeamTypes.home ? input.home.team : input.away.team;

    return(
    <MainWrapper>
        <div>      
            <div>
                <select defaultValue={defaultValueTeam} onChange={handleChangeTeam}>
                    {
                        Object.values(Teams).sort().map(team=>{
                            return (
                                <option value={team} key={team}>{team}</option>
                            )
                        })
                    }
                </select>
            </div><br/>
            <div>
                {
                    props.input[props.type.toLowerCase()].players.map((player, i)=>{
                        return(
                            <ColumnWrapper key={i}>
                                <select 
                                    defaultValue={player.hero} 
                                    onChange={(e)=>{
                                        props.switchHero(props.type, i+1, e.target.value as Heros);
                                    }}
                                >
                                    {
                                        Object.values(Heros).sort().map(hero=>{
                                            return (
                                                <option value={hero} key={hero}>{hero}</option>
                                            )
                                        })
                                    }
                                </select>
                                <SliderWrapper
                                    value={player.ultCharge}
                                    onChange={(e,nextValue)=>{
                                        props.setPercentage(props.type, i+1, nextValue as number);
                                    }} 
                                    aria-labelledby="continuous-slider" /
                                >
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={player.isAlive}
                                        onChange={(e)=>{
                                            props.setIsAlive(props.type, i+1, e.target.checked);
                                        }}
                                        color="primary"
                                    />
                                    }
                                    label="Alive"
                                />
                                <TextField
                                    variant="outlined"
                                    onChange={(e)=>{
                                        props.setUsername(props.type, i+1, e.target.value);
                                    }}
                                    value={player.username}
                                    size="small"
                                />
                            </ColumnWrapper>
                        )
                    })
                }   
            </div>
        </div>
    </MainWrapper>
    )
}

export default connector(Control);



const MainWrapper = styled.div`
    display: flex;
`
const ColumnWrapper = styled.div`
    display: inline-block;
    max-width: 100px;
    padding-left: 25px;
    padding-right: 25px;
`

const SliderWrapper = styled(({...props})=><Slider {...props}/>)`
    & {
        width: 100%;
    }
`