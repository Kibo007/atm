import {bindActionCreators} from 'redux';
import { ActionCreators } from 'redux-undo';

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

export function previousState(delay = 100) {
  return dispatch => {
    setTimeout(() => {
      dispatch(ActionCreators.undo());
    }, delay);
  };
}

export default function atmActions($ngRedux) {
  let actionCreator = {
    increment,
    decrement,
    incrementIfOdd,
    incrementAsync,
    previousState
  };

  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

atmActions.$inject = ['$ngRedux'];
