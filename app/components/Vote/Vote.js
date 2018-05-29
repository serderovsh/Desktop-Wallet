import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Vote.css';


class Vote extends Component {
  render() {
    console.log(this.props.address)
    return (
      // convert addres to base64 beccause address has a slash which screws up routing
      <NavLink to={"/vote/voteDetails/" + btoa(this.props.address) + "/"} className={styles.vote}>
        <div className={styles.voteLabel}>{`${this.props.voteLabel} -`}</div>
        <div className={styles.container}>
          <div className={styles.title}>{this.props.voteTitle}</div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Last Block : </span>
            <span className={styles.subVal}>{this.props.lastBlock.toLocaleString()}</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Blocks Produced : </span>
            <span className={styles.subVal}>{this.props.blocksProduced.toLocaleString()}</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Blocks Missed : </span>
            <span className={styles.subVal}>{this.props.blocksMissed.toLocaleString()}</span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}> Total Vote :</span>
            <span className={styles.subVal}>{this.props.totalVote.toLocaleString()} TRX</span>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default Vote;
