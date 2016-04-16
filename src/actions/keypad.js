import { ActionCreators } from 'redux-undo';
import {UPDATE_INPUT, NUM_KEYPAD, RESET_PROCESS, CONFIRM_INPUT} from './atm';

// Async action creator
export const previousState = (delay = 100) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(ActionCreators.undo());
    }, delay);
  };
};

// Action creator
export const confirmInput = () => {
  return {
    type: CONFIRM_INPUT
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
    type: RESET_PROCESS
  }
};

export const resetInput = () => {
  return {
    type: UPDATE_INPUT,
    reset: true
  }
};

export const addCharacter = (input) => {
  return {
    type: UPDATE_INPUT,
    payload: input
  }
};

// Combined action creator
export const actionCreators = {
  previousState,
  confirmInput,
  numKeypad,
  abortProcess,
  resetInput,
  addCharacter
};
