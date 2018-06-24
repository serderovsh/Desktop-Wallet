import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./Import.css";

import { addAccount, addWatchOnlyAccount } from "../../../../actions/wallet";
import { Checkbox, Input, Form, Button } from "semantic-ui-react";
import buttonStyles from "../../../Button.css";

const tools = require("tron-http-tools");

class Import extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkbox: "0",
      key: ""
    };
  }

  updateValue = (e, { value }) => this.setState({ key: value });
  handleCheckboxChange = (e, { value }) => this.setState({ checkbox: value });

  /*doesn't check checksum*/
  addressIsValid(address) {
    if (!address[0] === "T") return false;
    return address.length === 34;
  }

  importKey = () => {
    // add checkbox logic here, 0:privatekey, 1:publickey
    let value = this.state.key.trim();
    if (this.state.checkbox === "0") {
      let newAccount = tools.accounts.accountFromPrivateKey(value);
      this.props.addAccount(this.props, "Imported Account", newAccount);
    } else {
      if (this.addressIsValid(value)) {
        let newAccount = {
          watchonly: true,
          address: value
        };
        let accountName = "Watch " + value;
        this.props.addAccount(this.props, accountName, newAccount);
      } else {
        console.log("public key not valid.");
      }
    }
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
        <div className={styles.header}>PASTE KEY TO IMPORT :</div>
        <div className={styles.form}>
          <Input
            onKeyPress={this.inputAlphanumeric}
            className={styles.input}
            placeholder={
              this.state.checkbox === "0" ? "Private Key..." : "Public Key..."
            }
            onChange={this.updateValue}
          />
          <div className={styles.typeContainerMain}>
            <div className={styles.typeSection}>
              <div className={styles.typeButton}>
                <Checkbox
                  radio
                  name="checkboxRadioGroup"
                  value="0"
                  checked={this.state.checkbox === "0"}
                  onChange={this.handleCheckboxChange}
                />
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.typeHeader}>PRIVATE KEY :</div>
                <ul className={styles.typeList}>
                  <li>Allows full account control.</li>
                  <li>Manage all your Tron wallets and tokens.</li>
                  <li>
                    Ability to buy and create tokens, along with casting votes.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.typeSection}>
              <div className={styles.typeButton}>
                <Checkbox
                  radio
                  name="checkboxRadioGroup"
                  value="1"
                  checked={this.state.checkbox === "1"}
                  onChange={this.handleCheckboxChange}
                />
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.typeHeader}>
                  PUBLIC KEY (Watch-Only):
                </div>
                <ul className={styles.typeList}>
                  <li>Able to view transactions and balance.</li>
                  <li>Unable to send/create anything.</li>
                  <li>Strictly read-only.</li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            onClick={this.importKey}
            className={`${styles.btn} ${buttonStyles.button} ${
              buttonStyles.black
            }`}
          >
            Import
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      wallet: state.wallet,
      activeLanguage: state.app.activeLanguage,
      availableLanguages: state.app.availableLanguages
    }),
    dispatch => ({
      addAccount: (props, accountName, newAccount) => {
        return addAccount(props, accountName, dispatch, newAccount);
      },
      addWatchOnlyAccount: (props, accountName, dispatch, publicKey) => {
        return addWatchOnlyAccount(props, accountName, dispatch, publicKey);
      }
    })
  )(Import)
);
