import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Node.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';

import { Form, Input, Button } from 'semantic-ui-react'
import buttonStyles from '../../Button.css';

import { WifiIcon } from '../../Icons';

export default class Node extends Component {
  render() {
    return (
      <Secondary>
        <Header headerName="Node" />
        <div className={styles.container}>
          <WifiIcon className={styles.icon} />
          <div className={styles.warningHeader}>WARNING</div>
          <div className={styles.warningText}>TronWatch depends on YYY for the blockchain information, networking and synchronization.</div>
          <div className={styles.warningText}>The default configuration points to:</div>
          <div className={styles.warningLink}>https://api.tron.watch</div>
          <div className={styles.warningSubText}>(TronWatch public instance)</div>
          <div className={styles.subText}>Change the Wallet Service URL below.</div>
          <Input placeholder="https://api.tron.watch" />
          <div className={styles.divider} />
        </div>
      </Secondary>
    );
  }
}
