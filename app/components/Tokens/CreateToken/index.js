import React, { Component } from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadTokens } from '../../../actions/tokens';
import styles from './CreateToken.css';
import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import DateSelect from 'react-date-picker';

import { CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from '../../Icons';

const TronHttpClient = require('tron-http-client');

const client = new TronHttpClient();

class CreateToken extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      isTokenCreated: false,
      selectedWallet: {
        text: 'Select a Wallet',
        value: '',
        frozenBalance: 0,
      },
      formValues: {
        assetName: '',
        assetAbbr: '',
        totalSupply: 0,
        assetNum: 0,
        trxNum: 0,
        endTime: 0,
        startTime: 0,
        description: '',
        url: '',
        confirmed: false,
      }
    };
  }

  setDateStart = date => this.setState({ formValues: { ...this.state.formValues, startTime: date } })
  setDateEnd = date => this.setState({ formValues: { ...this.state.formValues, endTime: date } })


  isValid = ({
    assetName,
    assetAbbr,
    totalSupply,
    assetNum,
    trxNum,
    endTime,
    startTime,
    description,
    url,
    confirmed
  }) => {
    let { loading, selectedWallet } = this.state;
    console.log(loading, selectedWallet)
    if (
      !selectedWallet ||
      loading ||
      assetName.length === 0 ||
      assetAbbr.length === 0 ||
      totalSupply <= 0 ||
      assetNum <= 0 ||
      trxNum <= 0 ||
      !endTime ||
      !startTime ||
      description.length === 0 ||
      url.length === 0 ||
      confirmed
    ) {
      return false;
    }

    return true;
  };

  inputAlphanumeric(e)
  {
    if (!/^[a-zA-Z0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ formValues: { ...this.state.formValues, [name]: value } });
  }

  selectWallet = (e, { value }) => {
    let accounts = this.props.wallet.persistent.accounts;
    let wallet = Object.keys(accounts).filter((wallet) => accounts[wallet].publicKey == value);
    this.setState({ selectedWallet: accounts[wallet[0]] });
  }

  submitHandler = async () => {
    let { accounts } = this.props;
    let { selectedWallet, formValues } = this.state;

    formValues = { ...formValues, startTime: Date.parse(formValues.startTime), endTime: Date.parse(formValues.endTime), trxNum: formValues.trxNum * 1000000 };

    this.isValid(formValues);
    this.setState({ loading: true });
    // form sanitization here
    /*
    try {
      let result = await client.issueAsset(selectedWallet.privateKey, formValues);

      if (result) {
        this.setState({ isTokenCreated: true });
      }
    } finally {
      this.setState({ loading: false });
    }
    */
  };

  render() {
    let accountId = this.props.match.params.account;
    let accounts = this.props.wallet.persistent.accounts;

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
        <Header headerName="Create New Token" />
        <div className={styles.createContainer}>
          <div className={styles.header}>ISSUE A NEW TOKEN :</div>
          <div className={styles.textBoxContainer}>
            <span>Token Name</span>
            <Input name="assetName" onChange={this.handleInputChange} className={styles.input} onKeyPress={this.inputAlphanumeric} />
          </div>
          <div className={styles.textBoxContainer}>
            <span>Token Abbreviation</span>
            <Input name="assetAbbr" onChange={this.handleInputChange} className={styles.input} onKeyPress={this.inputAlphanumeric} />
          </div>
          <div className={styles.textBoxContainer}>
            <span>Total Supply</span>
            <Input name="totalSupply" type="number" onChange={this.handleInputChange} className={styles.input} />
          </div>
          <div className={styles.inputSubText}>Total amount of tokens which will be in circulation.</div>
          <div className={styles.divider}></div>
          <div className={styles.textBoxContainer}>
            <span>Description</span>
            <Input name="description" onChange={this.handleInputChange} className={styles.input} />
          </div>
          <div className={styles.inputSubText}>A short description of the purpose of the token.</div>
          <div className={styles.textBoxContainer}>
            <span>URL</span>
            <Input name="url" onChange={this.handleInputChange} className={styles.input} />
          </div>
          <div className={styles.inputSubText}>A website where users can find more information about the token.</div>
          <div className={styles.divider}></div>
          <div className={styles.header}>EXCHANGE RATE :</div>
          <div className={styles.headerSubText}>Specify the price of a single token by defining how many tokens a
            participant will receive for every TRX they spend.
          </div>
          <div className={styles.divider}></div>
          <div className={styles.headerSubText}>Participants will receive <span>{this.state.formValues.assetNum ? this.state.formValues.assetNum : '-'}</span> <span>Token</span> for every  <span>{this.state.formValues.trxNum ? this.state.formValues.trxNum : '-'}</span><span> TRX</span>.</div>
          <div className={styles.divider}></div>
          <div className={styles.textBoxContainer}>
            <span>TRX Amount</span>
            <Input name="trxNum" type="number" onChange={this.handleInputChange} className={styles.input} />
          </div>
          <div className={styles.textBoxContainer}>
            <span>Token Amount</span>
            <Input name="assetNum" type="number" onChange={this.handleInputChange} className={styles.input} />
          </div>
          <div className={styles.dateHeaderCont}>
            <div className={styles.dateHeader}>Start Date</div>
            <div className={styles.dateHeader}>End Date</div>
          </div>
          <div className={styles.datePicker}>
            <DateSelect minDate={new Date()} onChange={ this.setDateStart } value={ this.state.formValues.startTime }/>
            <DateSelect minDate={new Date()} onChange={ this.setDateEnd } value={ this.state.formValues.endTime }/>
          </div>
          <div className={styles.dropdown}>
            <ArrowRightIcon />
            <Dropdown fluid selection
              onChange={this.selectWallet}
              placeholder='Choose Wallet'
              options={wallets}
            />
          </div>
          <Button onClick={this.submitHandler} className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Token</Button>
        </div>
      </Secondary>
    );
  }
}

export default withRouter(connect(
  state => ({ tokens: state.tokens.tokens, wallet: state.wallet }),
  dispatch => ({
    loadTokens: () => {
      dispatch(loadTokens(dispatch));
    }
  })
)(CreateToken));
