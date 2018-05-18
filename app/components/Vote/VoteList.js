// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './VoteList.css';

type Props = {};

export default class VoteList extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.voteBar}>
          <div>REPRESENTATIVE LISTING :</div>
        </div>
      </div>
    );
  }
}
