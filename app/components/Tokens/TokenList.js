// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TokenList.css';

type Props = {};

export default class TokenList extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tokenBar}>
          <div>TOKENS :</div>
        </div>
      </div>
    );
  }
}
