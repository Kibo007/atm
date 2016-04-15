import {bindActionCreators} from 'redux';

import {insertCard, ejectCard} from './atm-card';
import {abortProcess, previousState, confirmInput, resetInput, numKeypad } from './keypad'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const CARD_MOUNT = 'CARD_MOUNT';
export const MONEY_WITHDRAW = 'MONEY_WITHDRAW';
export const UPDATE_STEP = 'UPDATE_STEP';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const ACCEPT_INPUT = 'ACCEPT_INPUT';
export const OPTION_BAR = 'OPTION_BAR';
export const LOADING_BAR = 'LOADING_BAR';
export const NUM_KEYPAD = 'NUM_KEYPAD';


export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const {counter} = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export const repeatPin = (option) => {
  return {
    type: OPTION_BAR,
    payload: option
  }
};



export const actionCreator = {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
  previousState,
  insertCard,
  ejectCard
};

export default function atmActions($ngRedux) {
  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

atmActions.$inject = ['$ngRedux'];
