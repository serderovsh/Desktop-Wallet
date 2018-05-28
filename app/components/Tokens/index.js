import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Tab } from 'semantic-ui-react';
import styles from './TokenList.css';

import buttonStyles from '../Button.css';

import { loadTokens } from '../../actions/tokens';

import Token from './Token';
import Header from '../ContentPrimaryHeader';

import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

class TokenList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: '',
      tokens: this.props.tokens,
    }
    this.props.loadTokens()
  }

  filterTokens = (e) => {
    let filtered = this.props.tokens.filter((token) => {
      console.log(token.name.includes(e.target.value))
      return token.name.includes(e.target.value);
    });

    this.setState({
      tokens: filtered,
    });
  }

  renderTokens() {
    let { searchString } = this.props;
    let { tokens } = this.state;

    return (
      <div className={styles.tokensContainer}>
        { this.state.tokens.length < 1 ? (<div className={styles.noResults}>No Tokens Found</div>) : '' }
        {
          this.state.tokens.map((token, index) => {
            return (
              <Token
                key={index}
                tokenName={token.name}
                tokenURL={token.url}
                totalIssued={token.totalIssued || 0}
                totalSupply={token.total_supply}
                endTime={token.end_time}
                index={token.name}
              />
            )
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <Header text="TOKENS :" />
        <div className={styles.subContainer}>
          <input className={styles.input} placeholder="Search for a token here..." onChange={this.filterTokens}/>
          { this.renderTokens() }
          <div className={styles.buttonContainer}>
            <NavLink to="/tokens/createtoken">
              <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Token</Button>
            </NavLink>
          </div>
        </div>
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
