import { combineReducers } from 'redux';
import { setMeasure } from './bmiForm';
import { setApp } from './app';


export default combineReducers({
    setMeasure,
    setApp,
});