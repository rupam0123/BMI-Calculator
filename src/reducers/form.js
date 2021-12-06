import { SET_NAME } from "../actions";

const initialState = {
  name: '',
}

export const setName = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}