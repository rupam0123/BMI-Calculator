import { combineReducers } from 'redux';
import { setMeasure } from './bmiForm';
import { setApp } from './app';
import {setName} from './form'


export default combineReducers({
    setMeasure,
    setApp,
    setName
});