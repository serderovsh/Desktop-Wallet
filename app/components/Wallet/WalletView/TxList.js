import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TxList.css';

import Transaction from './Transaction.js';
import {updateTransactions} from "../../../actions/wallet";

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const TronHttpClient = require('tron-http-client');
const client = new TronHttpClient();

class TxList extends Component {

    async componentDidMount(){
        let accountId = parseInt(this.props.match.params.account);
        let address = this.props.wallet.persistent.accounts[accountId].publicKey;
        let transactions = await client.getTransactionsRelatedToThis(address);

        let cleanedTransactions = [];
        for(let i =0;i<transactions.length;i++){
            let transaction = transactions[i];

            let newTransaction = {
                amount : transaction.amount,
                date : 1526567116913,
                type : (transaction.owner_address === address) ? 1 : 0,
                asset : (transaction.asset_name) ? transaction.asset_name : "TRX"
            };

            if( transactions[i].contract_desc === "TransferContract" ||
                transactions[i].contract_desc === "ParticipateAssetIssueContract" ||
                transactions[i].contract_desc === "TransferAssetContract"){
                cleanedTransactions.push(newTransaction);
            }
        }

        console.log("cleaned transactions");
        console.log(cleanedTransactions);

        this.props.updateTransactions(accountId, cleanedTransactions);
    }

  render() {
      let accountId = parseInt(this.props.match.params.account);
      let transactions = this.props.wallet.persistent.accounts[accountId].transactions;
      console.log("HERE");
      console.log(transactions);
    return (
      <div className={styles.txList}>
        {
          transactions.map((tx, i) =>
            <Transaction key={i} amount={tx.amount} date={tx.date} type={tx.type} />
          )
        }
      </div>
    );
  }
}

export default withRouter(connect(
    state => ({ wallet: state.wallet }),
    dispatch => ( {
        updateTransactions: (accountId, transactions) => {
            dispatch(updateTransactions(accountId, transactions));
        }
    } )
)(TxList));











