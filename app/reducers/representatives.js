export const ADD_REPRESENTATIVE = 'REP_0';

// get default state from local storage
export default (state = {
  repData: {
    someRepID: {
      position: 1,
      name: 'http://url1.com',
      rep_info: [
        {
          last_block: 36444,
          blocks_produced: 2809,
          blocks_missed: 6,
          votes: 803003243,
        }
      ]
    },
    someRepID2: {
      position: 2,
      name: 'http://url2.com',
      rep_info: [
        {
          last_block: 36444,
          blocks_produced: 2809,
          blocks_missed: 6,
          votes: 803003243,
        }
      ]
    },
  }
}, action) => {
  switch(action.type) {
    case ADD_REPRESENTATIVE:
      return {
        ...state,
        repData: {
          ...state.repData,
          [action.state.repID]: action.state.representative
        }
      };
    default:
      return state;
  }
};

export function addRepresentative(repID, representative) {
  return {
    type: ADD_REPRESENTATIVE,
    state: {
      repID,
      representative
    }
  };
}
