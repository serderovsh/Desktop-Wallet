import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Notifications.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';

import { Form, TextArea, Button } from 'semantic-ui-react'
import buttonStyles from '../../Button.css';

import { BellIcon } from '../../Icons';

export default class Notifications extends Component {
  render() {
    return (
      <Secondary>
        <Header headerName="Notifications" />
        <Form className={styles.container}>
          <BellIcon className={styles.icon} />
          <div className={styles.toggleContainer}>
            <div className={styles.toggleLabel}>Enable Push Notifications</div>
            <Form.Checkbox toggle className={styles.toggle} />
          </div>
          <div className={styles.divider} />
          <div className={styles.toggleContainer}>
            <div className={styles.toggleLabel}>Notify me when transactions are confirmed</div>
            <Form.Checkbox toggle className={styles.toggle} />
          </div>
          <div className={styles.divider} />
          <div className={styles.toggleContainer}>
            <div className={styles.toggleLabel}>Enable Email Notifications</div>
            <Form.Checkbox toggle className={styles.toggle} />
          </div>
        </Form>
      </Secondary>
    );
  }
}
