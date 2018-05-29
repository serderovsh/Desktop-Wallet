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
    let wallet = this.state.wallets.filter((wallet) => wallet.value == value);
    this.setState({ selectedWallet: wallet[0] });
  }

  render() {
    let currentToken = parseInt(this.props.match.params.token);
    let token = this.props.tokens.tokens[currentToken];

    return (
      <Secondary className={styles.container}>
      <div className={styles.headerContainer}>
        <Header headerName="Buy Token" />
        <div className={styles.headerTP}>{ this.state.selectedWallet.trx.toLocaleString() }<span>TRX</span></div>
        <div className={styles.headerText}>Use TRX to purchase tokens below.</div>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.votingFor}>TOKEN NAME : <span>{token.name}</span></div>
        <div className={styles.dropdown}>
          <ArrowRightIcon />
          <Dropdown fluid selection
            onChange={this.selectWallet}
            defaultValue={this.state.wallets.length > 0 ? this.state.wallets[0].value : ''}
            placeholder='Choose Wallet'
            options={this.state.wallets}
          />
        </div>
        <AmountSlider totalTRX={ this.state.selectedWallet.trx } />
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
