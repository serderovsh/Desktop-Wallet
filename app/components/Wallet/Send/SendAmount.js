import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import styles from './SendAmount.css';
import Header from '../../Header';
import AmountDisplay from './AmountDisplay';
import buttonStyles from '../../Button.css';
import { ContactIcon, BackArrowIcon } from '../../Icons';
import {PopupModal} from '../../Content/PopupModal';

import TronHttpClient from 'tron-http-client';

class SendAmount extends Component {
  constructor(props) {
    super(props);

    this.state = {
        amount: 0,
        address: '',

        showConfirmModal: false,
        modalConfirmText : "",

        target : "",
        tokenStr : "",

        sendProperties : {

        }
    };
  }

  async onClickSend() {
    let accountId = this.props.match.params.account;
    let account = this.props.wallet.persistent.accounts[ accountId ];

    this.state.sendProperties = {
        privateKey : account.privateKey,
        recipient : this.state.address,
        amount : this.state.amount
    };
    this.state.showConfirmModal = true;
    console.log("SET!");
  }

  onSetAmount(amount) {
    this.state.amount = amount;
  }

  onSetAddress(event) {
    this.state.address = event.target.value;
  }

  async modalConfirm(){
      let client = new TronHttpClient();
      let response = null;
      if (this.props.match.params.token) {
          response = await client.sendToken(
              this.state.sendProperties.privateKey,
              this.state.sendProperties.recipient,
              this.state.sendProperties.amount,
              this.props.match.params.token);
      } else {
          response = await client.sendToken(
              this.state.sendProperties.privateKey,
              this.state.sendProperties.recipient,
              this.state.sendProperties.amount);
      }

      console.log(response);
  }

  modalDecline(){
      this.state.sendProperties = {};
  }

  modalClose(){
      this.state.showConfirmModal = false;

  }

  render() {
    let token = (this.props.match.params.token ? this.props.match.params.token : 'TRX');
    this.state.tokenStr = token;
    return (
      <div className={styles.container}>
        <Header className={styles.white} headerName="Enter Amount" />
        <div onClick={this.props.history.goBack} className={styles.backArrow}>
          <BackArrowIcon />
        </div>
        <div className={styles.subContainer}>
          <div className={styles.addressContainer}>
            <ContactIcon />
            <input
              onChange={this.onSetAddress.bind(this)}
              placeholder="Recipient Address"
              className={styles.address}
              value={this.props.address}
            />
          </div>
          <AmountDisplay token={token} onSetAmount={this.onSetAmount.bind(this)} />
          <Button
            onClick={this.onClickSend.bind(this)}
            className={`${buttonStyles.button} ${buttonStyles.black}`}>Send
          </Button>


          <PopupModal
            success
            modalVis={this.state.showConfirmModal}
            modalText="Are you sure you wanna do this?"
            closeModalFunction={this.modalClose.bind(this)}
            modalConfirm={this.modalConfirm.bind(this)}
            modalDecline={this.modalDecline.bind(this)}
        />

        </div>
      </div>
    );
  }
}

export default withRouter(connect(state => ({ wallet: state.wallet }))(SendAmount));
