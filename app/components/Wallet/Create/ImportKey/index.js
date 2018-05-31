import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Import.css';

import {addAccount} from "../../../../actions/wallet";
import { Checkbox, Input, Form, Button } from 'semantic-ui-react';
import buttonStyles from '../../../Button.css';

const tools = require('tron-http-tools');

class Import extends Component {
  state = {};
  updateValue = (e, { value }) => this.setState({ value });

  importKey = () => {
    let value = this.state.value.trim();
    let newAccount = tools.accounts.accountFromPrivateKey(value);
    this.props.addAccount(this.props, "Imported Account", newAccount);
  };

  static inputAlphanumeric(e) {
    if (!/^[a-zA-Z0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  }

  // enum for radio state: 0: cold, 1: hot 
  // handle via semantic UI's <Form> https://react.semantic-ui.com/collections/form

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>PASTE PRIVATE KEY TO IMPORT :</div>
        <div className={styles.form}>
          <Input onKeyPress={this.inputAlphanumeric} className={styles.input} placeholder="Private Key..." onChange={this.updateValue}/>
          <Button onClick={this.importKey}className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Import</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
    state => ({
        wallet: state.wallet,
        activeLanguage: state.app.activeLanguage,
        availableLanguages: state.app.availableLanguages
    }),
    dispatch => ({
        addAccount: (props, accountName, newAccount) =>{
            return addAccount(props, accountName, dispatch, newAccount);
        }
    })
)(Import));
