// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { walletReducer } from './wallets';


export default combineReducers({
  wallet: walletReducer,
  router,
});

