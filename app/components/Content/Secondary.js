import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Secondary.css";

import Header from "../ContentPrimaryHeader";

import { Dropdown } from "semantic-ui-react";
import { MoreIcon } from "../Icons";

import Background from "../ContentSecondaryBG";

export default class Secondary extends Component {
  render() {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        <div className={styles.content}>{this.props.children}</div>
        <Background className={styles.bg} />
      </div>
    );
  }
}
