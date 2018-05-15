export const ADD_WALLET = 'WALLETS_0';

// get default state from local storage
export default (state = {
  walletData: {
    someWalletID: {
      name: 'Family Wallet',
      balances: {
        TRX: 534.5041,
        TRXG: 63.04,
        TRH: 43025.313
      },
      transactions: [
        {
          transactionID: 'someTransactionID',
          direction: 'in',
          amount: 63.04,
          token: 'TRXG',
          timestamp: 4680052822208,
          fee: 12.6,
          partner: {
            contact: 'Binance',
            address: '27gHpUAzpvzt6gPctGKzWwxcGMy7RNzZQ9W' // keep address in case contact is deleted / modified
          }
        },
        {
          transactionID: 'someOtherTransactionID',
          direction: 'out',
          amount: 42.6043,
          token: 'TRX',
          timestamp: 1525856731867,
          fee: 1.02,
          partner: {
            contact: false,
            address: '27gHpUAzpvzt6gPctGKzWwxcGMy7RNzZQ9W'
          }
        },
        {
          transactionID: 'coinbaseTransaction',
          direction: 'out',
          amount: 17.5014,
          token: 'TRX',
          timestamp: 1526161092000,
          fee: 5.14,
          partner: {
            contact: 'Coinbase',
            address: '27gHpUAzpvzt6gPctGKzWwxcGMy7RNzZQ9W'
          }
        }
      ],
      privateKey: '',
      publicKey: ''
    }
  }
}, action) => {
  switch(action.type) {
    case ADD_WALLET:
      return {
        ...state,
        walletData: {
          ...state.walletData,
          [action.state.walletID]: action.state.wallet
        }
      }
    default:
      return state;
  }
}

export function addWallet(walletID, wallet) {
  return {
    type: ADD_WALLET,
    state: {
      walletID,
      wallet
    }
  }
}
