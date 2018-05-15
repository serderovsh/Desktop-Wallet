export const ADD_CONTACT = 'CONTACTS_0';

// get default state from local storage
export default (state = {
  logos: {
    binance: require('app/assets/images/logos/binance.png')
  },
  contacts: {
    Binance: {
      logo: 'binance', // false, or logo ID from list of logos i.e. 'binance'
      addresses: [
        '27gHpUAzpvzt6gPctGKzWwxcGMy7RNzZQ9W'
      ]
    },
    Coinbase: {
      logo: false,
      addresses: [
        '27gHpUAzpvzt6gPctGKzWwxcGMy7RNzZQ9W'
      ]
    }
  }
}, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          [action.state.contactID]: action.state.contact
        }
      }
    default:
      return state;
  }
}

export function addContact(contactID, contact) {
  return {
    type: ADD_CONTACT,
    state: {
      contactID,
      contact
    }
  }
}
