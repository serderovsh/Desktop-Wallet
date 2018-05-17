// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Wallet.css';

//import WalletIcon from 'react-icons/lib/md/account-balance-wallet';
//import ArrowIcon from 'react-icons/lib/md/keyboard-arrow-right';

import { WalletIcon, ArrowRightIcon } from '../Icons.js';


type Props = {
  name: string,
  trx: string,
  tkn1: string,
  tkn2: string
};

export default class Wallet extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.wallet}>
        <WalletIcon className={styles.walletIcon} />
        <ul className={styles.walletInfo}>
          <li className={styles.name}>{ this.props.name }</li>
          <li>{ this.props.trx } TRX</li>
          <li>{ this.props.tkn1 } Tkn1</li>
          <li>{ this.props.tkn2 } Tkn2</li>
        </ul>
        <ArrowRightIcon className={styles.arrowIcon} />
      </div>
    );
  }
}
