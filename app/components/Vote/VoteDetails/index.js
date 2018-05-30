import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './VoteDetails.css';
import buttonStyles from '../../Button.css';

import { loadWitnesses } from '../../../actions/witnesses';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import VoteAmountSlider from './VoteAmountSlider';
import { ArrowRightIcon } from '../../Icons';

const TronHttpClient = require('tron-http-client');

class VoteDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rep: {},
      wallets: [],
      current: 0,
      selectedWallet: {
        text: 'Select a Wallet',
        value: '',
        frozenBalance: 0,
      }
    };
  }

  componentDidMount() {
    this.props.loadWitnesses();
  }

  async submitVote(){
    let votes = [
      {
        address : this.state.rep.address,
        count : parseInt(this.state.current)
      }
    ];

    let client = new TronHttpClient();
    let response = await client.vote(this.state.selectedWallet.privateKey, votes);
    console.log(response);
  }

  selectWallet = (e, { value }) => {
    let accounts = this.props.wallet.persistent.accounts;
    let wallet = Object.keys(accounts).filter((wallet) => accounts[wallet].publicKey === value);
    this.setState({ selectedWallet: accounts[ wallet[ 0 ] ] });
  }

  onSliderChange(amount){
    this.state.current = amount;
    console.log(`amount: ${amount}`);
  }

  render() {
    let { selectedWallet } = this.state;

    let accountId = this.props.match.params.account;
    let accounts = this.props.wallet.persistent.accounts;

    let currentRep = atob(this.props.match.params.rep);
    let rep = this.props.witnesses.witnesses.find(w => w.address === currentRep);
    this.state.rep = rep;

    if (!rep) {
      return (
        <div>note loaded</div>
      );
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
          <div className={styles.headerTP}>{selectedWallet.frozenBalance.toLocaleString()}<span>TP</span></div>
          <div className={styles.headerText}>Earn More TronPower by freezing Tron</div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.votingFor}>YOUR ARE VOTING FOR : <span>{rep.url}</span></div>
          <div className={styles.dropdown}>
            <ArrowRightIcon />
            <Dropdown fluid selection
                      onChange={this.selectWallet}
                      placeholder='Choose Wallet'
                      options={wallets}
            />
          </div>
          <VoteAmountSlider onSliderChange={this.onSliderChange.bind(this)} totalTP={selectedWallet.frozenBalance} />
          <Button onClick={this.submitVote.bind(this)} className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Submit Your Vote</Button>
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
