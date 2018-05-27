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
  { menuItem: 'Overview', render: () => <Tab.Pane attached={false}><Overview tokens={tokens} /></Tab.Pane> },
  { menuItem: 'Participants', render: () => <Tab.Pane attached={false}><Participants tokens={tokens} /></Tab.Pane> }
]

let tokens = [
  { name: 'token-one', totalSupply: 9999999999, totalIssued: 15230000, registered: Date.now() },
  { name: 'token-two', totalSupply: 9999999999, totalIssued: 15230000, registered: Date.now() },
  { name: 'token-three', totalSupply: 9999999999, totalIssued: 15230000, registered: Date.now() },
  { name: 'crapcoin', totalSupply: 9999999999, totalIssued: 15230000, registered: Date.now() },
  { name: 'textcoin', totalSupply: 9999999999, totalIssued: 15230000, registered: Date.now() },
  { name: 'eszurium', totalSupply: 9999999999, totalIssued: 15230000, registered: Date.now() },
]

class TokenList extends Component {
  componentDidMount() {
    this.props.loadTokens();
  }
  render() {
    return (
      <div className={styles.container}>
        <Header text="TOKENS :" />
        <Tab className={styles.tabContainer} menu={{ secondary: true }} panes={panes} />
      </div>
    );
  }
}


export default connect(
  state => ({ tokens: state.tokens.tokens }),
  dispatch => ({
    loadTokens: () => {
      dispatch(loadTokens(dispatch));
    }
  })
)(TokenList);
