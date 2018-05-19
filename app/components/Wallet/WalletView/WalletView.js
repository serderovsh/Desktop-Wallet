import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './WalletView.css';

import { Button } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import Header from './Header';
import SubHeader from './SubHeader';
import DatePicker from './DatePicker';
import TxList from './TxList';

export default class WalletView extends Component {

  render() {
    return (
      <div className={styles.walletView}>
        <Header headerName="Personal Wallet" />
        <SubHeader />
        <div className={styles.buttonContainer}>
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Receive</Button>
            <Button className={`${buttonStyles.button} ${buttonStyles.black}`}>Send</Button>
        </div>
        <DatePicker />
        <TxList />
      </div>
    );
  }
}
