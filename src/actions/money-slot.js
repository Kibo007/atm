import {MONEY_WITHDRAW} from './atm';

export const moneyWithdrow = () => {
  return {
    type: MONEY_WITHDRAW,
    payload: true
  }
};
