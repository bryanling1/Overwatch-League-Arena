import React, {Fragment, useState} from 'react';
import Team from '../team';
import {TeamTypes} from '../../types';
import {connect, ConnectedProps} from 'react-redux';
import {StoreState} from '../../store/reducers';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Draggable from 'react-draggable';
import Paper from '@material-ui/core/Paper';
import Control from '../control';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Winner from '../winner';

function mapStateToProps(state:StoreState){
    return{
        input:state.inputReducer
    }
}

const connector = connect(mapStateToProps)

interface StateProps{
    type: TeamTypes
}

type ReduxProps = ConnectedProps<typeof connector>

type Props = StateProps & ReduxProps

const PaperComponent = (props:any) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

const Display = (props:Props) =>{
    const [open, setOpen] = useState(true);

    const handleOpen = () => setOpen(true);
    return(
        <Fragment>
            <ButtonWrapper onClick={handleOpen}>Open Controls</ButtonWrapper>
            <DialogWrapper 
                open={open}
                PaperComponent={PaperComponent} 
                aria-labelledby="draggable-dialog-title"
                onClose={()=>{setOpen(false)}}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    
                </DialogTitle>
                <DialogContent>
                    <Control type={props.type}/>
                </DialogContent>
            </DialogWrapper>
            <Winner/>
            <Team input={props.input} type={props.type}/>
        </Fragment>
    )
}

export default connector(Display);

const DialogWrapper = styled(({...props})=><Dialog {...props}/>)`
    && .MuiPaper-root {
        max-width: none; 
    }

    && >  .MuiBackdrop-root {
        background-color: transparent;
        min-width: none;
    }
`

const ButtonWrapper = styled(({...props})=><Button {...props}/>)`
    && {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        opacity: 0;
    }
    &&:hover {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
`