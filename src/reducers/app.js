import { SET_STATE, SET_DATA } from "../actions";
import { getData} from '../helpers/localStorage';
console.log(getData('data') || [])
const initialState = {
  state:getData('data') || [],
  data:{}
}

export const setApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...state,
        state: action.payload
      }
    case SET_DATA: {
      return {
        ...state,
        data:action.payload
      }
    }
    default:
      return state
  }
}