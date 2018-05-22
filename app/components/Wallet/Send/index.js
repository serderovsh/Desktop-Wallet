import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Send.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import SearchBar from './SearchBar';
import Background from '../../ContentSecondaryBG'

import { MoreIcon, CalendarIcon, VoteIcon } from '../../Icons';

export default class Send extends Component {
  render() {
    return (
      <Secondary className={styles.container}>
        <Header headerName="Send" />
        <SearchBar />
      </Secondary>
    );
  }
}
