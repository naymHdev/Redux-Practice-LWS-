import { DeDECREMENT, DeINCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: DeINCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: DeDECREMENT,
    payload: value,
  };
};
