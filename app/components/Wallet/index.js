import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown } from 'semantic-ui-react';
import styles from './WalletList.css';

import buttonStyles from '../Button.css';

import Header from '../ContentPrimaryHeader';

import Wallet from './Wallet';

import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

const wallets = [
  {
    name: 'Personal Wallet',
    tokens: [{ name: 'TRX', amount: '480 980.00' }, { name: 'tkn1', amount: '452.00' }, {
      name: 'tkn2',
      amount: '7 879.00'
    }]
  },
];

export default class WalletList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header className={styles.header} text="MY WALLETS :">
          <Dropdown icon={<MoreIcon />}>
            <Dropdown.Menu>
              <NavLink to="/wallets/create">
                <Dropdown.Item text='New Wallet' icon={<WalletIcon />} />
              </NavLink>
              <Dropdown.Divider />
              <NavLink to="/wallets/import">
                <Dropdown.Item text='Import Wallet' icon={<DownloadIcon />} />
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <div className={styles.buttonContainer}>
          <NavLink to="/wallets/create">
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Wallet</Button>
          </NavLink>
        </div>
          <div className={styles.walletContainer}>
            <NavLink to="/wallets/walletDetails">
            {
              wallets.map((wallet, i) =>
                <Wallet key={i} name={wallet.name} tokens={wallet.tokens} />)
            }
            </NavLink>
          </div>

      </div>
    );
  }
}
