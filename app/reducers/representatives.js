import { SET_REPRESENTATIVES } from '../actions/representatives';

const initialState = {
  representatives: [
    {
      voteTitle: 'https://twitter.com/tronfund/3087340756334730567',
      lastBlock: '65986',
      blocksProduced: '5274',
      blocksMissed: '2400000'
    },
    {
      voteTitle: 'https://twitter.com/tronfund/3087340756334730567',
      lastBlock: '65986',
      blocksProduced: '5274',
      blocksMissed: '2400000'
    },
    {
      voteTitle: 'https://twitter.com/tronfund/3087340756334730567',
      lastBlock: '65986',
      blocksProduced: '5274',
      blocksMissed: '2400000'
    },
    {
      voteTitle: 'https://twitter.com/tronfund/3087340756334730567',
      lastBlock: '65986',
      blocksProduced: '5274',
      blocksMissed: '2400000'
    },
    {
      voteTitle: 'https://twitter.com/tronfund/3087340756334730567',
      lastBlock: '65986',
      blocksProduced: '5274',
      blocksMissed: '2400000'
    }
  ],
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
