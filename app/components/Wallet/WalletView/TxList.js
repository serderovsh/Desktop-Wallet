import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TxList.css';

import Transaction from './Transaction.js';

const txs = [
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 },
  { amount: '0.58976825', date: 1526567116913, type: 1 },
  { amount: '4385.00538000', date: 1526567116913, type: 0 }
];

export default class TxList extends Component {

  render() {
    return (
      <div className={styles.txList}>
        {
          txs.map((tx, i) =>
            <Transaction key={i} amount={tx.amount} date={tx.date} type={tx.type} />
          )
        }
      </div>
    );
  }
}
