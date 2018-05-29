import React, { Component } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './VoteDetails.css';
import buttonStyles from '../../Button.css';

import { loadWitnesses } from '../../../actions/witnesses';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import VoteAmountSlider from './VoteAmountSlider';
import { ArrowRightIcon } from '../../Icons';

class VoteDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rep: {},
      wallets: [],
      dropdownWallets: [],
      selectedWallet: {
        text: 'Select a Wallet',
        value: '',
        tp: 0,
      }
    };
  }

  componentDidMount() {
    this.props.loadWitnesses();
  }

  selectWallet = (e, { value }) => {
     let wallet = this.state.wallets.filter((wallet) => wallet.value == value);
     this.setState({ selectedWallet: wallet[0] });
  }

  render() {
    //let { rep, wallets, selectedWallet, dropdownWallets } = this.state;

    let accountId = parseInt(this.props.match.params.account);
    let accounts = this.props.wallet.persistent.accounts
    let selectedWallet = this.props.wallet.persistent.accounts[accountId];

    let currentRep = atob(this.props.match.params.rep);
    let rep = this.props.witnesses.witnesses.find(w => w.address === currentRep);

    let wallets = [];
    accounts.forEach((wallet, i) => {
      let formattedObj = {
        text: wallet.name,
        value: wallet.publicKey,
        tp: 0
        // TODO: add tronpower support
      }

      wallets.push(formattedObj)
    });

    return (
      <Secondary className={styles.container}>
        <div className={styles.headerContainer}>
          <Header headerName="Votes" />
          <div className={styles.headerTP}>{/*selectedWallet.tp.toLocaleString()*/0}<span>TP</span></div>
          <div className={styles.headerText}>Earn More TronPower by freezing Tron</div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.votingFor}>YOUR ARE VOTING FOR : <span>{rep.url}</span></div>
          <div className={styles.dropdown}>
            <ArrowRightIcon />
            <Dropdown fluid selection
              onChange={this.selectWallet}
              defaultValue={wallets.length > 0 ? wallets[0].value : ''}
              placeholder='Choose Wallet'
              options={wallets}
            />
          </div>
          <VoteAmountSlider totalTP={/*selectedWallet.tp*/0} />
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
