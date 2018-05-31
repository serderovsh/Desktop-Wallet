import React, { Component } from 'react';
import { Checkbox, Input, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './CreationContent.css';
import { createWallet, addAccount} from '../../../../actions/wallet';
import buttonStyles from '../../../Button.css';


class CreationContent extends Component {
  constructor() {
    super();
    this.onClickCreate = this.onClickCreate.bind(this);
  }
  state = {};

  // wallet types: 0-Hot, 1-Cold
  toggleRadio = (e, { value }) => this.setState({ value });
  setWalletHot = (type) => this.setState({ walletType: 0 });
  setWalletCold = (type) => this.setState({ walletType: 1 });
  setWalletName = (e, { value }) => this.setState({ walletName: value });

  async onClickCreate() {
      console.log("clicaaaaaaaaaaaaaaaaaaaaaak");
      await this.props.addAccount(this.props, "test123");
  }

  inputAlphanumeric(e) {
    if (!/^[a-zA-Z0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>CREATE A NEW WALLET :</div>
        <Form className={styles.form}>
          <Form.Field>
            <Input
              placeholder="Enter Wallet Name"
              onKeyPress={this.inputAlphanumeric}
              onChange={this.setWalletName}
            />
          </Form.Field>
          <div className={styles.radioContainerMain}>
            <Form.Field className={styles.radioSection}>
              <div className={styles.radioButton}>
                <Checkbox
                  radio
                  name="checkboxRadioGroup"
                  value="0"
                  checked={this.state.value === '0'}
                  onChange={this.toggleRadio}
                  onClick={this.setWalletHot}
                />
              </div>
              <div className={styles.radioContainer}>
                <div className={styles.radioHeader}>HOT WALLET :</div>
                <ul className={styles.radioList}>
                  <li>Send and receive Tron immediately.</li>
                  <li>Manage all your Tron accounts and tokens.</li>
                  <li>Transactions are signed on your device and broadcasted to the network.</li>
                </ul>
              </div>
            </Form.Field>
            <Form.Field className={styles.radioSection}>
              <div className={styles.radioButton}>
                <Checkbox
                  radio
                  name="checkboxRadioGroup"
                  value="1"
                  checked={this.state.value === '1'}
                  onChange={this.toggleRadio}
                  onClick={this.setWalletCold}
                />
              </div>
              <div className={styles.radioContainer}>
                <div className={styles.radioHeader}>COLD WALLET :</div>
                <ul className={styles.radioList}>
                  <li>Sign Transactions without an active internet connection.</li>
                  <li>Broadcast them using a different device for best possible security.</li>
                </ul>
              </div>
            </Form.Field>
          </div>
          <Form.Button onClick={this.onClickCreate} className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Send</Form.Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({ wallet: state.wallet }),
  dispatch => ({
    createWallet: (props, walletName) => {
      dispatch(createWallet(props, walletName));
    },
    addAccount: (props, walletName) => {
        addAccount(props, walletName, dispatch);
    }
  })
)(CreationContent));

