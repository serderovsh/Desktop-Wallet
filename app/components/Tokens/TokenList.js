import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TokenList.css';

import Header from '../ContentPrimaryHeader';

import { Dropdown } from 'semantic-ui-react'
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

export default class TokenList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header text="TOKENS :">
          <Dropdown icon={<MoreIcon />}>
            <Dropdown.Menu>
              <Dropdown.Item text='New Wallet' icon={<WalletIcon />}/>
              <Dropdown.Divider />
              <Dropdown.Item text='Import Wallet' icon={<DownloadIcon />}/>
            </Dropdown.Menu>
          </Dropdown>
        </Header>
      </div>
    );
  }
}
