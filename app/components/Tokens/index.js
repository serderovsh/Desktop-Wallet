import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown } from 'semantic-ui-react';
import styles from './TokenList.css';

import buttonStyles from '../Button.css';

import Header from '../ContentPrimaryHeader';
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

export default class TokenList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header text="TOKENS :">
          <Dropdown icon={<MoreIcon />}>
            <Dropdown.Menu>
              <Dropdown.Item text='New Wallet' icon={<WalletIcon />} />
              <Dropdown.Divider />
              <Dropdown.Item text='Import Wallet' icon={<DownloadIcon />} />
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <div className={styles.buttonContainer}>
          <NavLink to="/tokens/createtoken">
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Token</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}
