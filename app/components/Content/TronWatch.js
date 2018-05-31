import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./TronWatch.css";

import Anime from "react-anime";

import { CSSTransitionGroup } from "react-transition-group";

import { TronWatchIcon } from "../Icons";
import ContentSecondaryBG from "../ContentSecondaryBG";

export default class TronWatch extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <TronWatchIcon className={styles.logo} />
          <div className={styles.subHeader}>The wallet built for Tron</div>
        </div>
        <ContentSecondaryBG className={styles.bg} />
      </div>
    );
  }
}
