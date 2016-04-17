import {
  CARD_MOUNT,
  INCREMENT_MESSAGE,
  MONEY_WITHDRAW,
  UPDATE_INPUT,
  CONFIRM_INPUT,
  RESET_PROCESS,
  SELECT_AMOUNT,
  END_PROCESS
} from '../actions/atm';

// helper function to check if val exist in array
const checkAvailability = (arr, val) => {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

// import data
import {messages, definedAmounts, userPin} from '../data/data'

// default state
const defaultState = {
  step         : 0,
  message      : messages.step_0,
  cardMounted  : false,
  moneyWithdrew: false,
  definedAmounts,
  inputField   : '',
  amount       : 0
};

export default function atm (state = defaultState, action) {
  let count;

  switch (action.type) {
    case CARD_MOUNT:

      return {
        ...state,
        cardMounted: action.payload,
      };
    case INCREMENT_MESSAGE:
      count = state.step + 1;

      return {
        ...state,
        step   : count,
        message: messages[`step_${count}`]
      };
    case MONEY_WITHDRAW:
      count = state.step + 1;

      return {
        ...state,
        moneyWithdrew: action.payload,
        step         : count,
        message      : messages[`step_${count}`]
      };
    case SELECT_AMOUNT:
      if (state.step !== 2) {
        return state;
      }
      count = state.step + 1;

      return {
        ...state,
        amount : action.payload,
        step   : count,
        message: messages[`step_${count}`]
      };
    case UPDATE_INPUT:
      if (!checkAvailability([1, 2, 6], state.step)) {
        return state;
      }
      if (action.reset) {
        return {...state, inputField: ''};
      }
      return {...state, inputField: state.inputField + action.payload};
    case RESET_PROCESS:
      return defaultState;
    case CONFIRM_INPUT:
      if (state.step === 1 || state.step === 6) {
        let isCorrectPin = +state.inputField === +userPin;
        count = isCorrectPin ? 2 : 6;

        return {
          ...state,
          step      : count,
          inputField: '',
          message   : count === 6 ? messages.invalid : messages[`step_${count}`]
        };
      }
      if (state.step === 2) {
        count = state.step + 1;

        return {
          ...state,
          step   : count,
          amount: state.inputField,
          message: count === 6 ? messages.invalid : messages[`step_${count}`]
        };
      }
      return {...state, inputField: ''};
    case END_PROCESS:
      count = state.step + 1;
      return {...state, step: count, message: messages[`step_${count}`]};
    default:
      return state
  }
}
