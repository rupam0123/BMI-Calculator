export const SET_STATE='SET_STATE'
export const SET_DATA='SET_DATA'
export const SET_MEASURE_DATA = 'SET_MEASURE_DATA'


export const setState=(payload)=>({type:SET_STATE,payload})
export const setData =(payload)=>({type:SET_DATA,payload})
export const setMeasureData =(payload)=>({type:SET_MEASURE_DATA,payload})