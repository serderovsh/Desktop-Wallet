import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Import.css';

import { Checkbox, Input, Form, Button } from 'semantic-ui-react';
import buttonStyles from '../../../Button.css';

export default class Import extends Component {
  state = {}
  updateValue = (e, { value }) => this.setState({ value });

  importKey = () => {
    console.log(this.state.value);
  }

  inputAlphanumeric(e) {
    if (!/^[a-zA-Z0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  }

  // enum for radio state: 0: cold, 1: hot 
  // handle via semantic UI's <Form> https://react.semantic-ui.com/collections/form

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>TYPE PRIVATE KEY TO IMPORT :</div>
        <div className={styles.form}>
          <Input onKeyPress={this.inputAlphanumeric} className={styles.input} placeholder="Type Private Key..." onChange={this.updateValue}/>
          <Button onClick={this.importKey}className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Import</Button>
        </div>
      </div>
    );
  }
}
