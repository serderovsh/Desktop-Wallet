import {
  UPDATE_TRANSACTIONS,
  UPDATE_ALL_ACCOUNTS,
  FINISH_INITIALIZATION,
  WALLET_STATE,
  SET_TOKEN_BALANCES,
  INIT
} from '../actions/wallet';

const initialState = {
  persistent: {

    accounts: []
  },
  wallet_state: WALLET_STATE.NEEDS_LOADING,
};

export function walletReducer(state = initialState, action) {
  switch (action.type) {

    case INIT : {
      return {
        ...state,
        ...action
      };
    }

    case FINISH_INITIALIZATION: {
      return {
        ...state,
        persistent: action.persistent,
        wallet_state: action.wallet_state
      }
    }

    case UPDATE_ALL_ACCOUNTS: {
      console.log("update all accounts");
      console.log(action);
      return {
        ...state,
        persistent: action.persistent
      }
    }

    case UPDATE_TRANSACTIONS: {
      let newState = {
        ...state
      };
      newState.persistent.accounts[ action.accountId ].transactions = action.transactions;
      return newState;
    }


    default:
      return state;
  }
}
