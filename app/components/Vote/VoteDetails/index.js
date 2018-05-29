import React, { Component } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './VoteDetails.css';
import buttonStyles from '../../Button.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import VoteAmountSlider from './VoteAmountSlider';
import { ArrowRightIcon } from '../../Icons';

class VoteDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallets: [
        { text: 'Personal Wallet', value: 'wallet-id-1', tp: 533682 },
        { text: 'Business Wallet', value: 'wallet-id-2', tp: 266434534 },
        { text: 'New Wallet', value: 'wallet-id-3', tp: 0 }
      ],
      selectedWallet: {
        text: 'Select a Wallet',
        value: '',
        tp: 0,
      }
    };

    if (this.state.wallets.length > 0) this.state.selectedWallet = this.state.wallets[ 0 ];
  }

  render() {
    let currentRep = parseInt(this.props.match.params.rep);
    let rep = this.props.witnesses.witnesses[currentRep];

    let accountId = parseInt(this.props.match.params.account);
    let account = this.props.wallet.persistent.accounts[accountId];
    let accounts = this.props.wallet.persistent.accounts
    console.log(accounts)

    return (
      <Secondary className={styles.container}>
        <div className={styles.headerContainer}>
          <Header headerName="Votes" />
          <div className={styles.headerTP}>{this.state.selectedWallet.tp.toLocaleString()}<span>TP</span></div>
          <div className={styles.headerText}>Earn More TronPower by freezing Tron</div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.votingFor}>YOUR ARE VOTING FOR : <span>{rep.url}</span></div>
          <div className={styles.dropdown}>
            <ArrowRightIcon />
            <Dropdown fluid selection
              onChange={this.selectWallet}
              defaultValue={this.state.wallets.length > 0 ? this.state.wallets[0].value : ''}
              placeholder='Choose Wallet'
              options={accounts}
            />
          </div>
          <VoteAmountSlider totalTP={this.state.selectedWallet.tp} />
          <Form.Button className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>
            Submit Your Vote
          </Form.Button>
        </div>
      </Secondary>
    );
  }
}

export default withRouter(connect(
  state => ({ wallet: state.wallet, witnesses: state.witnesses }),
  dispatch => ({
    loadWitnesses: (props) => {
      dispatch(loadWitnesses(props));
    }
  })
)(VoteDetails));
