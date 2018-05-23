import { SET_REPRESENTATIVES } from '../actions/representatives';

const initialState = {
  representatives: [],
};

export function representativeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REPRESENTATIVES: {
      return {
        ...state,
        representatives: action.representatives,
      };
    }
    default:
      return state;
  }
}
