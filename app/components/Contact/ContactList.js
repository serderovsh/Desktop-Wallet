// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ContactList.css';

type Props = {};

export default class ContactList extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contactBar}>
          <div>Contacts :</div>
        </div>
      </div>
    );
  }
}
