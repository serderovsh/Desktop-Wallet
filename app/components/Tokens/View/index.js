import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dropdown, Form } from 'semantic-ui-react';
import styles from './TokenView.css';
import buttonStyles from '../../Button.css';
import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import AmountSlider from './AmountSlider';
import { ArrowRightIcon } from '../../Icons';
import { loadTokens } from '../../../actions/tokens';

const TronHttpClient = require('tron-http-client');

class TokenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallets: [],
      current: 0,
      selectedWallet: {
        text: 'Select a Wallet',
        value: '',
        trx: 0,
      }
    };
  }
  componentDidMount() {
    this.props.loadTokens();
  }

  async submitTokenPurchase() {
    let tokens = {
      recipient: this.state.token.owner_address,
      assetName: this.state.token.name,
      amount: parseInt((this.state.current * this.state.token.trx_num) / this.state.token.num)
    };
    let client = new TronHttpClient();
    let response = await client.participateToken(this.state.selectedWallet.privateKey, tokens);
    console.log(response);
  }

  selectWallet = (e, { value }) => {
    let accounts = this.props.wallet.persistent.accounts;
    let wallet = Object.keys(accounts).filter((wallet) => accounts[wallet].publicKey === value);
    this.setState({ selectedWallet: accounts[wallet[0]] });
  };

  onSliderChange(amount) {
    this.state.current = amount;
  }

  render() {
    let { selectedWallet } = this.state;

    let accountId = this.props.match.params.account;
    let accounts = this.props.wallet.persistent.accounts;

    let currentToken = this.props.match.params.token;
    let token = this.props.tokens.tokens.find(t => t._id === currentToken);
    this.state.token = token;

    if (!token) {
      return (
        <div>not loaded</div>
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
          <Header headerName="Buy Token" />
          <div className={styles.headerTP}>{selectedWallet.trx}<span>TRX</span></div>
          <div className={styles.headerText}>Use TRX to purchase tokens below.</div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.votingFor}>TOKEN NAME : <span>{token.name}</span></div>
          <div className={styles.dropdown}>
            <ArrowRightIcon />
            <Dropdown fluid selection
              onChange={this.selectWallet}
              placeholder="Choose Wallet"
              options={wallets}
            />
          </div>
          <AmountSlider onSliderChange={this.onSliderChange.bind(this)} totalTRX={selectedWallet.trx} />
          <Form.Button onClick={this.submitTokenPurchase.bind(this)} className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Purchase</Form.Button>
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
