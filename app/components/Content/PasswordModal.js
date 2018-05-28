import React, { Component } from 'react';
import styles from './PasswordModal.css';

import { Form } from 'semantic-ui-react';
import buttonStyles from '../Button.css';
import { LockIcon } from '../Icons';

export default class PasswordModal extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.modalHeader}>Enter Password</div>
          <Form className={styles.modalContainer}>
            <LockIcon className={styles.icon}/>
            <Form.Input placeholder="Enter your Password..." className={styles.passwordInput} />
            <Form.Button className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Submit</Form.Button>
          </Form>
        </div>
      </div>
    );
  }
}
