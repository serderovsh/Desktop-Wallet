import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Vote.css';


import { WalletIcon } from '../Icons';

class Vote extends Component {
  render() {
    return (
      <div className={styles.vote}>
        <div className={styles.voteLabel}>{ `${this.props.voteLabel} -` }</div>
        <div className={styles.container}>
          <div className={styles.title}>{ this.props.voteTitle }</div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Last Block : </span>
            <span className={styles.subVal}>{this.props.lastBlock}</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Blocks Produced : </span>
            <span className={styles.subVal}>{this.props.blocksProduced}</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Blocks Missed : </span>
            <span className={styles.subVal}>{this.props.blocksMissed} TRX }</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Vote;
