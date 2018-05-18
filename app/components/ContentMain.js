import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContentMain.css';

import WalletList from './Wallet/WalletList.js';
import WalletView from './ContentSecondary/WalletView/WalletView.js';

export default class ContentMain extends Component {

  render() {
    return (
      <div className={styles.container}>
        <WalletList />
        <div className={ styles.contentSecondary }>
            <WalletView />
        </div>
      </div>
    );
  }
}
