import {combineReducers} from 'redux';
import inputReducer from './input-reducer';
import {Input} from '../../types';

export default combineReducers({
    inputReducer
});

export interface StoreState{
    inputReducer: Input;
}