import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Vote.css';


import { WalletIcon } from '../Icons';

class Vote extends Component {

    numFormat(val) {
        if (!val) return '0';

        if (val > 1e6) {
          return (val / 1e6) + 'M';
        }
        
        const formatted = val.replace(/./g, function(c, i, a) {
          return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        });
        return formatted;
    }

  render() {
    return (
      <div className={styles.vote}>
        <div className={styles.voteLabel}>{ `${this.props.voteLabel} -` }</div>
        <div className={styles.container}>
          <div className={styles.title}>{ this.props.voteTitle }</div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Last Block : </span>
            <span className={styles.subVal}>{ this.numFormat(this.props.lastBlock) }</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Blocks Produced : </span>
            <span className={styles.subVal}>{ this.numFormat(this.props.blocksProduced) }</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Blocks Missed : </span>
            <span className={styles.subVal}>{ `${this.numFormat(this.props.blocksMissed)} TRX` }</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Vote;
