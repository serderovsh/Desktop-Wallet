// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContentMain.css';

type Props = {
  //children: React.Node
};

export default class ContentMain extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        {/*{this.props.children}*/}
      </div>
    );
  }
}
