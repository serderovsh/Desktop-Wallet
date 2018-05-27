import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';

import styles from './Creation.css';

import Header from '../../Header';
import Secondary from '../../Content/Secondary';
import CreationContent from './Create';

export default class Creation extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header headerName="Wallet Creation" />
        <CreationContent/>
      </div>
    );
  }
}
