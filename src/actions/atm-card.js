import {CARD_MOUNT} from './atm';

export const insertCard = () => {
  return {
    type: CARD_MOUNT,
    payload: true
  }
};

export const ejectCard = () => {
  return {
    type: CARD_MOUNT,
    payload: false
  }
};

export const actionCreators = {
  insertCard,
  ejectCard
};
