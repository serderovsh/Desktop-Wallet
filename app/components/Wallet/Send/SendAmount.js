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

        },

        showFailureModal : false,
        modalFailureText : "Transaction Failed",

        showSuccessModal: false,
        modalSuccessText : "Success",
        accountAddress : ""
    };
  }

  async onClickSend() {
    let accountId = this.props.match.params.account;
    let account = this.props.wallet.persistent.accounts[accountId];


    this.setState({
        ...this.state,
        sendProperties : {
            privateKey : account.privateKey,
            recipient : this.state.address.trim(),
            amount : parseInt(this.state.amount)
        },
        accountAddress : account.publicKey,
        showConfirmModal : true,
        modalConfirmText: `Send ${this.state.amount} ${this.state.tokenStr} to ${this.state.address}?`
    });

  }

  onSetAmount(amount) {
      this.setState({
          ...this.state,
          amount : amount
      })
  }

  onSetAddress(event) {
      this.setState({
          ...this.state,
          address : event.target.value
      });
  }

  async modalConfirm(){
      let client = new TronHttpClient();
      let response = null;
      if (this.props.match.params.token) {
          response = await client.sendToken(
              this.state.sendProperties.privateKey,
              this.state.sendProperties.recipient,
              this.state.sendProperties.amount,
              this.props.match.params.token).catch(x => null);
      } else {
          console.log(this.state.sendProperties);
          response = await client.sendTrx(
              this.state.sendProperties.privateKey,
              this.state.sendProperties.recipient,
              this.state.sendProperties.amount).catch(x => null);
      }

      if(response === null){
          this.setState({
              ...this.state,
              sendProperties:{},
              showConfirmModal:false,
              showFailureModal:true,
              modalFailureText : "Transaction failed"
          });

      }else if (response.response == false){
          this.setState({
              ...this.state,
              sendProperties:{},
              showConfirmModal:false,
              showFailureModal:true,
              modalFailureText : "Transaction failed: " + response.message
          });
      }else{
          this.setState({
              ...this.state,
              sendProperties:{},
              showConfirmModal:false,
              showSuccessModal:true,
              modalSuccessText: "Transaction Successful!"
          });
      }

      console.log(response);
  }

  modalDecline(){
      this.setState({
          ...this.state,
          sendProperties:{},
          showConfirmModal:false
      });
  }

  modalFailureClose(){
      this.setState({
          ...this.state,
          showFailureModal:false
      });
  }

  modalSuccessClose(){
      this.props.history.push("/wallets/walletDetails/" + this.state.accountAddress);
      this.setState({
          ...this.state,
          showSuccessModal:false
      });
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
        </div>
      </div>
    );
  }
}

export default withRouter(connect(state => ({ wallet: state.wallet }))(SendAmount));
