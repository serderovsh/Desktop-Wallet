import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Token.css';

class Token extends Component {
  render() {
    return (
      <div className={styles.token}>
        <div className={styles.container}>
          <div className={styles.title}>{ this.props.tokenName }</div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Total Supply : </span>
            <span className={styles.subVal}>{this.props.totalSupply.toLocaleString()}</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Total Issued : </span>
            <span className={styles.subVal}>{this.props.totalIssued.toLocaleString()}</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Registered :</span>
            <span className={styles.subVal}>{(new Date(this.props.registered)).toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Token;
