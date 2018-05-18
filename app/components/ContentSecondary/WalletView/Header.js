import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

import { MoreIcon, CalendarIcon } from '../../Icons.js';

const coins = [
  { amount: '0.98654110', type: 'TRX' },
  { amount: '586.21585253', type: 'Tkn1' },
  { amount: '0.28895632', type: 'Tkn2' }
]

export default class Header extends Component {
  render() {
    return (
      <div className={styles.viewHeader}>
        <div className={styles.walletName}>{ this.props.walletName }</div>
        <MoreIcon />
        <div className={styles.coinContainer}>
          {
            coins.map((coin, i) => 
              <span key={i} className={styles.coinAmount}>{coin.amount} {coin.type}</span>
            )
          }
        </div>
      </div>
    );
  }
}
