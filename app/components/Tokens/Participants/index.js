import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Participants.css';

import { Button, Dropdown } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import Token from './Token';

export default class Participants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: '',
      tokens: this.props.tokens
    }
  }

  filterTokens = (e) => {
    let filtered = this.props.tokens.filter((token) =>{
      return token.name.includes(e.target.value);
    });

    this.setState({
      tokens: filtered,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <input className={styles.input} placeholder="Search for a token here..." onChange={this.filterTokens}/>
        <div className={styles.tokensContainer}>
          { this.state.tokens.length < 1 ? (<div className={styles.noResults}>No Tokens Found</div>) : '' }
          {
            this.state.tokens.map((token, index) => {
              return (
                <Token
                  key={index}
                  tokenName={token.name}
                  totalSupply={token.totalSupply}
                  totalIssued={token.totalIssued}
                  registered={token.registered}
                />
              )
            })
          }
        </div>
        <div className={styles.buttonContainer}>
          <NavLink to="/tokens/createtoken">
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Token</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}


