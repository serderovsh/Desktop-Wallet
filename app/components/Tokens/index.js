import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Dropdown } from 'semantic-ui-react';
import styles from './TokenList.css';

import buttonStyles from '../Button.css';

import { loadTokens } from '../../actions/tokens';

import Header from '../ContentPrimaryHeader';
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';


class TokenList extends Component {
  componentDidMount() {
    this.props.loadTokens();
  }
  render() {
    return (
      <div className={styles.container}>
        <Header text="TOKENS :">
          <Dropdown icon={<MoreIcon />}>
            <Dropdown.Menu>
              <Dropdown.Item text='New Wallet' icon={<WalletIcon />} />
              <Dropdown.Divider />
              <Dropdown.Item text='Import Wallet' icon={<DownloadIcon />} />
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <div className={styles.buttonContainer}>
          <NavLink to="/tokens/createtoken">
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Token</Button>
          </NavLink>
        </div>
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
