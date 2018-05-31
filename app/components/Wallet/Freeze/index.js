import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './Freeze.css';
import buttonStyles from '../../Button.css';

import MainModal from '../../Content/DarkMainModal';
import { PopupModal } from '../../Content/PopupModal';
import AmountDisplay from './AmountDisplay';

import { trxToDrops } from '../../../utils/currency';

import TronHttpClient from 'tron-http-client';

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
      modalSuccessText: 'Success',
      accountAddress: ""
    };
  }
  async onClickFreezeTrx() {
    let accountId = this.props.match.params.account;
    let account = this.props.wallet.persistent.accounts[accountId];

    this.setState({
      ...this.state,
      freezeTrx: {
        privateKey: account.privateKey,
        amount: parseInt(this.state.amount)
      },
      accountAddress: account.publicKey,
      showConfirmModal: true,
      modalConfirmText: 'Do you Confirm?'
    });
  }

  onSetAmount(amount) {
    this.setState({amount: amount})
  }

  async modalConfirm() {
    // actually call here
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
    this.props.history.push("/wallets/walletDetails/" + this.state.accountAddress);
    this.setState({
      showSuccessModal: false
    });
  }

  modalClose() {
    this.state.showConfirmModal = false;
  }

  render() {
    let accountId = this.props.match.params.account;
    let account = this.props.wallet.persistent.accounts[accountId];

    return (
      <MainModal header="Freeze TRX">
        <div className={styles.headerSubText}>TRX can be frozen/locked to gain Tron Power and enable additional features. For example, with Tron Power you
          can vote for Super Representatives.
          Frozen tokens are "locked" for a period of 3 days. During this period the frozen TRX cannot be traded.
          After this period you can unfreeze the TRX and trade the tokens.</div>
        <AmountDisplay onSetAmount={this.onSetAmount.bind(this)}/>
        <div className={styles.buttonContainer}>
          <Button onClick={this.onClickFreeze} className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Unfreeze</Button>
          <Button onClick={this.onClickUnFreeze} className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Freeze</Button>
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

      </MainModal>
    );
  }
}

export default withRouter(connect(
  state => ({ wallet: state.wallet }),
  dispatch => ({
    initFromStorage: (props) => {
      dispatch(initFromStorage(props));
    }
  })
)(Freeze));
