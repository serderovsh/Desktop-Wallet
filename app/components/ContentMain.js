// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContentMain.css';

import WalletList from './Wallet/WalletList.js';

type Props = {};

export default class ContentMain extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <WalletList />
      </div>
    );
  }
}
