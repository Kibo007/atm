import {SELECT_AMOUNT, MONEY_WITHDRAW, CARD_MOUNT, END_PROCESS} from './atm';
import {abortProcess as resetProcess} from './keypad'

// Action creators
export const selectAmount = (input) => {
  return {
    type: SELECT_AMOUNT,
    payload: input
  }
};

export const moneyWithdraw = () => {
  return {
    type: MONEY_WITHDRAW,
    payload: true
  }
};

const unmountCard = () => {
  return {
    type: CARD_MOUNT,
    payload: false
  }
};

const endProcess = () => {
  return {
    type: END_PROCESS
  }
};

// Async action creator
export function ejectCard() {
  return dispatch => {
    dispatch(unmountCard());
    setTimeout(() => {
      dispatch(endProcess());
    }, 2500);
    setTimeout(() => {
      dispatch(resetProcess());
    }, 10000);
  };
}

// combined action creator
export const actionCreator = {
  selectAmount,
  moneyWithdraw,
  ejectCard
};
