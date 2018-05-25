import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CreationContent.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {createWallet} from "../../../../actions/wallet";

import { Checkbox, Input, Form, Button } from 'semantic-ui-react';
import buttonStyles from '../../../Button.css';

class CreationContent extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value });

  constructor(){
    super();
    this.onClickCreate = this.onClickCreate.bind(this);
  }

  onClickCreate(){
    this.props.createWallet(this.props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>CREATE A NEW WALLET :</div>
        <Form className={styles.form}>
          <Form.Field>
            <Input placeholder="Enter Wallet Name" />
          </Form.Field>
          <div className={styles.radioContainerMain}>
            <Form.Field className={styles.radioSection}>
              <div className={styles.radioButton}>
                <Checkbox
                  radio
                  name='checkboxRadioGroup'
                  value='0'
                  checked={this.state.value === '0'}
                  onChange={this.handleChange}
                />
              </div>
              <div className={styles.radioContainer}>
                <div className={styles.radioHeader}>COLD WALLET :</div>
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
                  name='checkboxRadioGroup'
                  value='1'
                  checked={this.state.value === '1'}
                  onChange={this.handleChange}
                />
              </div>
              <div className={styles.radioContainer}>
                <div className={styles.radioHeader}>HOT WALLET :</div>
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
    dispatch => ( {
        createWallet : (props, walletName) => {
            dispatch(createWallet(props, walletName));
        }
    } )
)(CreationContent));

