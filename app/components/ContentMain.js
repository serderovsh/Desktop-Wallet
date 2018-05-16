// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContentMain.css';

type Props = {};

export default class ContentMain extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to="/counter">to Counter</Link>
      </div>
    );
  }
}
