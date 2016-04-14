import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/atm';
import {messages} from '../data/data'

export default function atm(state = { count: 0, name: messages.step_0 }, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      var step = `step_${state.count + 1}`;
      return { ...state, count: state.count + 1, name: messages[step] }
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
