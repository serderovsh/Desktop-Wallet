import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SubHeader.css';

const trx = '534543.49958443';

const coins = [
  { amount: '0.98654110', type: 'TRX' },
  { amount: '586.21585253', type: 'Tkn1' },
  { amount: '0.28895632', type: 'Tkn2' },
  { amount: '0.98654110', type: 'Tkn1' },
  { amount: '586.21585253', type: 'Tkn1' },
  { amount: '0.28895632', type: 'Tkn2' },
  { amount: '0.98654110', type: 'Tkn2' },
  { amount: '586.21585253', type: 'Tkn1' },
  { amount: '0.28895632', type: 'Tkn2' },
]

export default class SubHeader extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.mainAmount}>{ trx } <span>TRX</span></div>
        <div className={styles.scroll}>
          <div className={styles.container}>
            {
              coins.map((coin, i) => 
                <div key={i} className={styles.coinContainer}>
                  <div className={styles.coinAmount}>{coin.amount}</div>
                  <div className={styles.coinType}>{coin.type}</div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
