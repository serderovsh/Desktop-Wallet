// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Wallet.css';

import { WalletIcon, ArrowRightIcon } from '../Icons';

class Wallet extends Component {


  render() {
      let keys = Object.keys(this.props.tokens);
      console.log(this.props.tokens);
    return (
      <NavLink to={"/wallets/walletDetails/" + this.props.index} className={styles.wallet} activeClassName={styles.active}>
        <WalletIcon className={styles.walletIcon} />
        <ul className={styles.walletInfo}>
          <li className={styles.name}>{ this.props.name }</li>
            <li> { this.props.trx} TRX</li>
          {
            keys.map((k, i) =>
              <li key={k}>{ this.props.tokens[k].amount } { k }</li>
            )
          }
        </ul>
        <ArrowRightIcon className={styles.arrowIcon} />
      </NavLink>
    );
  }
}

export default Wallet;
