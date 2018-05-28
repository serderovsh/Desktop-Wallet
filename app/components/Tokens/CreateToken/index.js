import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CreateToken.css';

import { Dropdown, Input, Form, Button } from 'semantic-ui-react';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import { MoreIcon, CalendarIcon, VoteIcon } from '../../Icons';

export default class CreateToken extends Component {

  inputAlphanumeric(e) {
    if (!/^[a-zA-Z0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <Secondary className={styles.container}>
        <Header headerName="Create New Token" />
        <div className={styles.createContainer}>
          <div className={styles.header}>ISSUE A TOKEN : </div>
          <div className={styles.textBoxContainer}>
            <span>Token Name</span>
            <Input className={styles.input} onKeyPress={this.inputAlphanumeric} />
          </div>
          <div className={styles.textBoxContainer}>
            <span>Total Supply</span>
            <Input type="number" className={styles.input} />
          </div>
          <div className={styles.inputSubText}>Total amount of tokens which will be in circulation.</div>
          <div className={styles.divider}></div>
          <div className={styles.textBoxContainer}>
            <span>Description</span>
            <Input className={styles.input} />
          </div>
          <div className={styles.inputSubText}>A short description of the purpose of the token.</div>
          <div className={styles.textBoxContainer}>
            <span>URL</span>
            <Input className={styles.input} />
          </div>
          <div className={styles.inputSubText}>A website where users can find more information about the token.</div>
          <div className={styles.divider}></div>
          <div className={styles.header}>EXCHANGE RATE : </div>
          <div className={styles.headerSubText}>Specify the price of a single token by defining how many tokens a participant will receive for every TRX they spend.</div>
          <div className={styles.divider}></div>
          <div className={styles.headerSubText}>Participants will receive 1 Token  for every 1 TRX.</div>
          <div className={styles.divider}></div>
          <div className={styles.textBoxContainer}>
            <span>TRX Amount</span>
            <Input type="number" className={styles.input} />
          </div>
          <div className={styles.textBoxContainer}>
            <span>Token Amount</span>
            <Input type="number" className={styles.input} />
          </div>
        </div>
      </Secondary>
    );
  }
}
