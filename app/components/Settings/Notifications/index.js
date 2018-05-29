import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Notifications.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';

import { Checkbox, Button } from 'semantic-ui-react'
import buttonStyles from '../../Button.css';

import { BellIcon } from '../../Icons';

export default class Notifications extends Component {

  state = {}

  setPushNotif = (e, { value }) => this.setState({ pushNotif: value })
  setTxNotify = (e, { value }) => this.setState({ txNotify: value })
  setEmailNotif = (e, { value }) => this.setState({ emailNotif: value })

  saveSettings = () => {
    console.log(this.state);
  }

  render() {
    return (
      <Secondary>
        <Header headerName="Notifications" />
        <div className={styles.container}>
          <BellIcon className={styles.icon} />
          <div className={styles.toggleContainer}>
            <div className={styles.toggleLabel}>Enable Push Notifications</div>
            <Checkbox toggle onChange={() => {this.setPushNotif; this.saveSettings();}} className={styles.toggle} />
          </div>
          <div className={styles.divider} />
          <div className={styles.toggleContainer}>
            <div className={styles.toggleLabel}>Notify me when transactions are confirmed</div>
            <Checkbox toggle onChange={() => {this.setTxNotify; this.saveSettings;}} className={styles.toggle} />
          </div>
          <div className={styles.divider} />
          <div className={styles.toggleContainer}>
            <div className={styles.toggleLabel}>Enable Email Notifications</div>
            <Checkbox toggle onChange={() => {this.setEmailNotif; this.saveSettings;}} className={styles.toggle} />
          </div>
        </div>
      </Secondary>
    );
  }
}
