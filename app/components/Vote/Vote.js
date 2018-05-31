import React, { Component } from "react";
import { FormattedNumber } from "react-intl";

import { NavLink } from "react-router-dom";

import styles from "./Vote.css";

class Vote extends Component {
  render() {
    return (
      // convert addres to base64 beccause address has a slash which screws up routing
      <NavLink
        to={"/vote/voteDetails/" + btoa(this.props.address) + "/"}
        className={styles.vote}
        activeClassName={styles.active}
      >
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
      </NavLink>
    );
  }
}

export default Vote;
