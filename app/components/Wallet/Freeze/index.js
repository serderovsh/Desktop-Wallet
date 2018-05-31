import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './Freeze.css';
import buttonStyles from '../../Button.css';

import MainModal from '../../Content/DarkMainModal';
import AmountInput from './AmountInput';
import { PopupModal } from '../../Content/PopupModal';

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

  render() {
    let accountId = this.props.match.params.account;
    let account = this.props.wallet.persistent.accounts[accountId];

    return (
      <MainModal header="Freeze TRX">
        <p>TRX can be frozen/locked to gain Tron Power and enable additional features. For example, with Tron Power you
          can vote for Super Representatives.
          Frozen tokens are "locked" for a period of 3 days. During this period the frozen TRX cannot be traded.
          After this period you can unfreeze the TRX and trade the tokens.</p>
        <input id="amount" className={styles.textBox} value={this.amount} />
        <div className={styles.buttonContainer}>
          <Button onClick={this.onClickFreeze} className={`${buttonStyles.button} ${buttonStyles.gradient}`}>
            Unfreeze
          </Button>
          <Button onClick={this.onClickUnFreeze} className={`${buttonStyles.button} ${buttonStyles.gradient}`}>
            Freeze
          </Button>
        </div>
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
