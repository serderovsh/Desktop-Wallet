import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

import { Dropdown } from 'semantic-ui-react'
import { MoreIcon, CalendarIcon, VoteIcon } from './Icons';


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
