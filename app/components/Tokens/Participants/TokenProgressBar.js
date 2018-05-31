import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./TokenProgressBar.css";

class Token extends Component {
  render() {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        <div className={styles.top}>
          <div className={styles.green}>
            {Math.round((this.props.tokenCurrent / this.props.tokenMax) * 100)}%
          </div>
          <div className={styles.tokenContainer}>
            <span className={styles.green}>
              {this.props.tokenCurrent.toLocaleString()}
            </span>{" "}
            / {this.props.tokenMax.toLocaleString()}
          </div>
        </div>
        <progress
          className={styles.progress}
          value={this.props.tokenCurrent}
          max={this.props.tokenMax}
        />
        <div className={`${styles.bottom} ${styles.green}`}>
          ends on : {new Date(this.props.endTime).toLocaleString()}
        </div>
      </div>
    );
  }
}

export default Token;
