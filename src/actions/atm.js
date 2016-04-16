// types
export const CARD_MOUNT = 'CARD_MOUNT';
export const INCREMENT_MESSAGE = 'INCREMENT_MESSAGE';
export const MONEY_WITHDRAW = 'MONEY_WITHDRAW';
export const RESET_PROCESS = 'RESET_PROCESS';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const CONFIRM_INPUT = 'CONFIRM_INPUT';
export const SELECT_AMOUNT = 'SELECT_AMOUNT';
export const END_PROCESS = 'END_PROCESS';
export const NUM_KEYPAD = 'NUM_KEYPAD';

// action creators
const incrementMessage = () => {
  return {
    type: INCREMENT_MESSAGE
  };
};

const cardMounted = () => {
  return {
    type: CARD_MOUNT,
    payload: true
  }
};

// Async action creator
export const insertCard = (delay = 2500) => {
  return dispatch => {
    dispatch(cardMounted());
    setTimeout(() => {
      dispatch(incrementMessage());
    }, delay);
  };
}

// combined action creator
export const actionCreator = {
  insertCard,
  incrementMessage
};

