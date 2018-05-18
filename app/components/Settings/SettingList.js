// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SettingList.css';

type Props = {};

export default class SettingList extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.settingBar}>
          <div>Settings :</div>
        </div>
      </div>
    );
  }
}
