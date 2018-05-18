import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './WalletView.css';

import Header from './Header.js';
import TxList from './TxList.js';

export default class WalletView extends Component {

  render() {
    return (
      <div className={styles.walletView}>
        <Header walletName="Personal Wallet" />
        <TxList />
      </div>
    );
  }
}
