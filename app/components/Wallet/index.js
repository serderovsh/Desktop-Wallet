import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './WalletList.css';

import { Button, Dropdown } from 'semantic-ui-react';
import buttonStyles from '../Button.css';

import Header from '../ContentPrimaryHeader';

import Wallet from './Wallet';

import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

const wallets = [
  {
    name: 'Personal Wallet',
    tokens: [ { name: 'TRX', amount: '0.48999850' }, { name: 'tkn1', amount: '0.48999850' }, {
      name: 'tkn2',
      amount: '0.48999850'
    } ]
  },
  {
    name: 'Personal Wallet',
    tokens: [ { name: 'TRX', amount: '0.48999850' }, { name: 'tkn1', amount: '0.48999850' }, {
      name: 'tkn2',
      amount: '0.48999850'
    } ]
  },
  {
    name: 'Personal Wallet',
    tokens: [ { name: 'TRX', amount: '0.48999850' }, { name: 'tkn1', amount: '0.48999850' }, {
      name: 'tkn2',
      amount: '0.48999850'
    } ]
  },
  {
    name: 'Personal Wallet',
    tokens: [ { name: 'TRX', amount: '0.48999850' }, { name: 'tkn1', amount: '0.48999850' }, {
      name: 'tkn2',
      amount: '0.48999850'
    } ]
  },
  {
    name: 'Personal Wallet',
    tokens: [ { name: 'TRX', amount: '0.48999850' }, { name: 'tkn1', amount: '0.48999850' }, {
      name: 'tkn2',
      amount: '0.48999850'
    } ]
  },
  {
    name: 'Personal Wallet',
    tokens: [ { name: 'TRX', amount: '0.48999850' }, { name: 'tkn2', amount: '0.48999850' } ]
  },
  {
    name: 'Personal Wallet',
    tokens: [ { name: 'TRX', amount: '0.48999850' }, { name: 'tkn1', amount: '0.48999850' }, {
      name: 'tkn2',
      amount: '0.48999850'
    }, { name: 'tkn3', amount: '0.48999850' }, { name: 'tkn4', amount: '0.48999850' } ]
  }
];

export default class WalletList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header className={styles.header} text="MY WALLETS :">
          <Dropdown icon={<MoreIcon />}>
            <Dropdown.Menu>
              <NavLink to="/create">
                <Dropdown.Item text='New Wallet' icon={<WalletIcon />} />
              </NavLink>
              <Dropdown.Divider />
              <NavLink to="/import">
                <Dropdown.Item text='Import Wallet' icon={<DownloadIcon />} />
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <div className={styles.buttonContainer}>
          <NavLink to="/create">
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Wallet</Button>
          </NavLink>
        </div>
        <div className={styles.walletContainer}>
          {
            wallets.map((wallet, i) =>
              <Wallet key={i} name={wallet.name} tokens={wallet.tokens} />
            )
          }
        </div>
      </div>
    );
  }
}
