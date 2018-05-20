import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CategoryHeader.css';

import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

export default class CategoryHeader extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>{ this.props.text }</div>
        { this.props.children }
      </div>
    );
  }
}
