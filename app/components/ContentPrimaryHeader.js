import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ContentPrimaryHeader.css';

import { Dropdown } from 'semantic-ui-react'
import { MoreIcon, CalendarIcon, VoteIcon } from './Icons';

export default class ContentPrimaryHeader extends Component {
  render() {
    return (
      <div className={styles.bar}>
        <div>{ this.props.text }</div>
        { this.props.children }
      </div>
    );
  }
}
