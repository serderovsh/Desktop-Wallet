import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DarkMainModal.css';

import Header from '../Header';

import { CloseIcon } from '../Icons';

export default class Backup extends Component {
  render() {

    return (
      <div className={styles.container}>
        <Header className={styles.white} headerName={ this.props.header } />
        <div className={styles.closeModal}><CloseIcon /></div>
        <div className={`${styles.subContainer} ${this.props.className}`}>
          { this.props.children }
        </div>
      </div>
    );
  }
}
