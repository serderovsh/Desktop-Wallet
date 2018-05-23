// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { walletReducer } from './wallets';
import { tokensReducer } from './tokens';
import { representativeReducer } from './representatives';


export default combineReducers({
  wallet: walletReducer,
  tokens: tokensReducer,
  representatives: representativeReducer,
  router,
});

