import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './WalletList.css';

import { Button } from 'semantic-ui-react';
import buttonStyles from '../Button.css';

import Header from '../ContentPrimaryHeader';

import Wallet from './Wallet';

import { Dropdown } from 'semantic-ui-react'
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

const wallets = [
  { name: 'Personal Wallet', tokens: [{ name: 'TRX', amount: '0.48999850'}, { name: 'tkn1', amount: '0.48999850'}, { name: 'tkn2', amount: '0.48999850'}] },
  { name: 'Personal Wallet', tokens: [{ name: 'TRX', amount: '0.48999850'}, { name: 'tkn1', amount: '0.48999850'}, { name: 'tkn2', amount: '0.48999850'}] },
  { name: 'Personal Wallet', tokens: [{ name: 'TRX', amount: '0.48999850'}, { name: 'tkn1', amount: '0.48999850'}, { name: 'tkn2', amount: '0.48999850'}] },
  { name: 'Personal Wallet', tokens: [{ name: 'TRX', amount: '0.48999850'}, { name: 'tkn1', amount: '0.48999850'}, { name: 'tkn2', amount: '0.48999850'}] },
  { name: 'Personal Wallet', tokens: [{ name: 'TRX', amount: '0.48999850'}, { name: 'tkn1', amount: '0.48999850'}, { name: 'tkn2', amount: '0.48999850'}] },
  { name: 'Personal Wallet', tokens: [{ name: 'TRX', amount: '0.48999850'}, { name: 'tkn2', amount: '0.48999850'}] },
  { name: 'Personal Wallet', tokens: [{ name: 'TRX', amount: '0.48999850'}, { name: 'tkn1', amount: '0.48999850'}, { name: 'tkn2', amount: '0.48999850'}, { name: 'tkn3', amount: '0.48999850'}, { name: 'tkn4', amount: '0.48999850'}] }
];

export default class WalletList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header text="MY WALLETS :">
          <Dropdown icon={<MoreIcon />}>
            <Dropdown.Menu>
              <Dropdown.Item text='New Wallet' icon={<WalletIcon />}/>
              <Dropdown.Divider />
              <Dropdown.Item text='Import Wallet' icon={<DownloadIcon />}/>
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <div className={styles.buttonContainer}>
          <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Wallet</Button>
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
