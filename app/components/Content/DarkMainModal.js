import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DarkMainModal.css';

import { withRouter } from 'react-router-dom';

import Header from '../Header';

import { CloseIcon } from '../Icons';

class Backup extends Component {
  render() {

    return (
      <div className={styles.container}>
        <Header className={styles.white} headerName={ this.props.header } />
        <div onClick={this.props.history.goBack} className={styles.closeModal}><CloseIcon /></div>
        <div className={`${styles.subContainer} ${this.props.className}`}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default withRouter((Backup));