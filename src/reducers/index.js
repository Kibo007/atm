import {combineReducers} from 'redux';

import atm from './atm';

import undoable, { includeAction } from 'redux-undo'

const rootReducer = combineReducers({
  atm: undoable(atm, {
    limit: 50, // set a limit for the history
    debug: true
  })
});

export default rootReducer;
