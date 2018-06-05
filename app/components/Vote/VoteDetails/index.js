import React, { Component } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./VoteDetails.css";
import buttonStyles from "../../Button.css";
import { loadWitnesses } from "../../../actions/witnesses";
import Secondary from "../../Content/Secondary";
import Header from "../../Header";
import VoteAmountSlider from "./VoteAmountSlider";
import { ArrowRightIcon } from "../../Icons";
import { PopupModal } from "../../Content/PopupModal";

import VoteHistory from './VoteHistory';

const TronHttpClient = require("tron-http-client");

class VoteDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rep: {},
      wallets: [],
      current: 0,
      selectedWallet: {
        text: "Select a Wallet",
        value: "",
        frozenBalance: 0
      },

      sendProperties: {}
    };
  }

  componentDidMount() {
    this.props.loadWitnesses();
  }

  async clickSubmit() {
    let address = this.state.rep.address;
    let count = parseInt(this.state.current);
    this.setState({
      ...this.state,
      sendProperties: {
        address: this.state.rep.address,
        count: parseInt(this.state.current)
      },
      showConfirmModal: true,
      modalConfirmText: `Submit ${count} Votes for ${
        this.state.rep.url
      } (${address} ?`
    });
  }

  selectWallet = (e, { value }) => {
    let accounts = this.props.wallet.persistent.accounts;
    let wallet = Object.keys(accounts).filter(
      wallet => accounts[wallet].publicKey === value
    );
    this.setState({ selectedWallet: accounts[wallet[0]] });
  };

  onSliderChange(amount) {
    this.state.current = amount;
    console.log(`amount: ${amount}`);
  }

  async modalConfirm() {
    let votes = [
      {
        address: this.state.rep.address,
        count: parseInt(this.state.current)
      }
    ];
    let client = new TronHttpClient();
    let response = await client
      .vote(this.state.selectedWallet.privateKey, votes)
      .catch(x => null);

    if (response === null) {
      this.setState({
        ...this.state,
        sendProperties: {},
        showConfirmModal: false,
        showFailureModal: true,
        modalFailureText: "Voting failed"
      });
    } else if (response.result != true) {
      this.setState({
        ...this.state,
        sendProperties: {},
        showConfirmModal: false,
        showFailureModal: true,
        modalFailureText: "Voting failed: " + response.message
      });
    } else {
      this.setState({
        ...this.state,
        sendProperties: {},
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

  render() {
    let { selectedWallet } = this.state;

    let accountId = this.props.match.params.account;
    let accounts = this.props.wallet.persistent.accounts;

    let currentRep = atob(this.props.match.params.rep);
    let rep = this.props.witnesses.witnesses.find(
      w => w.address === currentRep
    );
    this.state.rep = rep;

    if (!rep) {
      return <div>not loaded</div>;
    }

    let wallets = [];
    Object.keys(accounts).forEach((wallet, i) => {
      let formattedObj = {
        text: accounts[wallet].name,
        value: accounts[wallet].publicKey
      };
      wallets.push(formattedObj);
    });

    return (
      <Secondary className={styles.container}>
        <div className={styles.headerContainer}>
          <Header headerName="Votes" />
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
        <div className={styles.subContainer}>
          <div className={styles.votingFor}>
            YOUR ARE VOTING FOR : <span>{rep.url}</span>
          </div>
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
          <VoteAmountSlider
            onSliderChange={this.onSliderChange.bind(this)}
            totalTP={selectedWallet.frozenBalance}
          />
          <Button
            onClick={this.clickSubmit.bind(this)}
            className={`${styles.btn} ${buttonStyles.button} ${
              buttonStyles.black
            }`}
          >
            Submit Your Vote
          </Button>
        </div>
        <div className={styles.voteHistory}>Vote History</div>
        <VoteHistory />
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
    state => ({ wallet: state.wallet, witnesses: state.witnesses }),
    dispatch => ({
      loadWitnesses: props => {
        dispatch(loadWitnesses(props));
      }
    })
  )(VoteDetails)
);
