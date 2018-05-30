import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Transaction.css';

import { TopRightArrow } from '../../Icons';
import { updateTransactions } from "../../../actions/wallet";
import { connect } from "react-redux";

const enums = {
  Received: 0,
  Sent: 1,

  0: 'Received',
  1: 'Sent'
};

class Transaction extends Component {

  formattedDate() {
    const date = new Date(this.props.date);
    return date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  txAmount() {
    if (this.props.type === enums.Received) {
      return <div className={`${styles.txAmount} ${styles.green}`}>+ {(this.props.amount / 1000000).toFixed(8)} {this.props.asset}</div>;
    } else {
      return <div className={`${styles.txAmount} ${styles.red}`}>- {(this.props.amount / 1000000).toFixed(8)} {this.props.asset}</div>;
    }
  }

  render() {
    let accountId = this.props.match.params.account;
    let transactions = this.props.wallet.persistent.accounts[accountId].transactions;

    return (
      <NavLink to={"/wallets/transactionDetails/" +  accountId + "/" + this.props.txID + "/"} className={styles.tx}>
        <div className={styles.txType}>
          <TopRightArrow className={this.props.type === enums.Received ? styles.iconReceived : styles.iconSent} />
          <div>{enums[this.props.type]}</div>
        </div>
        <div className={styles.txInfo}>
          {this.txAmount()}
          <div className={styles.txDate}>{this.formattedDate()}</div>
        </div>
      </NavLink>
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
)(Transaction));
