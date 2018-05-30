import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './TokenView.css';

import { Dropdown, Input, Form, Button } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import AmountSlider from './AmountSlider';
import { ArrowRightIcon } from '../../Icons';
import { connect } from "react-redux";

class TokenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallets: [
        { text: 'Personal Wallet', value: 'wallet-id-1', trx: 5336.82 },
        { text: 'Business Wallet', value: 'wallet-id-2', trx: 266434534 },
        { text: 'New Wallet', value: 'wallet-id-3', trx: 0 }
      ],
      selectedWallet: {
        text: 'Select a Wallet',
        value: '',
        tp: 0,
      }
    };

    if (this.state.wallets.length > 0) this.state.selectedWallet = this.state.wallets[0];
  }

  selectWallet = (e, { value }) => {
    let accounts = this.props.wallet.persistent.accounts;
    let wallet = Object.keys(accounts).filter((wallet) => accounts[wallet].publicKey == value);
    this.setState({ selectedWallet: accounts[wallet[0]] });
  }

  render() {
    let { selectedWallet } = this.state;
    let accounts = this.props.wallet.persistent.accounts;
    let currentToken = this.props.match.params.token;
    let token = this.props.tokens.tokens.find(t => t._id === currentToken);

    let wallets = [];
    Object.keys(accounts).forEach((wallet, i) => {
      let formattedObj = {
        text: accounts[wallet].name,
        value: accounts[wallet].publicKey
      }
      wallets.push(formattedObj)
    });

    return (
      <Secondary className={styles.container}>
      <div className={styles.headerContainer}>
        <Header headerName="Buy Token" />
        <div className={styles.headerTP}>{ selectedWallet.trx.toLocaleString() }<span>TRX</span></div>
        <div className={styles.headerText}>Use TRX to purchase tokens below.</div>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.votingFor}>TOKEN NAME : <span>{token.name}</span></div>
        <div className={styles.dropdown}>
          <ArrowRightIcon />
          <Dropdown fluid selection
            onChange={this.selectWallet}
            placeholder='Choose Wallet'
            options={wallets}
          />
        </div>
        <AmountSlider totalTRX={ selectedWallet.trx } />
        <Form.Button className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Purchase</Form.Button>
      </div>
      </Secondary>
    );
  }
}

export default withRouter(connect(
  state => ({ wallet: state.wallet, tokens: state.tokens }),
  dispatch => ({
    loadTokens: (props) => {
      dispatch(loadTokens(props));
    }
  })
)(TokenView));
