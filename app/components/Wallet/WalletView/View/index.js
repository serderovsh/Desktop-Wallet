import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FormattedDate, FormattedNumber, FormattedTime } from 'react-intl';
import { connect } from 'react-redux';
import styles from './ViewTransaction.css';
import DarkMainModal from '../../../Content/DarkMainModal';
import { TopRightArrow, WalletIcon } from '../../../Icons';
import { updateTransactions } from '../../../../actions/wallet';


class ViewTransaction extends Component {
  render() {
    let accountId = this.props.match.params.account;
    let txID = this.props.match.params.txid;
    let transactions = this.props.wallet.persistent.accounts[accountId].transactions;

    let tx = transactions.find((tx) => tx._id === txID);

    return (
      <DarkMainModal className={styles.container}>
        <div className={`${styles.subContainer} ${this.props.className}`}>
          <div className={styles.headerBG}>
            <TopRightArrow className={tx.type === 0 ? styles.headerIcon : `${styles.headerIcon} ${styles.rotate}`} />
            <div className={styles.headerType}>{ tx.type === 0 ? 'Sent' : 'Received'} :</div>
            <div className={styles.headerAmount}> <FormattedNumber value={tx.amount / 1000000} /> { tx.asset }</div>
            <div className={styles.headerCurrency}>00,000.00 USD</div>
          </div>
          <div className={styles.tokenInfoContainer}>
           <div className={styles.tokenHeader}>Fee :</div>
           <div className={styles.feeContainer}>
             <div className={styles.feeAmount}><FormattedNumber value={/*tx.fee*/(0 / 100000000).toFixed(8)} /> TRX</div>
             <div className={styles.feePercentage}><FormattedNumber value={ /*(tx.fee / tx.amount * 100).toFixed(2)*/0.08 } />%</div>
           </div>
            <div className={styles.feeAmount}>00,000.00 USD</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>{ tx.type === 0 ? 'Sent to' : 'Received From'} :</div>
            <div className={styles.tokenHeaderText}>{ tx.owner_address }</div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>{ tx.type === 0 ? 'Sent From' : 'Received in'} :</div>
            <div className={styles.walletContainer}>
              <WalletIcon className={styles.walletIcon} />
              <div>{ this.props.wallet.persistent.accounts[accountId].name }</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.tokenHeader}>Date :</div>
            <div className={styles.tokenHeaderText}><FormattedDate value={tx.date} /> <FormattedTime value={tx.date} /></div>
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
