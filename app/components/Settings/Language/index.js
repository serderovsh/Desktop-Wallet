import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Language.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';

import { Form, TextArea, Button } from 'semantic-ui-react'
import buttonStyles from '../../Button.css';

import { CommentIcon } from '../../Icons';

export default class Language extends Component {
  render() {
    return (
      <Secondary>
        <Header headerName="Language" />
        <Form className={styles.container}>
          <CommentIcon className={styles.icon} />
          <div>Write below and click on submit to send a support message.</div>
          <Form.TextArea placeholder="Write your message here..." className={styles.textArea} />
          <Form.Button className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Submit</Form.Button>
        </Form>
      </Secondary>
    );
  }
}
