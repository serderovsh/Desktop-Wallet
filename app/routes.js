/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import WalletList from './components/Wallet/WalletList';
import VoteList from './components/Vote/VoteList';
import TokenList from './components/Tokens/TokenList';
import ContactList from './components/Contact/ContactList';
import SettingList from './components/Settings/SettingList';

export default () => (
  <App>
    <Switch>
      <Route path="/settings" component={SettingList} />
      <Route path="/contact" component={ContactList} />
      <Route path="/tokens" component={TokenList} />
      <Route path="/vote" component={VoteList} />
      <Route path="/" component={WalletList} />
    </Switch>
  </App>
);
