import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {sortBy, isNaN} from "lodash";
import Secondary from "../../Content/Secondary";
import Header from "../../Header";
import { Dropdown, Button, Table, Input } from "semantic-ui-react";
import { ArrowRightIcon } from "../../Icons";
import { loadWitnesses } from "../../../actions/witnesses";
import { PopupModal } from "../../Content/PopupModal";
import { Truncate } from "../../Content/Text";
import buttonStyles from "../../Button.css";

import styles from "./style.css";

const TronHttpClient = require("tron-http-client");

class VoteMultiple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: {},
      witnesses: this.props.witnesses.witnesses,
      wallets: [],
      selectedWallet: {
        text: "Select a Wallet",
        value: "",
        frozenBalance: 0,
        lastVotes: {}
      },
      sendProperties: {},
    };
  }
  setVote = (address, numberOfVotes) => {
    let {votes} = this.state;

    if (numberOfVotes !== "") {
      numberOfVotes = parseInt(numberOfVotes);
      numberOfVotes = isNaN(numberOfVotes) ? "" : numberOfVotes;

      if (numberOfVotes < 0) {
        numberOfVotes = 0;
      }
    }
    votes[address] = numberOfVotes;
    this.setState({
      votes,
    });
  };

  componentDidMount() {
    this.props.loadWitnesses();
  }

  async clickSubmit() {
    let address = this.state.witnesses.address;
    let count = parseInt(this.state.count);
    this.setState({
      ...this.state,
      sendProperties: {
        address: this.state.witnesses.address,
        count: parseInt(this.state.count)
      },
      showConfirmModal: true,
      modalConfirmText: `You are about to submit your votes do you confirm ?`
    });
  }

  updateCurrentAccountTransactions(account){
    let votes = {};
    for(let t in account.transactions){
      let transaction = account.transactions[t];
      if(transaction.contract_desc === 'VoteWitnessContract'){
        for(let v in transaction.votes){
          let vote = transaction.votes[v];
          votes[vote.vote_address] = parseInt(vote.vote_count);
        }
        break;
      }
    }

    this.setState({
      votes
    });
    return account;
  }

  selectWallet = (e, { value }) => {
    let accounts = this.props.wallet.persistent.accounts;
    let wallet = Object.keys(accounts).filter(
      wallet => accounts[wallet].publicKey === value
    );
    let account = this.updateCurrentAccountTransactions(accounts[wallet[0]]);
    this.setState({ selectedWallet: account });
  };

  async modalConfirm() {
    let { votes } = this.state;
    let witVotes = [];

    for (let address of Object.keys(votes)) {
      let count = parseInt(votes[address]);
      if(count > 0){
        witVotes.push({
          address : address,
          count : count
        });
      }
    }
    console.log(witVotes)
    let client = new TronHttpClient();
    let response = await client.vote(this.state.selectedWallet.privateKey, witVotes)
      .catch(x => null);

    if (response === null) {
      this.setState({
        ...this.state,
        showConfirmModal: false,
        showFailureModal: true,
        modalFailureText: "Voting failed"
      });
    } else if (response.result !== true) {
      this.setState({
        ...this.state,
        showConfirmModal: false,
        showFailureModal: true,
        modalFailureText: "Voting failed: " + response.message
      });
    } else {
      this.setState({
        ...this.state,
        showConfirmModal: false,
        showSuccessModal: true,
        modalSuccessText: "Vote Successful!"
      });
    }
    console.log(response);
  }

  modalDecline() {
    this.setState({
      ...this.state,
      sendProperties: {},
      showConfirmModal: false
    });
  }

  modalFailureClose() {
    this.setState({
      ...this.state,
      showFailureModal: false
    });
  }

  modalSuccessClose() {
    this.props.history.push(
      "/wallets/walletDetails/" + this.state.accountAddress
    );
    this.setState({
      ...this.state,
      showSuccessModal: false
    });
  }

  modalClose() {
    this.state.showConfirmModal = false;
  }

  getVotesFor(witnessAddress){
    if(this.state.selectedWallet.lastVotes[witnessAddress])
      return this.state.selectedWallet.lastVotes[witnessAddress];
  }

  resetVotes = () => {
    this.setState({
      votes: {},
    });
  };

  render() {
    let { selectedWallet, votes, witnesses } = this.state;

    let accountId = this.props.match.params.account;
    let accounts = this.props.wallet.persistent.accounts;
    let wallets = [];
    Object.keys(accounts).forEach((wallet, i) => {
      let formattedObj = {
        text: accounts[wallet].name,
        value: accounts[wallet].publicKey
      };
      wallets.push(formattedObj);
    });

    witnesses = sortBy(witnesses, w => w.votecount * -1).map((w, index) => ({
      ...w,
      rank: index,
    }));

    return (
      <Secondary className={styles.container}>
        <div className={styles.headerContainer}>
          <Header headerName="Place your vote" />
          <div className={styles.headerTP}>
            {selectedWallet.frozenBalance}
            <span>TP</span>
          </div>
          <div className={styles.headerText}>
            Earn More TronPower by freezing Tron
          </div>
          <div className={styles.headerSubText}>
            You can do this by clicking on "Freeze TRX" after selecting a wallet.
          </div>
        </div>
        <div className={styles.voteContainer}>
          <div className={styles.dropdown}>
            <ArrowRightIcon />
            <Dropdown
              fluid
              selection
              onChange={this.selectWallet}
              placeholder="Choose Wallet"
              options={wallets}
            />
          </div>

          <div className={styles.voteTable}>
            <div className={styles.voteHeader}>
              <div className={styles.voteCol1}>#</div>
              <div className={styles.voteCol2}>Name</div>
              <div className={styles.voteCol3}>Current Votes</div>
              <div className={styles.voteCol4}>Your Votes</div>
            </div>
            <div className={styles.voteBody}>
              {
                witnesses.map(rep => (
                  <div className={styles.voteRow} key={rep.address}>
                    <div className={styles.voteCol1}>{rep.rank + 1}-</div>
                    <div className={styles.voteCol2}>
                      <div className={styles.voteName}>{rep.url}</div>
                      <div className={styles.voteAddress}>{rep.address}</div>
                    </div>
                    <div className={styles.voteCol3}>{rep.votecount.toLocaleString()}</div>
                    <div className={styles.voteCol4}>
                      <Input
                        type="text"
                        className={styles.voteInput}
                        value={votes[rep.address] || ""}
                        onChange={(event) => this.setVote(rep.address, event.target.value)}
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <Button
              onClick={this.resetVotes.bind(this)}
              className={`${buttonStyles.button} ${buttonStyles.black}`}
            >
              Reset
            </Button>
            <Button
              onClick={this.clickSubmit.bind(this)}
              className={`${buttonStyles.button} ${buttonStyles.gradient}`}
            >
              Submit
            </Button>
          </div>
          {/*
          <Table celled singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell style={{width: 10}}>#</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell style={{width: 25}}>Current Votes</Table.HeaderCell>
                <Table.HeaderCell style={{width: 65}}>Your Votes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                witnesses.map(rep => (
                  <Table.Row key={rep.address}>
                    <Table.Cell>
                      {rep.rank + 1}
                    </Table.Cell>
                    <Table.Cell>
                      <div>
                        {rep.ownerAccount.account_name || rep.url}
                      </div>
                      <span>{rep.address}</span>
                    </Table.Cell>
                    <Table.Cell>
                      {rep.votecount}
                    </Table.Cell>
                    <Table.Cell className={styles.input}>
                      <input
                        type="text"
                        value={votes[rep.address] || ""}
                        onChange={(event) => this.setVote(rep.address, event.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table>
          */ }

        </div>
        <PopupModal
          confirmation
          modalVis={this.state.showConfirmModal}
          modalText={this.state.modalConfirmText}
          closeModalFunction={this.modalClose.bind(this)}
          modalConfirm={this.modalConfirm.bind(this)}
          modalDecline={this.modalDecline.bind(this)}
        />
        <PopupModal
          failure
          modalVis={this.state.showFailureModal}
          modalText={this.state.modalFailureText}
          closeModalFunction={this.modalFailureClose.bind(this)}
          modalConfirm={this.modalFailureClose.bind(this)}
        />
        <PopupModal
          success
          modalVis={this.state.showSuccessModal}
          modalText={this.state.modalSuccessText}
          closeModalFunction={this.modalSuccessClose.bind(this)}
          modalConfirm={this.modalSuccessClose.bind(this)}
        />
      </Secondary>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      wallet: state.wallet,
      witnesses: state.witnesses,
    }),
    dispatch => ({
      loadWitnesses: props => {
        dispatch(loadWitnesses(props));
      },
    })
  )(VoteMultiple)
);
