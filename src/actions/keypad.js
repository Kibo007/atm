import { ActionCreators } from 'redux-undo';
import {ACCEPT_INPUT, NUM_KEYPAD, UPDATE_STEP} from './atm';

export const previousState = (delay = 100) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(ActionCreators.undo());
    }, delay);
  };
};

export const confirmInput = (input) => {
  return {
    type: ACCEPT_INPUT,
    payload: input
  }
};

export const numKeypad = (option) => {
  return {
    type: NUM_KEYPAD,
    payload: option
  }
};

export const abortProcess = () => {
  return {
    type: UPDATE_STEP,
    payload: 0
  }
};

export const resetInput = () => {
  return {
    type: ACCEPT_INPUT,
    payload: ''
  }
};
