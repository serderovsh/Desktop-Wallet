import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Input, Checkbox } from 'semantic-ui-react';

import styles from './Receive.css';
import buttonStyles from '../../Button.css';

import MainModal from '../../Content/DarkMainModal';
import { ShareIcon, CopyIcon, SendIcon } from '../../Icons';

export default class Receive extends Component {
  state = {
    wallet: '27U5C9dyNShQuaeJ66FNF9a3axWADz5KKYc'
  }

  copyAddress() {
    var wallet = document.querySelector('#receiveCodeTextBox');
    wallet.focus();
    wallet.select();
    document.execCommand("copy");
  }

  render() {
      return (
          <MainModal header="Generate Receive Code">
            <img src="http://via.placeholder.com/175x175" />
            <div className={styles.buttonContainer}>
              <Button className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><ShareIcon /></Button>
              <Button onClick={this.copyAddress} className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><CopyIcon /></Button>
              <Button className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><SendIcon /></Button>
            </div>
            <div className={styles.addressContainer}>
              <div className={styles.addressLabel}>Your Wallet Address :</div>
              <input onClick={this.copyAddress} id="receiveCodeTextBox" className={styles.textBox} value={this.state.wallet} readOnly />
              <Button onClick={this.copyAddress} className={`${styles.copyBtn} ${buttonStyles.button} ${buttonStyles.gradient}`}><CopyIcon /> Copy Address</Button>
            </div>
          </MainModal>
      );
  }
}
