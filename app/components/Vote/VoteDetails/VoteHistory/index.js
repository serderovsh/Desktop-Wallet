import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./VoteList.css";
import Vote from "./Vote";

//const TronHttpClient = require("tron-http-client");
//import {participationToTokens} from "../../../utils/currency";

//const client = new TronHttpClient();

export default class voteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: "",
      voteHistory: [
        { '_id': '36346agd3b6364', url: 'http://google.com/', amount: 58896, date: Date.now() },
        { '_id': '36346agd363z64', url: 'http://yahoo.com/', amount: 2, date: Date.now() },
        { '_id': '36346agd3c6364', url: 'http://tron.com/', amount: 11113, date: Date.now() },
        { '_id': '3n6346agd36364', url: 'http://twitter.com/', amount: 425, date: Date.now() },
      ]
    };
  }

  render() {
    return (
      <div className={styles.voteList}>
        {this.state.voteHistory.map((vote, i) => (
          <Vote
            key={vote._id}
            txID={vote._id}
            url={vote.url}
            amount={vote.amount}
            date={vote.date}
          />
        ))}
      </div>
    );
  }
}
/*
export default withRouter(
  connect(
    state => ({ wallet: state.wallet }),
    dispatch => ({
      updateTransactions: address => {
        updateTransferTransactions(address, dispatch);
      }
    })
  )(TxList)
);
*/