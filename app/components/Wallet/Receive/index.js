import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Receive.css';

import { Button, Input, Checkbox } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import MainModal from '../../Content/DarkMainModal';
import { ShareIcon, CopyIcon, SendIcon } from '../../Icons';

export default class Receive extends Component {
  state = {
    wallet: '27U5C9dyNShQuaeJ66FNF9a3axWADz5KKYc'
  }

  render() {
      return (
          <MainModal header="Generate Receive Code">
            <img src="http://via.placeholder.com/175x175"/>
            <div className={styles.buttonContainer}>
              <Button className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><ShareIcon /></Button>
              <Button className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><CopyIcon /></Button>
              <Button className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><SendIcon /></Button>
            </div>
            <input className={styles.textBox} value={this.state.wallet} readOnly />
          </MainModal>
      );
  }
}
