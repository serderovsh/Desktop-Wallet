import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ViewTransaction.css';

import DarkMainModal from '../../../Content/DarkMainModal';
import { TopRightArrow, WalletIcon } from '../../../Icons';

export default class ViewTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tx: {
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
            <TopRightArrow className={ tx.type == 0 ? styles.headerIcon : `${styles.headerIcon} ${styles.rotate}`}/>
            <div className={styles.headerType}>{ tx.type === 0 ? 'Sent' : 'Received'} :</div>
            <div className={styles.headerAmount}>{ tx.amount } { tx.currency }</div>
            <div className={styles.headerCurrency}>00,000.00 USD</div>
          </div>
          <div className={styles.tokenInfoContainer}>
            <div className={styles.tokenHeader}>Fee :</div>
            <div className={styles.feeContainer}>
              <div className={styles.feeAmount}>{ tx.fee } TRX</div>
              <div className={styles.feePercentage}>{ (tx.fee / tx.amount * 100).toFixed(2) }%</div>
            </div>
            <div className={styles.feeAmount}>00,000.00 USD</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>{ tx.type === 0 ? 'Sent to' : 'Received From'} :</div>
            <div className={styles.tokenHeaderText}>{ tx.otherParty }</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>{ tx.type === 0 ? 'Sent From' : 'Received in'} :</div>
            <div className={styles.walletContainer}>
              <WalletIcon className={styles.walletIcon}/>
              <div>{ tx.wallet }</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>Date :</div>
            <div className={styles.tokenHeaderText}>{ new Date(tx.date).toLocaleString() }</div>
          </div>
        </div>
      </DarkMainModal>
    );
  }
}
