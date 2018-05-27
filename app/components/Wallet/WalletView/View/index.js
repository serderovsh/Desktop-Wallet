import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ViewTransaction.css';

import DarkMainModal from '../../../Content/DarkMainModal';
import { TopRightArrow } from '../../../Icons';

export default class ViewTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: {
        // type is enum, sent is 0, receive is 1
        type: 0,
        amount: '5482.54434660',
        fee: '2.58971123',
        currency: 'TRX',
        otherParty: '27bPtyJH26gKgLzhGCGuzmvmNJWGVgPkCAN',
        wallet: 'Personal Wallet',
        date: Date.now(),
      }
    }
  }

  render() {
    let { tx } = this.state;
    return (
      <DarkMainModal className={styles.container}>
        <div className={`${styles.subContainer} ${this.props.className}`}>
          <div className={styles.headerBG}>
            <TopRightArrow className={styles.headerIcon}/>
            <div className={styles.headerType}>{ tx.type === 0 ? 'Sent' : 'Received'} :</div>
            <div className={styles.headerAmount}>{ tx.amount } { tx.currency }</div>
            <div className={styles.headerCurrency}>00,000.00 USD</div>
          </div>
          <div className={styles.tokenInfoContainer}>
            <div className={styles.tokenHeader}>Fee :</div>
            <div className={styles.feeContainer}>
              <div className={styles.tokenHeaderText}>{ tx.fee }</div>
              <div className={styles.feePercentage}>00,000.00 USD</div>
            </div>
            <div className={styles.tokenHeaderText}>00,000.00 USD</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>Sent to :</div>
            <div className={styles.tokenHeaderText}>{ transaction.totalSupply.toLocaleString() }</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>Sent From :</div>
            <div className={styles.tokenHeaderText}>{ transaction.issuer }</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>Start Date :</div>
            <div className={styles.tokenHeaderText}>{ new Date(transaction.date).toLocaleString() }</div>
          </div>
        </div>
      </DarkMainModal>
    );
  }
}
