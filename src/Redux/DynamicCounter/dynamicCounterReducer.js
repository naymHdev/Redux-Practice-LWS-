import { DeDECREMENT, DeINCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DeINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DeDECREMENT:
      return {
        ...state,
        value: state.value - action.payload, 
      };

    default:
      return state;
  }
};
export default dynamicCounterReducer;
