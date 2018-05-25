import { SEARCH, SET_PRICE } from '../actions/app';

const initialState = {
  price: {
    usd: 0,
    percentage: 0,
  },
  searchString: '',
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRICE: {
      return {
        ...state,
        price: {
          usd: action.price,
          percentage: action.percentage,
        }
      };
    }

    case SEARCH: {
      return {
        ...state,
        searchString: action.searchString
      };
    }

    default:
      return state;
  }
}
