import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../Wallet/Send/Send.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import Background from '../../ContentSecondaryBG';
import { MoreIcon, CalendarIcon, VoteIcon } from '../../Icons';

export default class Support extends Component {
  render() {
    return (
      <Secondary className={styles.container}>
        <Header headerName="Help & Support" />
      </Secondary>
    );
  }
}
