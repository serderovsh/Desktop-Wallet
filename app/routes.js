/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';

import WalletList from './components/Wallet/';
import VoteList from './components/Vote/';
import TokenList from './components/Tokens/';
import ContactList from './components/Contact/';
import SettingList from './components/Settings/';
import Send from './components/Wallet/Send/';
import Receive from './components/Wallet/Receive/';
import Create from './components/Wallet/Create/';
import Import from './components/Wallet/Import/';
import WalletView from './components/Wallet/WalletView/';
import Share from './components/Settings/Share';

export const routes = [
  {
    path: "/wallets",
    sidebar: () => <WalletList />,
    main: () => <WalletView />,
  },
  {
    path: "/import",
    sidebar: () => <WalletList />,
    main: () => <Import />,
  },
  {
    path: "/create",
    sidebar: () => <WalletList />,
    main: () => <Create />,
  },
  {
    path: "/send",
    sidebar: () => <WalletList />,
    main: () => <Send />,
  },
  {
    path: "/receive",
    sidebar: () => <WalletList />,
    main: () => <Receive />,
  },
  {
    path: "/settings",
    sidebar: () => <SettingList />,
    main: () => <Share />,
  },
  {
    path: "/vote",
    sidebar: () => <VoteList />,
  },
  {
    path: "/tokens",
    sidebar: () => <TokenList />,
    main: () => <WalletView />,
  },
  {
    path: "/contact",
    sidebar: () => <ContactList />,
  },
];
