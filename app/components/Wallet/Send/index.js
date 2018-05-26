import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Send.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import SearchBar from './SearchBar';
import Background from '../../ContentSecondaryBG';

import { MoreIcon, CalendarIcon, VoteIcon } from '../../Icons';

class Send extends Component {
  render() {
    let isToken = (this.props.match.token ? true : false);

    let assetName = (isToken ? this.props.match.token : "TRX");

    return (
      <Secondary className={styles.container}>
        <Header headerName={"Send " + assetName} />
        <SearchBar />
      </Secondary>
    );
  }
}

export default withRouter(connect(
    state => ({ wallet: state.wallet }),
    dispatch => ({})
)(Send));
