import { SET_MEASURE_DATA } from "../actions";

const initialState ={
    data:{
      weight: '',
	    height: '',
    	date: ''
    }
}

export const setMeasure=(state=initialState,action)=>{
    switch(action.type){
        case SET_MEASURE_DATA:
            return{
             ...state,
             data:action.payload,
            }
        default:
            return state
    }
}