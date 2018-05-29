import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './ViewTransaction.css';
import { connect } from 'react-redux';

import DarkMainModal from '../../../Content/DarkMainModal';
import { TopRightArrow, WalletIcon } from '../../../Icons';
import { updateTransactions } from '../../../../actions/wallet';


class ViewTransaction extends Component {
  render() {
    let accountId = parseInt(this.props.match.params.account);
    let transactions = this.props.wallet.persistent.accounts[accountId];

    return (
      <DarkMainModal className={styles.container}>
        <div className={`${styles.subContainer} ${this.props.className}`}>
          <div className={styles.headerBG}>
            <TopRightArrow className={transactions.type === 0 ? styles.headerIcon : `${styles.headerIcon} ${styles.rotate}`} />
            <div className={styles.headerType}>{ transactions.type === 0 ? 'Sent' : 'Received'} :</div>
            <div className={styles.headerAmount}>{ transactions.amount } { transactions.currency }</div>
            <div className={styles.headerCurrency}>00,000.00 USD</div>
          </div>
          <div className={styles.tokenInfoContainer}>
            <div className={styles.feeAmount}>00,000.00 USD</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>{ transactions.type === 0 ? 'Sent to' : 'Received From'} :</div>
            <div className={styles.tokenHeaderText}>{ transactions.owner_address }</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>{ transactions.type === 0 ? 'Sent From' : 'Received in'} :</div>
            <div className={styles.walletContainer}>
              <WalletIcon className={styles.walletIcon} />
              <div>{ transactions.to_address }</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>Date :</div>
            <div className={styles.tokenHeaderText}>{transactions.date}</div>
          </div>
        </div>
      </DarkMainModal>
    );
  }
}

export default withRouter(connect(
  state => ({ wallet: state.wallet }),
  dispatch => ({
    updateTransactions: (accountId, transactions) => {
      dispatch(updateTransactions(accountId, transactions));
    }
  })
)(ViewTransaction));
