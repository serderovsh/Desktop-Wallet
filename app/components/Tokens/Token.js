import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Token.css";
import TokenProgressBar from "./TokenProgressBar";

class Token extends Component {
  // external redirect
  goToSite = () => require("electron").shell.openExternal(this.props.tokenURL);

  render() {
    return (
      <NavLink
        to={"/tokens/tokenDetails/" + this.props.tokenID + "/"}
        className={styles.token}
      >
        <div className={styles.topBar}>
          <div className={styles.tokenName}>{this.props.tokenName}</div>
          {this.props.tokenURL ? (
            <div className={styles.website} onClick={this.goToSite}>
              View Website
            </div>
          ) : (
            <div className={styles.filler} />
          )}
        </div>
        <TokenProgressBar
          className={styles.tokenBar}
          tokenCurrent={this.props.totalIssued}
          tokenMax={this.props.totalSupply}
          endTime={this.props.endTime}
        />
      </NavLink>
    );
  }
}

export default connect(state => ({
  tokens: state.tokens.tokens,
  router: state.router
}))(Token);
