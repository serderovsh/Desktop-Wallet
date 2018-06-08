import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import styles from "./Freeze.css";
import buttonStyles from "../../Button.css";

import MainModal from "../../Content/DarkMainModal";
import { PopupModal } from "../../Content/PopupModal";
import AmountDisplay from "./AmountDisplay";

import { trxToDrops } from "../../../utils/currency";
import TronHttpClient from "tron-http-client";
import {ContactIcon } from "../../Icons";

const client = new TronHttpClient();

import { TextArea } from "semantic-ui-react";
import commonStyles from '../WalletCommon.css'
import {toHexString} from "../../../utils/hex";
const tools = require("tron-http-tools");

class Freeze extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,

      showConfirmModal: false,
      modalConfirmText: "",
      freezeTrx: {},
      unFreezeTrx: {},

      showFailureModal: false,
      modalFailureText: "",

      showSuccessModal: false,
      modalSuccessText: "Success",
      accountAddress: ""
    };
  }

  async onShow(isFreeze) {
    if(this.props.isCold){
      if(isFreeze){
        console.log(this.state.senderAddress);
        let transaction = await tools.transactions.createUnsignedFreezeBalanceTransaction(
          {
            ownerAddress: this.state.senderAddress.trim(),
            amount : parseInt(this.state.amount) * 1000000,
            duration : 3
          },
          await client.getLastBlock()
        );
        let hex = toHexString(transaction.serializeBinary());
        this.setState({
          coldOutputString:hex
        });
      }else{
        let transaction = await tools.transactions.createUnsignedUnfreezeBalanceTransaction(
          {
            ownerAddress: this.state.senderAddress.trim()
          },
          await client.getLastBlock()
        );
        let hex = toHexString(transaction.serializeBinary());
        this.setState({
          coldOutputString:hex
        });
      }
    }else{
      let accountId = this.props.match.params.account;
      let account = this.props.wallet.persistent.accounts[accountId];

      let amount = parseInt(this.state.amount);
      this.setState({
        ...this.state,
        freezeTrx: {
          privateKey: account.privateKey,
          amount: parseInt(this.state.amount),
          isFreeze: isFreeze
        },
        accountAddress: account.publicKey,
        showConfirmModal: true,
        modalConfirmText: isFreeze ? `Freeze ${amount} TRX?` : "Unfreeze All?"
      });
    }
  }

  async onClickUnfreezeTrx(isFreeze) {
    this.onShow(false);
  }

  async onClickFreezeTrx() {
    this.onShow(true);
  }

  onSetAmount(amount) {
    this.setState({ amount: amount });
  }

  async modalConfirm() {
    if (this.state.freezeTrx.isFreeze) {
      let response = await client.freezeTrx(
        this.state.freezeTrx.privateKey,
        this.state.freezeTrx.amount * 1000000
      );

      if (response && response.result == true) {
        this.setState({
          showConfirmModal: false,
          showSuccessModal: true,
          modalFailureText: "Freezing Successful!"
        });
      } else {
        this.setState({
          showConfirmModal: false,
          showFailureModal: true,
          modalFailureText:
            "Freezing Failed " +
            (response && response.message ? response.message : "")
        });
      }
    } else {
      let response = await client.unfreezeTrx(
        this.state.freezeTrx.privateKey
      );

      if (response && response.result == true) {
        this.setState({
          showConfirmModal: false,
          showSuccessModal: true,
          modalFailureText: "Unfreezing Successful!"
        });
      } else {
        this.setState({
          showConfirmModal: false,
          showFailureModal: true,
          modalFailureText:
            "Unfreezing failed. Has it been 3 days? '" +
            (response && response.message ? response.message : "'")
        });
      }
    }
  }

  modalDecline() {
    this.setState({
      showConfirmModal: false
    });
  }

  modalFailureClose() {
    this.setState({
      showFailureModal: false
    });
  }

  modalSuccessClose() {
    this.props.history.push(
      "/wallets/walletDetails/" + this.state.accountAddress
    );
    this.setState({
      showSuccessModal: false
    });
  }

  modalClose() {
    this.state.showConfirmModal = false;
  }

  onSetSenderAddress(e){
    this.setState({
      senderAddress : e.target.value
    });
  }

  renderColdwalletOwnerInput(){
    if(!this.props.isCold)
      return "";

    return(
      <div className={commonStyles.addressContainer}>
        <ContactIcon/>
        <input
          onChange={this.onSetSenderAddress.bind(this)}
          placeholder="Sender Address"
          className={commonStyles.address}
          value={this.props.match.params.account}
        />
      </div>
    );
  }

  renderColdwalletOutput(){
    if(!this.props.isCold)
      return "";
    return (<TextArea
        placeholder="Output..."
        class={commonStyles.textArea}
        value={this.state.coldOutputString}
      />
    );
  }

  render() {
    let accountId = this.props.match.params.account;
    let account = this.props.wallet.persistent.accounts[accountId];

    return (
      <MainModal header="Freeze TRX">
        <div className={styles.headerSubText}>
          TRX can be frozen/locked to gain Tron Power and enable additional
          features. For example, with Tron Power you can vote for Super
          Representatives. Frozen tokens are "locked" for a period of 3 days.
          During this period the frozen TRX cannot be traded. After this period
          you can unfreeze the TRX and trade the tokens.
        </div>
        {this.renderColdwalletOwnerInput()}
        <AmountDisplay onSetAmount={this.onSetAmount.bind(this)} />
        <div className={styles.buttonContainer}>
          <Button
            onClick={this.onClickUnfreezeTrx.bind(this)}
            className={`${buttonStyles.button} ${buttonStyles.gradient}`}
          >
            {this.props.isCold ? "Create Unfreeze" : "Unfreeze"}
          </Button>
          <Button
            onClick={this.onClickFreezeTrx.bind(this)}
            className={`${buttonStyles.button} ${buttonStyles.gradient}`}
          >
            {this.props.isCold ? "Create Freeze" : "Freeze"}
          </Button>
        </div>
        {this.renderColdwalletOutput()}

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
      </MainModal>
    );
  }
}

export default withRouter(
  connect(
    state => ({ wallet: state.wallet }),
    dispatch => ({
      initFromStorage: props => {
        dispatch(initFromStorage(props));
      }
    })
  )(Freeze)
);
