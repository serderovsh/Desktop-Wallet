import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

import { Dropdown } from 'semantic-ui-react'
import { MoreIcon, CalendarIcon, VoteIcon } from './Icons';

const coins = [
  { amount: '0.98654110', type: 'TRX' },
  { amount: '586.21585253', type: 'Tkn1' },
  { amount: '0.28895632', type: 'Tkn2' }
]

export default class Header extends Component {
  render() {
    return (
      <div className={styles.viewHeader}>
        <div className={`${styles.headerName} ${this.props.className}`}>{ this.props.headerName }</div>
        { this.props.children }
      </div>
    );
  }
}
