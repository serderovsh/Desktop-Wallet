import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Tab } from 'semantic-ui-react';
import styles from './TokenList.css';

import buttonStyles from '../Button.css';

import { loadTokens } from '../../actions/tokens';

import Header from '../ContentPrimaryHeader';
import Overview from './Overview';
import Participants from './Participants';
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

const panes = [
  { menuItem: 'Overview', render: () => <Tab.Pane attached={false}><Overview /></Tab.Pane> },
  { menuItem: 'Participants', render: () => <Tab.Pane attached={false}><Participants /></Tab.Pane> }
];

class TokenList extends Component {


  render() {
    return (
      <div className={styles.container}>
        <Header text="TOKENS :" />
        <Tab className={`${styles.tabContainer} blue`} menu={{ secondary: true }} panes={panes} />
      </div>
    );
  }
}


export default connect(
  state => ({ tokens: state.tokens.tokens, searchString: state.app.searchString, }),
  dispatch => ({
    loadTokens: () => {
      dispatch(loadTokens(dispatch));
    }
  })
)(TokenList);
