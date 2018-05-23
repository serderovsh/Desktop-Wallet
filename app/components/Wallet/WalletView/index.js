import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react'
import styles from './WalletView.css';


import { MoreIcon, VoteIcon, CalendarIcon } from '../../Icons';
import buttonStyles from '../../Button.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import SubHeader from './SubHeader';
import DatePicker from './DatePicker';
import TxList from './TxList';
import Background from '../../ContentSecondaryBG';

export default class WalletView extends Component {

  render() {
    return (
      <Secondary>
        <Header headerName="Personal Wallet">
          <Dropdown className={styles.moreMenu} icon={<MoreIcon />}>
            <Dropdown.Menu>
              <Dropdown.Item text='Temp Dropdown One' icon={<VoteIcon />} />
              <Dropdown.Divider />
              <Dropdown.Item text='Temp Dropdown Two' icon={<CalendarIcon />} />
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <SubHeader />
        <div className={styles.buttonContainer}>
          <NavLink to="/wallets/receive">
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Receive</Button>
          </NavLink>
          <NavLink to="/wallets/send">
            <Button className={`${buttonStyles.button} ${buttonStyles.black}`}>Send</Button>
          </NavLink>
        </div>
        <DatePicker />
        <TxList />
      </Secondary>
    );
  }
}
