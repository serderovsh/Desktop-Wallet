import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';

import styles from './Creation.css';

import Header from '../../Header';
import Secondary from '../../Content/Secondary';
import CreationContent from './Create/CreationContent';

const panes = [
  { menuItem: 'Create New Wallet', render: () => <Tab.Pane attached={false}><CreationContent/></Tab.Pane> },
  { menuItem: 'Import Wallet', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> }
]

export default class Creation extends Component {
  render() {
    return (
      <Secondary className={styles.container}>
        <Header headerName="Wallet Creation" />
        <Tab className={styles.tabContainer} menu={{ secondary: true }} panes={panes} />
      </Secondary>
    );
  }
}
