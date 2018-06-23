import React, { Component } from "react";
import { FormattedNumber } from "react-intl";

import styles from "./Vote.css";

class Vote extends Component {
  render() {
    return (
      <div className={styles.vote}>
        <div className={styles.voteLabel}>{`${this.props.voteLabel} -`}</div>
        <div className={styles.container}>
          <div className={styles.title}>{this.props.voteTitle}</div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Last Block : </span>
            <span className={styles.subVal}>
              <FormattedNumber value={this.props.lastBlock} />
            </span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Blocks Produced : </span>
            <span className={styles.subVal}>
              <FormattedNumber value={this.props.blocksProduced} />
            </span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}>Blocks Missed : </span>
            <span className={styles.subVal}>
              <FormattedNumber value={this.props.blocksMissed} />
            </span>
          </div>
          <div className={styles.subContainer}>
            <span className={styles.subTitle}> Total Vote :</span>
            <span className={styles.subVal}>
              <FormattedNumber value={this.props.totalVote} /> TRX
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Vote;
