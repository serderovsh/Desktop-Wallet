import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Dropdown, Button } from "semantic-ui-react";
import { FormattedNumber } from "react-intl";
import styles from "./TokenView.css";
import buttonStyles from "../../Button.css";
import Secondary from "../../Content/Secondary";
import Header from "../../Header";
import AmountSlider from "./AmountSlider";
import { ArrowRightIcon } from "../../Icons";
import { loadTokens } from "../../../actions/tokens";
import { PopupModal } from "../../Content/PopupModal";

import { dropsToTrx } from "../../../utils/currency";

const TronHttpClient = require("tron-http-client");

class TokenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallets: [],
      current: 0,
      selectedWallet: {
        text: "Select a Wallet",
        value: "",
        trx: 0
      },

      sendProperties: {}
    };
  }

  componentDidMount() {
    this.props.loadTokens();
  }

  getDropFromCurrent() {
    return (
      (parseInt(this.state.current) * parseInt(this.state.token.trx_num)) /
      parseInt(this.state.token.num)
    );
  }

  async submitTokenPurchase() {
    let drops = this.getDropFromCurrent();
    let tokens = {
      recipient: this.state.token.owner_address,
      assetName: this.state.token.name,
      amount: this.getDropFromCurrent()
    };
    let { token } = this.state;
    this.setState({
      ...this.state,
      sendProperties: tokens,
      showConfirmModal: true,
      modalConfirmText: `Are you sure you want to buy ${this.state.current} ${
        token.abbr ? token.abbr : token.name
      } ${this.props.match.params.token} for ${dropsToTrx(drops)} TRX?`
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
    this.state.current = parseInt(amount);
  }

  async modalConfirm() {
    let client = new TronHttpClient();
    let response = await client.participateToken(
      this.state.selectedWallet.privateKey,
      this.state.sendProperties
    );

    if (response === null) {
      this.setState({
        ...this.state,
        sendProperties: {},
        showConfirmModal: false,
        showFailureModal: true,
        modalFailureText: "Buy failed"
      });
    } else if (response.result != true) {
      this.setState({
        ...this.state,
        sendProperties: {},
        showConfirmModal: false,
        showFailureModal: true,
        modalFailureText: "Buy failed: " + response.message
      });
    } else {
      this.setState({
        ...this.state,
        sendProperties: {},
        showConfirmModal: false,
        showSuccessModal: true,
        modalSuccessText: "Buy Successful!"
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

    let currentToken = this.props.match.params.token;
    let token = this.props.tokens.tokens.find(t => t._id === currentToken);
    this.state.token = token;
    console.log(token);

    if (!token) {
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
          <Header headerName="Buy Token" />
          <div className={styles.headerTP}>
            <FormattedNumber value={dropsToTrx(selectedWallet.trx)} />
            <span>TRX</span>
          </div>
          <div className={styles.headerText}>
            Use TRX to purchase tokens below.
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.votingFor}>
            TOKEN NAME : <span>{token.name}</span>
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
          <AmountSlider
            onSliderChange={this.onSliderChange.bind(this)}
            tokenLabel={token.abbr ? token.abbr : token.name}
            assetNum={token.num}
            trxNum={token.trx_num}
            totalTRX={selectedWallet.trx}
          />
          <Button
            onClick={this.submitTokenPurchase.bind(this)}
            className={`${styles.btn} ${buttonStyles.button} ${
              buttonStyles.black
            }`}
          >
            Purchase
          </Button>
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
    state => ({ wallet: state.wallet, tokens: state.tokens }),
    dispatch => ({
      loadTokens: props => {
        dispatch(loadTokens(props));
      }
    })
  )(TokenView)
);
