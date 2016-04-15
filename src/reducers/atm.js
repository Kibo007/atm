import {INCREMENT_COUNTER, DECREMENT_COUNTER, CARD_MOUNT, MONEY_WITHDRAW, OPTION_BAR, ACCEPT_INPUT} from '../actions/atm';
import {messages, definedAmounts, userPin} from '../data/data'

const defaultState = {
  step: 0,
  message: messages.step_0,
  cardMounted: false,
  moneyWithdrew: false,
  definedAmounts,
};

export default function atm ( state = defaultState, action ) {
  let count;

  switch (action.type) {
    case INCREMENT_COUNTER:
      count = state.step + 1;
      return {
        ...state,
        step: count,
        message: messages[`step_${count}`]
      };
    case DECREMENT_COUNTER:
      count = state.step - 1;
      return {...state, count, message: messages[`step_${count}`]};
    case CARD_MOUNT:
      count = state.step + 1;
      return {
        ...state,
        cardMounted: action.payload,
        step: count,
        message: messages[`step_${count}`]
      };
    case MONEY_WITHDRAW:
      return { ...state, moneyWithdrew: action.payload };
    case OPTION_BAR:
      return { ...state, step: action.payload ? 1 : 5 };
    case ACCEPT_INPUT:
      if ( state.step === 1) {
        let isCorrectPin = action.payload === userPin;
        count = isCorrectPin ? state.step + 1 : 6;

        return {
          ...state,
          step: count,
          message: count === 6 ? messages.invalid : messages[`step_${count}`]
        };
      }
      if ( state.step === 3) {
        count = state.step + 1;

        return {
          ...state,
          step: count,
          message: count === 6 ? messages.invalid : messages[`step_${count}`]
        };
      }
      return { ...state, step: state.step + 1 };
    default:
      return state
  }
}
