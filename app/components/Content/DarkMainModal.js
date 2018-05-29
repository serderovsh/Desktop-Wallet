import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DarkMainModal.css';

import { withRouter } from 'react-router-dom';

import Header from '../Header';

import { BackArrowIcon } from '../Icons';

class DarkMainModal extends Component {
  render() {

    return (
      <div className={styles.container}>
        <Header className={styles.white} headerName={ this.props.header } />
        <div onClick={this.props.history.goBack} className={styles.backArrow}><BackArrowIcon /></div>
        <div className={`${styles.subContainer} ${this.props.className}`}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default withRouter((DarkMainModal));