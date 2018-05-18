import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Transaction.css';

import { TopRightArrow } from '../../Icons.js';

const enums = {
    "Received": 0,
    "Sent": 1,

    "0": "Received",
    "1": "Sent"
};

export default class Transaction extends Component {

  formattedDate() {
      const date = new Date(this.props.date);
      return date.toLocaleDateString("en-us", { year: 'numeric', month: 'long', day: 'numeric' });
  }

  txAmount() {
    if (this.props.type == enums.Received) {
        return <div className={`${styles.txAmount} ${styles.green}`}>+ { this.props.amount } TRX</div>;
    } else {
        return <div className={`${styles.txAmount} ${styles.red}`}>- { this.props.amount } TRX</div>;
    }
  }

  render() {
    return (
      <div className={styles.tx}>
        <div className={styles.txType}>
            <TopRightArrow className={ this.props.type == enums.Received ? styles.iconReceived : styles.iconSent }/>
            <div>{ enums[this.props.type] }</div>
        </div>
        <div className={styles.txInfo}>
            { this.txAmount() }
            <div className={styles.txDate}>{ this.formattedDate() }</div>
        </div>
      </div>
    );
  }
}
