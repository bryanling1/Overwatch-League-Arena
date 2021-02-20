import { SocketActionTypes , SocketAction } from '../actions';

export interface SocketState{
    socket: boolean;
}

const initState:SocketState={
    socket: false
}

const socketReducer = (state:SocketState=initState, action: SocketAction) =>{
    switch(action.type){
        case SocketActionTypes.socketOn:
            return {socket:true}
        case SocketActionTypes.socketOff:
            return {socket:false}
        default:
            return state
    }
}

export default socketReducer