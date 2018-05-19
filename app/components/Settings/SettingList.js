import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SettingList.css';

import Header from '../ContentPrimaryHeader';

import { Dropdown } from 'semantic-ui-react'
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

export default class SettingList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header text="SETTINGS :">
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
