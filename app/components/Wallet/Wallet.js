// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Wallet.css';

import { WalletIcon, ArrowRightIcon } from '../Icons';

class Wallet extends Component {


  render() {
    return (
      <NavLink to={"/wallets/walletDetails/" + this.props.index} className={styles.wallet} activeClassName={styles.active}>
        <WalletIcon className={styles.walletIcon} />
        <ul className={styles.walletInfo}>
          <li className={styles.name}>{ this.props.name }</li>
            <li> { this.props.trx} TRX</li>
          {
            this.props.tokens.map((token, i) =>
              <li key={i}>{ token.amount } { token.name }</li>
            )
          }
        </ul>
        <ArrowRightIcon className={styles.arrowIcon} />
      </NavLink>
    );
  }
}

export default Wallet;
