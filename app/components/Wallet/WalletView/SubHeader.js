import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SubHeader.css';

const coins = [
  { amount: '0.98654110', type: 'TRX' },
  { amount: '586.21585253', type: 'Tkn1' },
  { amount: '0.28895632', type: 'Tkn2' }
]

export default class SubHeader extends Component {
  render() {
    return (
        <div className={styles.coinContainer}>
          {
            coins.map((coin, i) => 
              <span key={i} className={styles.coinAmount}>{coin.amount} {coin.type}</span>
            )
          }
        </div>
    );
  }
}
