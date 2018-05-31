import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './TxList.css';
import Transaction from './Transaction';
import { updateTransferTransactions} from '../../../actions/wallet';

const TronHttpClient = require('tron-http-client');

const client = new TronHttpClient();

class TxList extends Component {

  render() {
    let accountId = this.props.match.params.account;
    let transactions = this.props.wallet.persistent.accounts[accountId].transactions;
    let filteredTransactions = [];

    let highlightedToken = this.props.match.params.token;
    if (highlightedToken) {
      if (highlightedToken === 'TRX') {
        for (let i = 0; i < transactions.length; i++) {
          let transaction = transactions[i];
          if (transaction.contract_desc === 'TransferContract') {
            filteredTransactions.push(transaction);
          }
        }
      } else {
        for (let i = 0; i < transactions.length; i++) {
          let transaction = transactions[i];
          if ((transaction.contract_desc === 'ParticipateAssetIssueContract' ||
            transaction.contract_desc === 'TransferAssetContract') &&
            transaction.asset === highlightedToken) {
            filteredTransactions.push(transaction);
          }
        }
      }
    } else {
      filteredTransactions = transactions;
    }

    return (
      <div className={styles.txList}>
        {
          filteredTransactions.map((tx, i) =>
            <Transaction
              key={i}
              txID={tx._id}
              amount={tx.amount}
              date={tx.date}
              type={tx.type}
              asset={tx.asset}
              contract_desc={tx.contract_desc}
            />)
        }
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({ wallet: state.wallet }),
  dispatch => ({
    updateTransactions: (address) => {
        updateTransferTransactions(address, dispatch);
    }
  })
)(TxList));
