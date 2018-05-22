import { SET_TOKEN_BALANCES } from '../actions/wallet';

const initialState = {
  walletName: '',
  tokens: [],
  trxBalance: 0,
  entropy: {
    total: 0,
    balances: [],
  },
  tronPower: {
    total: 0,
    balances: [],
  },
  unfreezeDeadline: '',
  privateKey: '',
  publicKey: ''
};

export function walletReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN_BALANCES: {

      let { balance: trxBalance = 0} = find(action.tokens, tb => tb.name.toUpperCase() === 'TRX' ) || {};

      return {
        ...state,
        tokens: action.tokens,
        trxBalance,
        frozen: {
          ...action.frozen,
        }
      };
    }

    default:
      return state;
  }
}
