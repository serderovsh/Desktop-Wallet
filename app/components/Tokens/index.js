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
  { name: 'token-one', url: 'http://google.com/', totalSupply: 99999999, totalIssued: 85230000, registered: Date.now() },
  { name: 'token-two', totalSupply: 99999999, totalIssued: 15230000, registered: Date.now() },
  { name: 'token-three', totalSupply: 99999999, totalIssued: 25230000, registered: Date.now() },
  { name: 'crapcoin', url: 'http://google.com/', totalSupply: 99999999, totalIssued: 15230000, registered: Date.now() },
  { name: 'textcoin', url: 'http://google.com/', totalSupply: 99999999, totalIssued: 55230000, registered: Date.now() },
  { name: 'eszurium', totalSupply: 99999999, totalIssued: 95230000, registered: Date.now() },
]

class TokenList extends Component {
  componentDidMount() {
    this.props.loadTokens();
  }
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
  state => ({ tokens: state.tokens.tokens }),
  dispatch => ({
    loadTokens: () => {
      dispatch(loadTokens(dispatch));
    }
  })
)(TokenList);
