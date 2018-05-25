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
import WalletView from './components/Wallet/WalletView/';
import WalletBackup from './components/Wallet/Backup/';
import Share from './components/Settings/Share';
import ContactDetails from './components/Contact/ContactDetails';
import VoteDetails from './components/Vote/VoteDetails';
import Support from './components/Settings/Support';
import AddressBook from './components/Settings/AddressBook';
import Language from './components/Settings/Language';
import Notifications from './components/Settings/Notifications';
import CreateToken from './components/Tokens/CreateToken';

export const routes = [
  {
    path: "/wallets/",
    sidebar: () => <WalletList />,
  },
  {
    path: "/wallets/walletDetails/",
    main: () => <WalletView />
  },
  {
    path: "/wallets/walletBackup/",
    main: () => <WalletBackup />
  },
  {
    path: "/wallets/create",
    main: () => <Create />,
  },
  {
    path: "/wallets/send",
    main: () => <Send />,
  },
  {
    path: "/wallets/receive",
    main: () => <Receive />,
  },
  {
    path: "/settings/",
    sidebar: () => <SettingList />,
  },
  {
    path: "/settings/addressbook",
    main: () => <AddressBook />,
  },
  {
    path: "/settings/help",
    main: () => <Support />,
  },
  {
    path: "/settings/share",
    main: () => <Share />,
  },
  {
    path: "/settings/notifications",
    main: () => <Notifications />,
  },
  {
    path: "/settings/language",
    main: () => <Language />
  },
  {
    path: "/vote",
    sidebar: () => <VoteList />,
    main: () => <VoteDetails />
  },
  {
    path: "/tokens",
    sidebar: () => <TokenList />,
  },
  {
    path: "/tokens/createtoken",
    main: () => <CreateToken />,
  },
  {
    path: "/contact",
    sidebar: () => <ContactList />,
    main: () => <ContactDetails />
  },
];
