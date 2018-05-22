// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContentMain.css';
import Navbar from './Navbar/Navbar';
import WalletView from './Wallet/WalletView/WalletView';

type Props = {
  //children: React.Node
};

export default class ContentMain extends Component {
  render() {
    return (
      <div className="interface">
        <Navbar />
        <div className={styles.container}>
          <div className={ styles.contentPrimary }>
            {this.props.children}
          </div>
          <div className={ styles.contentSecondary }>
            <WalletView />
          </div>
        </div>
      </div>
    );
  }
}
