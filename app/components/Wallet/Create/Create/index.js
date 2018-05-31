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
      await this.props.addAccount(this.props, this.state.walletName);
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
            < Input
              className={styles.input}
              placeholder="Enter Wallet Name"
              onKeyPress={this.inputAlphanumeric}
              onChange={this.setWalletName}
            />
          </Form.Field>
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

