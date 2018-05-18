// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Button.css';

type Props = {
  name: string
};

export default class Button extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.button}>{ this.props.name }</div>
    );
  }
}
