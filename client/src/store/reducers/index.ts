import {combineReducers} from 'redux';
import inputReducer from './input-reducer';
import {Input} from '../../types';
import socketReducer from './socket-reducer';
import {SocketState} from './socket-reducer';

export default combineReducers({
    inputReducer,
    socketReducer
});

export interface StoreState{
    inputReducer: Input;
    socketReducer: SocketState;
}